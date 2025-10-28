export default function Dashboard({ resumes }) {
  return (
    <div className="page-container">
      <h1>My Resumes</h1>
      <div className="resume-list">
        {resumes.map((r) => (
          <div key={r.id} className="resume-item">{r.title}</div>
        ))}
      </div>
    </div>
  );
}
