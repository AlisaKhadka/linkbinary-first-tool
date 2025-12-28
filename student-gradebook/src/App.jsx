import React, { useState } from "react";
import StudentRow from "./components/StudentRow";
const App = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const addStudent = () => {
    setStudents([...students, { name: name, score: Number(score) }]);
    setName("");
    setScore("");
  };

  const updateScore = (index) => {
    const newScore = prompt("Enter new score (0-100)");

    setStudents(
      students.map((student, i) =>
        i === index ? { ...student, score: Number(newScore) } : student
      )
    );
  };
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

      <StudentRow students={students} updateScore={updateScore} />
    </div>
  );
};

export default App;

