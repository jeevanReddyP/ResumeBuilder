export default function ResumeDetail({ resume }) {
  return (
    <div className="page-container resume-editor">
      <h2>Resume Editor: {resume.title}</h2>
      <button>Toggle Preview</button>
      {/* Form + Preview here */}
    </div>
  );
}
