// components/ExperienceCard.jsx
import React from 'react';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-[#2A334D] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-white">{experience.title}</h2>
      <h3 className="text-lg text-gray-300 mt-1">{experience.company}</h3>
      <p className="text-gray-400 mt-1">{experience.duration}</p>

      {/* Deskripsi */}
      <p className="text-gray-300 mt-4">{experience.description}</p>

      {/* Prestasi (Jika Ada) */}
      {experience.achievements && experience.achievements.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-white">Prestasi:</h4>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tanggung Jawab */}
      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-white">Tanggung Jawab:</h4>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Teknologi (Jika Terkait dengan Coding) */}
      {experience.relatedToCoding && experience.technologies && experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-[#1A2238] text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
