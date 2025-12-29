import React, { useState, useEffect } from "react";
import StudentRow from "./components/StudentRow";

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
      <h3>Student List</h3>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "8px" }}
      />

      <input
        placeholder="Score (0-100)"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        style={{ marginRight: "8px" }}
      />

      <button onClick={addStudent} style={{ marginLeft: "8px" }}>
        Add Student
      </button>

      <hr />

      {/* Student List  */}
      <StudentRow students={sortedStudents} updateScore={updateScore} />

      {/* Sort Button */}
      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setSortHighToLow(!sortHighToLow)}>
          Sort: {sortHighToLow ? "High → Low" : "Low → High"}
        </button>
      </div>

      {/* Statistics Bar */}
      <div style={{ marginBottom: "10px" }}>
        Total: {total} || Passing: {passing} || Failing: {failing}
      </div>
    </div>
  );
};

export default App;
