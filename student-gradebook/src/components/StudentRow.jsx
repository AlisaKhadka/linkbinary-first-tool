const StudentRow = ({ students, updateScore }) => {
  return (
    <div>
      {students.map((student, index) => (
        <div key={index} style={{ marginBottom: "8px" }}>
          {student.name} {student.score}
          {student.score >= 40 ? " (Pass)" : " (Fail)"}
          {student.score === 100 && " 🏆"}
          <button onClick={() => updateScore(index)}>Update Score</button>
        </div>
      ))}
    </div>
  );
};

export default StudentRow;
