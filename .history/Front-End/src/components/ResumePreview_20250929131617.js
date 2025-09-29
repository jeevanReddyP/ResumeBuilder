import React from "react";

const ResumePreview = ({ resume }) => {
  if (!resume) return <div>No Resume Selected</div>;

  const {
    profileInfo,
    contactInfo,
    workExperience,
    education,
    skills,
    projects,
    certifications,
    languages,
    interests,
    thumbnailLink,
  } = resume;

  return (
    <div style={styles.container}>
      {/* Thumbnail / Profile */}
      <div style={styles.header}>
        {thumbnailLink && (
          <img
            src={thumbnailLink}
            alt="Thumbnail"
            style={styles.thumbnail}
          />
        )}
        <div>
          <h1>{profileInfo?.fullName || "Full Name"}</h1>
          <h3>{profileInfo?.designation || "Designation"}</h3>
          <p>{profileInfo?.summary || "Summary about yourself..."}</p>
        </div>
      </div>

      {/* Contact Info */}
      <div style={styles.section}>
        <h2>Contact</h2>
        <p>Email: {contactInfo?.email}</p>
        <p>Phone: {contactInfo?.phone}</p>
        <p>Location: {contactInfo?.location}</p>
        {contactInfo?.linkedin && <p>LinkedIn: {contactInfo.linkedin}</p>}
        {contactInfo?.github && <p>GitHub: {contactInfo.github}</p>}
        {contactInfo?.website && <p>Website: {contactInfo.website}</p>}
      </div>

      {/* Work Experience */}
      <div style={styles.section}>
        <h2>Work Experience</h2>
        {workExperience?.map((work, index) => (
          <div key={index} style={styles.item}>
            <strong>{work.role}</strong> at {work.company}
            <span>
              ({work.startDate || "Start"} - {work.endDate || "End"})
            </span>
            <p>{work.description}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={styles.section}>
        <h2>Education</h2>
        {education?.map((edu, index) => (
          <div key={index} style={styles.item}>
            <strong>{edu.degree}</strong> - {edu.institution}
            <span>
              ({edu.startDate || "Start"} - {edu.endDate || "End"})
            </span>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div style={styles.section}>
        <h2>Skills</h2>
        {skills?.map((skill, index) => (
          <div key={index}>
            {skill.name} - {skill.progress}%
          </div>
        ))}
      </div>

      {/* Projects */}
      <div style={styles.section}>
        <h2>Projects</h2>
        {projects?.map((project, index) => (
          <div key={index} style={styles.item}>
            <strong>{project.title}</strong>
            <p>{project.description}</p>
            {project.github && (
              <p>
                GitHub: <a href={project.github}>{project.github}</a>
              </p>
            )}
            {project.liveDemo && (
              <p>
                Live: <a href={project.liveDemo}>{project.liveDemo}</a>
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div style={styles.section}>
        <h2>Certifications</h2>
        {certifications?.map((cert, index) => (
          <div key={index}>
            {cert.title} - {cert.issuer} ({cert.year})
          </div>
        ))}
      </div>

      {/* Languages */}
      <div style={styles.section}>
        <h2>Languages</h2>
        {languages?.map((lang, index) => (
          <div key={index}>
            {lang.name} - {lang.progress}%
          </div>
        ))}
      </div>

      {/* Interests */}
      <div style={styles.section}>
        <h2>Interests</h2>
        <p>{interests?.join(", ")}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  thumbnail: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "20px",
  },
  section: {
    marginBottom: "15px",
  },
  item: {
    marginBottom: "10px",
  },
};

export default ResumePreview;
