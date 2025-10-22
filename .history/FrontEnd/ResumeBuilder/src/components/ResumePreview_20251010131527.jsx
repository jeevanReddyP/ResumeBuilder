import React from "react";

const ResumePreview = ({ resume }) => {
  if (!resume) return <div className="text-center text-gray-500 mt-6">No Resume Selected</div>;

  const { profileInfo, contactInfo, workExperience, education, skills, projects } = resume;

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        {profileInfo?.thumbnailLink && (
          <img
            src={profileInfo.thumbnailLink}
            alt="Thumbnail"
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold">{profileInfo?.fullName || "Full Name"}</h1>
          <h3 className="text-xl text-gray-600">{profileInfo?.designation || "Designation"}</h3>
          <p className="mt-2 text-gray-700">{profileInfo?.summary || "Summary..."}</p>
        </div>
      </div>

      {/* Work Experience */}
      {workExperience?.length > 0 && (
        <div>
          <h2 className="font-semibold text-gray-800 mb-2">Work Experience</h2>
          {workExperience.map((w, i) => (
            <div key={i} className="mb-2">
              <strong>{w.role}</strong> at {w.company} ({w.startDate} - {w.endDate})
              <p>{w.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <div>
          <h2 className="font-semibold text-gray-800 mb-2">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-2">
              <strong>{edu.degree}</strong> - {edu.institution} ({edu.startDate} - {edu.endDate})
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <div>
          <h2 className="font-semibold text-gray-800 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="bg-gray-200 px-2 py-1 rounded-md text-sm">{skill.name} ({skill.progress}%)</span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <div>
          <h2 className="font-semibold text-gray-800 mb-2">Projects</h2>
          {projects.map((p, i) => (
            <div key={i} className="mb-2">
              <strong>{p.title}</strong>
              <p>{p.description}</p>
              {p.github && <p className="text-indigo-600"><a href={p.github}>{p.github}</a></p>}
              {p.liveDemo && <p className="text-indigo-600"><a href={p.liveDemo}>{p.liveDemo}</a></p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
