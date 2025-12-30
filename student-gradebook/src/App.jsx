import React, { useState, useEffect } from "react";
import StudentRow from "./components/StudentRow";
import "./styles/App.css";

const App = () => {
  // Load students from localStorage
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [sortHighToLow, setSortHighToLow] = useState(true);

  //  Save students to localstorage whenever students change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  //  Add student
  const addStudent = () => {
    if (!name || score === "") return alert("Enter name and score");
    setStudents([...students, { name: name, score: Number(score) }]);
    setName("");
    setScore("");
  };

  // Update score
  const updateScore = (index) => {
    const newScore = prompt("Enter new score (0-100)");
    if (newScore === null) return;

    setStudents(
      students.map((student, i) =>
        i === index ? { ...student, score: Number(newScore) } : student
      )
    );
  };

  // Sorting
  const sortedStudents = [...students].sort((a, b) =>
    sortHighToLow ? b.score - a.score : a.score - b.score
  );

  // Statistics
  const total = students.length;
  const passing = students.filter((s) => s.score >= 40).length;
  const failing = total - passing;

  return (
    <div>
      <h3 className="title">Student Gradebook</h3>
      <div className="containerControls">
      <div className="controls">
     
       <input
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button onClick={addStudent}>Add Student</button>
        {/* Sort Button */}
        <div>
          <button
            className="sort-btn"
            onClick={() => setSortHighToLow(!sortHighToLow)}
          >
            Sort: {sortHighToLow ? "High → Low" : "Low → High"}
          </button>
          </div>
        </div>
      </div>

      {/* Student List  */}
      <StudentRow students={sortedStudents} updateScore={updateScore} />

      {/* Statistics Bar */}
      <div className="stats">
        <div className="stat-card">
          <h4>Total</h4>
          <p> {total}</p>
        </div>

        <div className="stat-card pass">
          <h4>Passing</h4>
          <p>{passing}</p>
        </div>

        <div className="stat-card fail">
          <h4>Failing</h4>
          <p>{failing}</p>
        </div>
      </div>
    </div>
    
  );
};

export default App;