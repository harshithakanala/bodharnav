import React, { useRef, useState } from 'react';
import './App.css';
import heroImage from './logo.jpeg';
import { faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LearnifyBrochureSite() {
  const aboutRef = useRef(null);
  const whyRef = useRef(null);
  const programsRef = useRef(null);
  const missionRef = useRef(null);
  const contactRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#444' }}>
      {/* Hero / Landing Section */}
<section className="hero-section">
  {/* Navigation Bar */}
  <nav className="navbar">
    <img src={heroImage} alt="Bodharnav Logo" className="navbar-logo" />
    <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
      {[
        { label: 'About Us', ref: aboutRef },
        { label: 'Why Choose Us', ref: whyRef },
        { label: 'Our Programs', ref: programsRef },
        { label: 'Mission & Vision', ref: missionRef },
        { label: 'Contact', ref: contactRef },
      ].map((item) => (
        <button
          key={item.label}
          onClick={() => scrollToRef(item.ref)}
          className="nav-btn"
        >
          {item.label}
        </button>
      ))}
    </div>
  </nav>
</section>

  {/* Hero Content */}
  <div className="hero-content">
    <h1 className="hero-title">BODHARNAV</h1>
    <p className="hero-subtitle">WAY TO WISDOM</p>
    <button onClick={() => scrollToRef(aboutRef)} className="read-more-btn">
      Read More
    </button>
  </div>

      {/* ABOUT US */}
      <section ref={aboutRef} style={{ padding: '100px 20px 60px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: 'auto' }}>
          <h2 style={{ color: '#00695c', fontSize: '2.2em', textAlign: 'center', marginBottom: '30px' }}>
            About Us
          </h2>
          <p style={{ fontSize: '1.1em', lineHeight: '1.8', marginBottom: '20px' }}>
            Bodharnav promotes Life-Skill education and mental well-being in people and equips them to face the realities of life. We believe that every individual has potential to lead a fulfilling and meaningful life. By supporting mental well-being and behavioural preparedness, life skills education equips individuals to behave in pro-social ways.
          </p>
          <p style={{ fontSize: '1.1em', lineHeight: '1.8', marginBottom: '20px' }}>
            We are committed to helping individuals of all ages harness their potential and create a brighter future filled with opportunities for growth and success.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginTop: '30px',
            }}
          >
            <div className="card">
              <h3 style={{ color: '#00796b', fontSize: '1.5em', marginBottom: '15px' }}>
                The Need of Life Skills Education
              </h3>
              <p>
                Learning life skills enables informed decisions, creative problem-solving, effective communication, empathy, and healthy life management, empowering individuals.
              </p>
            </div>
            <div className="card">
              <h3 style={{ color: '#00796b', fontSize: '1.5em', marginBottom: '15px' }}>
                Empowering Students
              </h3>
              <p>
                For students, life skills education is vital to manage academic pressures, social dynamics, and future career challenges.
              </p>
            </div>
            <div className="card">
              <h3 style={{ color: '#00796b', fontSize: '1.5em', marginBottom: '15px' }}>
                Our Program is Designed
              </h3>
              <p>
                Developing skill sets that add organizational value, fostering an attitude of appreciation for lifelong learning.
              </p>
            </div>
            <div className="card">
              <h3 style={{ color: '#00796b', fontSize: '1.5em', marginBottom: '15px' }}>
                Methodology
              </h3>
              <p>
                Our interactive learning uses drama, role play, quizzes, worksheets, debates, and more to build essential skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section ref={whyRef} style={{ backgroundColor: '#e0f2f1', padding: '100px 20px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: 'auto' }}>
          <h2 style={{ color: '#00695c', fontSize: '2.2em', textAlign: 'center', marginBottom: '30px' }}>
            Why Choose Us?
          </h2>
          <ul
            style={{
              listStyleType: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}
          >
            {[
              {
                title: 'Experienced Professionals',
                desc: 'Our team consists of qualified counselors and educators with extensive experience in life skills training and psychological support.',
              },
              {
                title: 'Holistic Approach',
                desc: 'We focus on the whole person, integrating life skills education with counseling to promote overall well-being.',
              },
              {
                title: 'Safe and Supportive Environment',
                desc: 'We create a welcoming space where individuals can explore their feelings, develop skills, and grow at their own pace.',
              },
              {
                title: 'Customized Programs',
                desc: 'We understand that each individual is unique, so we tailor our programs to meet the specific needs and goals of each client.',
              },
            ].map((item) => (
              <li key={item.title} className="card">
                <strong style={{ color: '#00796b', fontSize: '1.3em' }}>{item.title}:</strong>
                <p style={{ marginTop: '10px' }}>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROGRAMS */}
      <section ref={programsRef} style={{ padding: '100px 20px 60px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: 'auto' }}>
          <h2 style={{ color: '#00695c', fontSize: '2.2em', textAlign: 'center', marginBottom: '30px' }}>
            Our Programs
          </h2>
          <ul
            style={{
              listStyleType: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px',
            }}
          >
            {[
              'Skill Development',
              'Career Counseling',
              'Aptitude Test',
              'Parents Workshop',
              'Teachers Workshop',
              'Life Skills Program',
              'Corporate Training',
              'Soft Skills Training',
              'Psychological Counseling',
            ].map((program) => (
              <li key={program} className="program-card">
                {program}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MISSION */}
      <section ref={missionRef} style={{ backgroundColor: '#f1f8e9', padding: '100px 20px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: 'auto' }}>
          <h2 style={{ color: '#00695c', fontSize: '2.2em', textAlign: 'center', marginBottom: '30px' }}>
            Mission & Vision
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}
          >
            <div className="card">
              <p><strong style={{ color: '#00796b', fontSize: '1.3em' }}>Mission:</strong></p>
              <p style={{ marginTop: '10px' }}>
                Our mission is to equip individuals for life’s journey by imparting essential skills that enhance their resilience, adaptability, and overall well-being.
              </p>
            </div>
            <div className="card">
              <p><strong style={{ color: '#00796b', fontSize: '1.3em' }}>Vision:</strong></p>
              <p style={{ marginTop: '10px' }}>
                Our vision is to nurture future generations by instilling in them the life skills necessary to lead fulfilling and purposeful lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={contactRef} style={{ backgroundColor: '#c8e6c9', padding: '100px 20px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: 'auto' }}>
          <h2 style={{ color: '#00695c', fontSize: '2.2em', marginBottom: '20px' }}>Contact Us</h2>
          <p style={{ fontSize: '1.2em', margin: '10px 0' }}>
            📞 <a href="tel:+919632799025" style={{ color: '#00796b', textDecoration: 'none' }}>+91 96327 99025</a>
          </p>
          <p style={{ fontSize: '1.2em', margin: '10px 0' }}>
            📧 <a href="mailto:bodharnavwisdom@gmail.com" style={{ color: '#00796b', textDecoration: 'none' }}>
              bodharnavwisdom@gmail.com
            </a>
          </p>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {[
              { name: 'Instagram', url: 'https://www.instagram.com/bodharnav.ed?igsh=enI5dm5pN3MzaWZo', icon: faInstagram },
              { name: 'Twitter', url: 'https://x.com/iam____sr?t=hgXdNUkovkp_D2-Iq9Slw&s=09', icon: faXTwitter },
              { name: 'Facebook', url: 'https://www.facebook.com/share/1ZU1c9eo2t/', icon: faFacebook },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={`Follow us on ${social.name}`}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#00695c', color: '#fff', textAlign: 'center', padding: '20px' }}>
        <p>© 2025 Bodharnav. All rights reserved.</p>
      </footer>
    </div>
  );
}