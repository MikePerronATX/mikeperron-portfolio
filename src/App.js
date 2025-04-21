import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">Michael Perron</h1>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <img src="/images/profile.jpg" alt="Profile" className="hero-img" />
        <h1>Hi, I'm Michael Perron</h1>
        <p>Full-Stack Developer | Front-End Polish, Back-End Power</p>
      </header>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section className="about" id="about">
          <div className="container">
            <h2>About Me</h2>
            <img
              src="/images/about-me.jpg"
              alt="Michael Perron"
              className="about-img"
            />
            <p>
              I’m a full-stack developer with a passion for creating engaging
              user experiences. With expertise in front-end technologies like
              React, I build polished, responsive interfaces, while leveraging
              back-end skills to develop robust, scalable applications. I’m
              always looking for ways to enhance my skills and tackle new
              challenges across the entire stack.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects" id="projects">
          <div className="container">
            <h2>Projects</h2>
            <div className="project-list">
              <div className="project-card">
                <h3>Weather App</h3>
                <p>
                  A simple app that shows weather based on city input using a
                  public API.
                </p>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
              <div className="project-card">
                <h3>Joke Generator</h3>
                <p>Fetches random jokes from an API. Interactive and fun!</p>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
              <div className="project-card">
                <h3>To-Do List</h3>
                <p>
                  A clean and functional to-do list using React hooks and local
                  storage.
                </p>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="container">
            <h2>Contact Me</h2>
            <form
              action="https://contact-backend-nq28.onrender.com/contact"
              method="POST"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2025 Michael Perron</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
