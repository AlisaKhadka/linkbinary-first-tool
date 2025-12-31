import "../styles/StudentRow.css";
const StudentRow = ({ students, updateScore }) => {
  return (
    <div className="students-list">
      {students.map((student, index) => (
        <div key={index} className="student-card">
          <div>
            <strong>{student.name}</strong>
          </div>
          <div>
            score: {student.score}
            <span className={`status ${student.score >= 40 ? "pass" : "fail"}`}>
              {student.score >= 40 ? "Pass" : "Fail"}
            </span>
            {student.score === 100 && " 🏆"}
          </div>
          <button onClick={() => updateScore(index)}>Update Score</button>
        </div>
      ))}
    </div>
  );
};

export default StudentRow;