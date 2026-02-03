import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [form, setForm] = useState({ email: '', subject: '', body: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Form submitted — check console for values');
    setForm({ email: '', subject: '', body: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-inner">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Email
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </label>

          <label>
            Subject
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </label>

          <label>
            Body
            <textarea
              name="body"
              value={form.body}
              onChange={handleChange}
              placeholder="Your message"
              rows={6}
              required
            />
          </label>

          <div className="contact-actions">
            <button type="submit" className="contact-submit">Submit</button>
            <Link to="/" className="contact-back">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
