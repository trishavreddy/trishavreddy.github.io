import './App.css'
import myPhoto from './assets/photo.jpg';
import React, { useRef, useEffect } from 'react';

const projects = [
  {
    title: 'Dev-Health Tracker',
    date: 'Dec 2024',
    desc: 'A web app integrating GitHub API and Fitbit API to track coding hours and fitness data, featuring interactive dashboards built with React, TypeScript, and Chart.js.',
    tech: 'React · TypeScript · Node.js · Express · Chart.js'
  },
  {
    title: 'AI Attendance Helper',
    date: 'Jun 2024',
    desc: 'Facial recognition attendance system using face embeddings with KNN classification, featuring MongoDB Atlas integration and RESTful API implementation.',
    tech: 'Python · OpenCV · MongoDB · REST API · Machine Learning'
  },
  {
    title: 'Evolutionary Autonomous Critters',
    date: 'Oct 2023',
    desc: 'C++ simulation game with autonomous critter species using vector dynamics, featuring RayLib graphics for real-time animations and evolutionary algorithms.',
    tech: 'C++ · RayLib · Vector Dynamics · AI · Simulation'
  },
  {
    title: '3D Fruit Ninja',
    date: 'Feb 2023',
    desc: 
      "VR game using Unity's XR Interaction Toolkit with physics-based interactions, real-time mesh deformation, and particle effects for fruit slicing mechanics.",
    tech: 'Unity · C# · VR · Physics · Game Dev'
  },
];

const skills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'Python', 'C++', 'C', 'SQL']
  },
  {
    category: 'Frontend',
    items: ['React', 'Angular', 'HTML', 'CSS', 'JavaScript']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'SQL']
  },
  {
    category: 'Machine Learning',
    items: ['Scikit-learn', 'TensorFlow', 'OpenCV']
  },
  {
    category: 'Data Science',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
  },
  {
    category: 'Tools',
    items: ['Git / GitHub', 'Docker']
  },
  {
    category: 'Mobile & Game Dev',
    items: ['Unity', 'Android Studio', 'XR/VR Development']
  },
  {
    category: 'Blockchain/Web3',
    items: ['Ethereum', 'MetaMask Crypto Wallet']
  }
];

function useScrollFadeIn(count) {
  const refs = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      refs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          ref.style.opacity = 1;
          ref.style.transform = 'translateY(0)';
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [count]);
  return refs;
}

