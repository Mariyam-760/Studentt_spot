import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Hero3D from './Hero3D';
import profileImg from './assets/profile.jpg';
import resumePDF from './assets/resume.pdf';
import coffeeImg from './assets/coffee.jpeg';
// 3D and animation imports will be added in next steps
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import Section3DBackground from './Section3DBackground';

const darkTheme = {
  background: '#10182A',
  card: 'rgba(20, 30, 50, 0.7)',
  text: '#fff',
  accent: '#6C63FF',
  glass: 'rgba(255,255,255,0.1)',
};
const lightTheme = {
  background: '#f5f7fa',
  card: 'rgba(255,255,255,0.7)',
  text: '#222',
  accent: '#6C63FF',
  glass: 'rgba(0,0,0,0.05)',
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: 'Poppins', sans-serif;
    transition: background 0.5s, color 0.5s;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 2rem;
  margin: 1rem 0;
  width: 90%;
  max-width: 700px;
`;

const TabNav = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;
const TabButton = styled.button`
  background: ${({ active, theme }) => (active ? theme.accent : theme.glass)};
  color: ${({ active, theme }) => (active ? '#fff' : theme.text)};
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
`;

const ThemeToggle = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 1000;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.glass};
  @media (max-width: 700px) {
    padding: 0.5rem 0.7rem;
  }
`;
const NavTitle = styled.a`
  color: ${({ theme }) => theme.accent};
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
`;
const NavCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    gap: 0.2rem;
    font-size: 0.9rem;
    flex-wrap: nowrap;
    overflow-x: auto;
    max-width: 90vw;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s;
  white-space: nowrap;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
  &.active {
    color: ${({ theme }) => theme.accent};
    border-bottom: 2px solid ${({ theme }) => theme.accent};
  }
  @media (max-width: 700px) {
    font-size: 0.95rem;
    padding-bottom: 1px;
  }
`;

function App() {
  const [theme, setTheme] = useState('dark');
  const [aboutTab, setAboutTab] = useState('education');

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Navbar>
        <NavTitle href="#hero">Safa's Portfolio</NavTitle>
        <NavCenter>
          <NavLinks>
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavLinks>
        </NavCenter>
        <ThemeToggle onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? '🌞' : '🌙'}
        </ThemeToggle>
      </Navbar>
      {/* Hero Section */}
      <Section id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <Hero3D theme={theme} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700 }}>
            Safa <span style={{ color: themeMode.accent }}>Mariyam</span>
          </h1>
          <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
            Building immersive digital experiences with cutting-edge web technologies and 3D animations.
          </p>
          <div style={{ display: 'flex', gap: '1rem', margin: '1.5rem 0' }}>
            <a href="#projects" style={{ background: themeMode.accent, color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 600 }}>View Projects</a>
            <a href="#contact" style={{ border: `2px solid ${themeMode.accent}`, color: themeMode.accent, padding: '0.7rem 1.5rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 600 }}>Contact Me</a>
          </div>
        </div>
      </Section>
      {/* About Section with Description and Tabs */}
      <Section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
        <Section3DBackground />
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, position: 'relative', zIndex: 1, marginBottom: 32 }}>
          About <span style={{ color: themeMode.accent }}>Me</span>
        </h2>
        <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: 24 }}>
          <img src={profileImg} alt="Profile" style={{ width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${themeMode.accent}` }} />
          <div style={{ flex: 1, minWidth: 220, maxWidth: 600 }}>
            <p style={{ fontSize: '1.1rem', marginBottom: 8 }}>
              Hello! I'm a passionate Computer Science and Data Science student at Keshav Memorial Institute of Technology.<br />
              I love combining creative design with technical implementation, bringing ideas to life with smooth animations and interactive elements.<br />
              I'm dedicated to learning and mastering new technologies, with a focus on both frontend and backend development.
            </p>
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TabNav>
            <TabButton active={aboutTab === 'education'} onClick={() => setAboutTab('education')}>Education</TabButton>
            <TabButton active={aboutTab === 'skills'} onClick={() => setAboutTab('skills')}>Skills</TabButton>
            <TabButton active={aboutTab === 'resume'} onClick={() => setAboutTab('resume')}>Resume</TabButton>
          </TabNav>
          <div style={{ width: '100%', maxWidth: 700, marginTop: 16 }}>
            {aboutTab === 'education' && (
              <div>
                <h3>B.Tech in CSE with Data Science</h3>
                <p>Keshav Memorial Institute of Technology (Current)</p>
                <h4>SPR Junior College</h4>
                <p>Telangana State 4th Rank</p>
                <h4>St. Martins High School (ICSE)</h4>
                <p>90% in 10th grade (2021)</p>
              </div>
            )}
            {aboutTab === 'skills' && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style={{ width: 40 }} />
                  <span style={{ marginTop: 6, fontSize: 14 }}>HTML5</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style={{ width: 40 }} />
                  <span style={{ marginTop: 6, fontSize: 14 }}>CSS3</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{ width: 40 }} />
                  <span style={{ marginTop: 6, fontSize: 14 }}>JavaScript</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" style={{ width: 40 }} />
                  <span style={{ marginTop: 6, fontSize: 14 }}>Node.js</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" style={{ width: 40, background: '#fff', borderRadius: 8, padding: 2 }} />
                  <span style={{ marginTop: 6, fontSize: 14 }}>Express.js</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" style={{ width: 40 }} />
                  <span style={{ marginTop: 6, fontSize: 14 }}>PHP</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" style={{ width: 40 }} />
                  <span style={{ marginTop: 6, fontSize: 14 }}>React Native</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" style={{ width: 40 }} />
                  <span style={{ marginTop: 6, fontSize: 14 }}>Flutter</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{ width: 40 }} />
                  <span style={{ marginTop: 6, fontSize: 14 }}>MongoDB</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" style={{ width: 40 }} />
                  <span style={{ marginTop: 6, fontSize: 14 }}>MySQL</span>
                </div>
              </div>
            )}
            {aboutTab === 'resume' && (
              <div>
                <a href={resumePDF} download style={{ background: themeMode.accent, color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 600 }}>Download Resume</a>
              </div>
            )}
          </div>
        </div>
      </Section>
      {/* Projects Section */}
      <Section id="projects" style={{ position: 'relative', overflow: 'hidden', padding: '30px 0 10px 0' }}>
        <Section3DBackground />
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 8, position: 'relative', zIndex: 1 }}>
          My <span style={{ color: themeMode.accent }}>Projects</span>
        </h2>
        <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1, margin: 0 }}>
          {/* Coffee Shop Website project */}
          <a href="/PROJECT EXPO/index.html" target="_blank" rel="noopener noreferrer" style={{ width: 140, minHeight: 160, background: themeMode.glass, borderRadius: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', fontWeight: 600, color: themeMode.text, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 6 }}>
            <img src={coffeeImg} alt="Coffee Shop" style={{ width: '100%', height: 55, objectFit: 'cover', borderRadius: 6, marginBottom: 4 }} />
            <span style={{ fontSize: 13, marginBottom: 4, textAlign: 'center' }}>Coffee Shop Website</span>
            <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap', marginBottom: 2 }}>
              <span style={{ background: themeMode.accent, color: '#fff', borderRadius: 5, padding: '1px 6px', fontSize: 9 }}>HTML</span>
              <span style={{ background: themeMode.accent, color: '#fff', borderRadius: 5, padding: '1px 6px', fontSize: 9 }}>CSS</span>
              <span style={{ background: themeMode.accent, color: '#fff', borderRadius: 5, padding: '1px 6px', fontSize: 9 }}>JS</span>
            </div>
          </a>
        </div>
      </Section>
      {/* Contact Section */}
      <Section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
        <Section3DBackground />
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, position: 'relative', zIndex: 1 }}>
          Get In <span style={{ color: themeMode.accent }}>Touch</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
          <p style={{ textAlign: 'center', margin: 0, fontSize: '1.1rem' }}>
            Interested in working together or have a question? Feel free to reach out through any of these channels.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <a href="mailto:samanfarzana4@gmail.com" style={{ color: themeMode.accent, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', fontWeight: 500 }}>
              <FaEnvelope style={{ fontSize: '1.5rem' }} /> samanfarzana4@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/safa-mariyam-5303b832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{ color: themeMode.accent, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', fontWeight: 500 }}>
              <FaLinkedin style={{ fontSize: '1.5rem' }} /> LinkedIn
            </a>
          </div>
        </div>
      </Section>
    </ThemeProvider>
  );
}

export default App;
