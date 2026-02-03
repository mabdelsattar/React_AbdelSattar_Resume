import React from 'react';

const Community = ({ data }) => {
  const { communityAndTraining } = data;

  return (
    <section className="community">
      <h2>Community & Training</h2>

      {communityAndTraining.community && (
        <div className="community-section">
          <h3>Community Involvement</h3>
          <div className="community-item">
            <p className="role">
              <strong>{communityAndTraining.community.role}</strong>
            </p>
            <p className="organization">
              {communityAndTraining.community.organization} ({communityAndTraining.community.period})
            </p>
            <ul className="activities">
              {communityAndTraining.community.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {communityAndTraining.professionalTraining &&
        communityAndTraining.professionalTraining.length > 0 && (
          <div className="training-section">
            <h3>Professional Training</h3>
            <ul className="training-list">
              {communityAndTraining.professionalTraining.map((training, index) => (
                <li key={index}>{training}</li>
              ))}
            </ul>
          </div>
        )}
    </section>
  );
};

export default Community;
