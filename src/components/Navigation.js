import React from 'react';

const Navigation = ({ sections, activeSection, onSectionSelect }) => {
  return (
    <aside className="navigation-sidebar">
      <div className="sidebar-header">
        <h2>Menu</h2>
      </div>

      <nav className="section-tabs">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`section-tab ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => onSectionSelect(section.id)}
            title={section.label}
          >
            <span className="tab-icon">{section.icon}</span>
            <span className="tab-label">{section.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p className="sidebar-info">Resume Portal</p>
      </div>
    </aside>
  );
};

export default Navigation;
