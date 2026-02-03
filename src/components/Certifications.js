import React from 'react';

const Certifications = ({ data }) => {
  const { certifications } = data;

  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div className="certification-item" key={index}>
            <h3>{cert.name}</h3>
            <p className="issuer">{cert.issuer} • {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