function App() {
  const projectRefs = useScrollFadeIn(projects.length);
  return (
    <div className="App">
      <nav style={{ display: 'flex', gap: '2rem', padding: '1.5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <span style={{ fontWeight: 700, fontSize: '1.3rem', color: 'var(--accent)' }}>Trisha Reddy</span>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
      </nav>
      <main style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
        <section id="home" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <img
            src={myPhoto}
            alt="Trisha Reddy"
            style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '1rem'
            }}
          />
          <h1>Hi, I'm Trisha Reddy</h1>
          <p style={{ color: '#cfcfff' }}>CIS @ UPenn | Class of 2028</p>
        </section>
        <section id="about" style={{ marginBottom: '3rem' }}>
          <h2>About</h2>
          <p>
            Hey there! I'm a Computer Science student at the University of Pennsylvania, also pursuing a minor in Mathematics. I'm passionate about using technology to solve real-world problems and create meaningful impact.
          </p>
          <p>
            After taking Introduction to Artificial Intelligence with Professor Chris Callison-Burch, I discovered my love for AI and its applications. Now, I'm excited to be conducting research under his supervision, exploring cutting-edge AI technologies.
          </p>
          <p>
            On campus, I'm involved with AI@Penn, WiCS (Women in Computer Science), and the Undergraduate Statistics Society. This fall, I'll also be joining the CIS 1210 course staff!
          </p>
          <p>
            Outside of academics, I love staying active—you can find me playing basketball with friends or going for runs along the Schuylkill River Trail. I also enjoy being outdoors and am looking forward to exploring Philly's diverse food scene this summer.
          </p>
          <p>
            I'm always eager to learn and collaborate on interesting projects. Whether it's AI, web development, or anything tech-related, I'm up for the challenge! I'm currently seeking internship opportunities and am always open to collaborating and networking.
          </p>
        </section>
        <section id="skills" style={{ marginBottom: '3rem' }}>
          <h2>Skills</h2>
          <div style={{
            width: '100%',
            margin: '2rem auto 0 auto',
            paddingLeft: 32,
            paddingRight: 32,
            boxSizing: 'border-box',
            display: 'block',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
              maxWidth: 1400,
              width: '100%',
              margin: '0 auto',
              justifyContent: 'center',
            }}>
              {skills.map((box) => (
                <div
                  key={box.category}
                  style={{
                    background: 'var(--card-bg)',
                    borderRadius: 12,
                    padding: '1.5rem 1.2rem',
                    boxShadow: '0 2px 8px #0002',
                    border: '1px solid var(--border)',
                    height: 170,
                    minWidth: 260,
                    maxWidth: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'flex-start',
                    margin: '0 auto',
                  }}
                >
                  <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: 18, fontSize: 18, marginTop: 0 }}>{box.category}</div>
                  <div style={{ color: '#ccc', fontSize: 15, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {box.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 1200px) {
              #skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 700px) {
              #skills-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
        <section id="experience" style={{ marginBottom: '3rem' }}>
          <h2 style={{ textAlign: 'center' }}>Experience</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '2.5rem',
            maxWidth: 1100,
            margin: '2rem auto 0 auto',
          }}>
            {/* Left Card */}
            <div style={{
              background: 'var(--card-bg)',
              borderRadius: 12,
              padding: '1.5rem 1.2rem',
              boxShadow: '0 2px 8px #0002',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 220,
              minWidth: 320,
              flex: 1,
              maxWidth: 340,
              height: 400,
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 16, marginBottom: 6 }}>
                Research Assistant: Affect Detection Research
              </div>
              <div style={{ color: '#aaa', fontSize: 14, marginBottom: 2 }}>
                Penn Center for Learning Analytics | Feb 2025 – May 2025
              </div>
              <div style={{ color: '#ccc', fontSize: 14, margin: '10px 0 0 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span>Contributing to research on keystroke-based affect detection, aiming to build predictive models from user interaction data.</span>
                <span>Designed keystroke processing scripts using Python to clean, parse, and structure raw keystroke data from MySQL databases.</span>
                <span>Measuring typing speed and keystroke frequency over various time intervals to identify trends in user behavior.</span>
              </div>
            </div>
            {/* Middle Card */}
            <div style={{
              background: 'var(--card-bg)',
              borderRadius: 12,
              padding: '1.5rem 1.2rem',
              boxShadow: '0 2px 8px #0002',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 220,
              minWidth: 320,
              flex: 1,
              maxWidth: 340,
              height: 400,
              alignSelf: 'flex-start',
              marginTop: 0,
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 16, marginBottom: 6 }}>
                Software Engineer Intern: certitude.
              </div>
              <div style={{ color: '#aaa', fontSize: 14, marginBottom: 2 }}>
                Penn VIP-X Accelerator | Jan 2025 – April 2025
              </div>
              <div style={{ color: '#ccc', fontSize: 14, margin: '10px 0 0 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span>Working at an edtech startup in Penn's VIP-X accelerator, focused on helping high school students explore careers and connect with university resources through AI-driven recommendations.</span>
                <span>Developing web scraping scripts to collect university club and program data, structuring it in JSON format for integration into the platform's AI models.</span>
                <span>Assisting in platform development by improving search functionality and optimizing data pipelines for real-time recommendations.</span>
                <span>Collaborating with the tech team to implement vectorized embeddings for improved search and recommendation accuracy.</span>
              </div>
            </div>
            {/* Right Card */}
            <div style={{
              background: 'var(--card-bg)',
              borderRadius: 12,
              padding: '1.5rem 1.2rem',
              boxShadow: '0 2px 8px #0002',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 220,
              minWidth: 320,
              flex: 1,
              maxWidth: 340,
              height: 400,
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 16, marginBottom: 6 }}>
                NJ Governor School Researcher: SeBRUS
              </div>
              <div style={{ color: '#aaa', fontSize: 14, marginBottom: 2 }}>
                NJ Governor's School | Oct 2023
              </div>
              <div style={{ color: '#ccc', fontSize: 14, margin: '10px 0 0 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span>Designed a data crowdsourcing platform leveraging Ethereum smart contracts to protect machine learning datasets from data poisoning attacks, mitigating risks such as label-flipping, clean-label, and backdoor attacks.</span>
                <span>Integrated a distributed voting network and poisoned data detection model using Pandas and Matplotlib for robust dataset validation.</span>
                <span>Presented research findings at the NJ Governor's School Symposium at Rutgers University and the IEEE MIT Undergraduate Research Technology Conference 2023.</span>
              </div>
              <a href="https://ieeexplore.ieee.org/document/10535023/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: 14, marginTop: 8 }}>
                Research Paper
              </a>
            </div>
          </div>
        </section>
        <section id="projects" style={{ marginBottom: '3rem' }}>
          <h2>Projects</h2>
          <div style={{ position: 'relative', margin: '2rem 0', paddingLeft: 40, paddingRight: 40 }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 4, background: 'var(--accent)', transform: 'translateX(-50%)', borderRadius: 2, zIndex: 0 }} />
            {projects.map((proj, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={proj.title}
                  ref={el => projectRefs.current[i] = el}
                  style={{
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                    position: 'relative',
                    marginBottom: 48,
                    zIndex: 1,
                    opacity: 0,
                    transform: 'translateY(40px)',
                    transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)'
                  }}
                >
                  <div style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-end' : 'flex-start',
                    alignItems: 'center',
                  }}>
                    {isLeft && (
                      <div style={{
                        background: 'var(--card-bg)',
                        borderRadius: 12,
                        padding: '1.2rem',
                        boxShadow: '0 2px 8px #0002',
                        border: '1px solid var(--border)',
                        minWidth: 180,
                        maxWidth: 260,
                        textAlign: 'right',
                        position: 'relative',
                        marginRight: 40
                      }}>
                        <div style={{ fontSize: 13, color: '#aaa', marginBottom: 4 }}>{proj.date}</div>
                        <h3 style={{ color: 'var(--accent)', marginBottom: 8 }}>{proj.title}</h3>
                        <p style={{ fontSize: 14, color: '#ccc', marginBottom: 8 }}>{proj.desc}</p>
                        <div style={{ fontSize: 13, color: 'var(--accent)' }}>{proj.tech}</div>
                      </div>
                    )}
                  </div>
                  <div style={{
                    width: 24,
                    height: 24,
                    background: 'var(--accent)',
                    borderRadius: '50%',
                    border: '4px solid #18181b',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2
                  }} />
                  <div style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                    alignItems: 'center',
                  }}>
                    {!isLeft && (
                      <div style={{
                        background: 'var(--card-bg)',
                        borderRadius: 12,
                        padding: '1.2rem',
                        boxShadow: '0 2px 8px #0002',
                        border: '1px solid var(--border)',
                        minWidth: 180,
                        maxWidth: 260,
                        textAlign: 'left',
                        position: 'relative',
                        marginLeft: 40
                      }}>
                        <div style={{ fontSize: 13, color: '#aaa', marginBottom: 4 }}>{proj.date}</div>
                        <h3 style={{ color: 'var(--accent)', marginBottom: 8 }}>{proj.title}</h3>
                        <p style={{ fontSize: 14, color: '#ccc', marginBottom: 8 }}>{proj.desc}</p>
                        <div style={{ fontSize: 13, color: 'var(--accent)' }}>{proj.tech}</div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section id="resume" style={{ marginBottom: '3rem' }}>
          <h2>Resume</h2>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button>Download Resume</button>
          </a>
        </section>
        <footer style={{ marginTop: '4rem', textAlign: 'center', color: '#aaa' }}>
          <a href="https://github.com/trishavreddy" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem', color: 'var(--accent)' }}>GitHub</a>
          <a href="https://linkedin.com/in/trishavreddy/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem', color: 'var(--accent)' }}>LinkedIn</a>
          <a href="mailto:trreddy@seas.upenn.edu" style={{ margin: '0 1rem', color: 'var(--accent)' }}>Email</a>
        </footer>
      </main>
    </div>
  )
}

export default App
