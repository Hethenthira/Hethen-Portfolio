import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu(event) {
    if (event.target.closest('a')) {
      setIsMenuOpen(false);
    }
  }

  return (
    <>
<header className="site-header">
    <div className="container nav-wrap">
      <a className="brand" href="#home" aria-label="Hethen Gokul home">HG<span>.</span></a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </button>
      <nav aria-label="Main navigation">
        <ul className={`nav-links${isMenuOpen ? ' open' : ''}`} id="primary-navigation" onClick={closeMenu}>
          <li><a href="#about">About</a></li><li><a href="#skills">Skills</a></li><li><a href="#projects">Projects</a></li><li><a href="#certificates">Credentials</a></li><li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section className="hero" id="home">
      <div className="container hero-inner">
        <p className="eyebrow">Computer Science &amp; Engineering Graduate</p>
        <h1>Hi, I’m Hethen.<br /><span>I build with curiosity.</span></h1>
        <p className="hero-lede">Entry-level software developer with hands-on project experience in web development, Java, and database systems. Interested in building practical, user-friendly software solutions for businesses and clients while continuously improving technical skills and collaborating effectively with teams.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <i className="fa-solid fa-arrow-right"></i></a><a className="button button-secondary" href="#contact">Get in touch</a></div>
        <div className="quick-facts"><span><i className="fa-solid fa-location-dot"></i> Tiruppur, Tamil Nadu</span><span><i className="fa-solid fa-graduation-cap"></i> B.E. in Computer Science and Engineering</span><span><i className="fa-solid fa-star"></i> CGPA 7.77</span></div>
      </div>
    </section>

    <section id="about">
      <div className="container">
        <div className="section-heading"><p className="section-kicker">A little about me</p><h2>Learning by building</h2></div>
        <div className="about-copy"><p>I’m a Computer Science and Engineering graduate from Shree Venkateshwara Hi-Tech Engineering College, where I completed a B.E. in Computer Science and Engineering with a CGPA of 7.77. My interests include full-stack development, UI/UX design, and database management.</p><p>My project work includes an e-waste recycling platform and an alumni networking platform. I also completed a Java full-stack development internship, where I practiced object-oriented programming, exception handling, and file operations.</p></div>
      </div>
    </section>

    <section id="skills">
      <div className="container">
        <div className="section-heading"><p className="section-kicker">Tools &amp; technologies</p><h2>Technical skills</h2><p>Technologies and tools used across my coursework, internship, and project work.</p></div>
        <div className="skill-grid">
          <article className="panel skill-panel"><div className="skill-icon"><i className="fa-solid fa-code"></i></div><h3>Programming &amp; web</h3><div className="tag-list"><span className="tag">Java</span><span className="tag">Python</span><span className="tag">C</span><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">JavaScript</span><span className="tag">React.js</span><span className="tag">React Native (Expo)</span></div></article>
          <article className="panel skill-panel"><div className="skill-icon"><i className="fa-solid fa-layer-group"></i></div><h3>Full-stack &amp; databases</h3><div className="tag-list"><span className="tag">Node.js</span><span className="tag">Express.js</span><span className="tag">REST APIs</span><span className="tag">MongoDB</span><span className="tag">MySQL</span><span className="tag">MERN stack (basics)</span><span className="tag">DBMS (basics)</span></div></article>
          <article className="panel skill-panel"><div className="skill-icon"><i className="fa-solid fa-pen-ruler"></i></div><h3>Design &amp; developer tools</h3><div className="tag-list"><span className="tag">UI/UX design</span><span className="tag">Figma</span><span className="tag">Git</span><span className="tag">GitHub</span><span className="tag">VS Code</span><span className="tag">Eclipse</span><span className="tag">IntelliJ IDEA</span><span className="tag">Object-oriented programming</span></div></article>
          <article className="panel skill-panel"><div className="skill-icon"><i className="fa-solid fa-brain"></i></div><h3>AI &amp; LLM engineering</h3><div className="tag-list"><span className="tag">RAG</span><span className="tag">Prompt engineering</span><span className="tag">LLMs</span><span className="tag">Agentic AI</span><span className="tag">LangChain</span><span className="tag">LangGraph</span></div></article>
        </div>
      </div>
    </section>

    <section id="projects">
      <div className="container">
        <div className="section-heading"><p className="section-kicker">Selected work</p><h2>Projects</h2><p>Software projects focused on community connections, sustainability, and application development.</p></div>
        <div className="project-grid">
          <article className="project-card"><div className="project-icon" aria-hidden="true"><i className="fa-solid fa-recycle"></i></div><div className="project-content"><h3>E-Waste Recycling App</h3><p>Built a platform connecting buyers and sellers to support e-waste recycling. Developed the mobile frontend with Expo and React Native, built backend services with Node.js, and managed data with MongoDB.</p><div className="project-tags"><span>React Native</span><span>Expo</span><span>Node.js</span><span>MongoDB</span></div></div></article>
          <article className="project-card"><div className="project-icon" aria-hidden="true"><i className="fa-solid fa-people-arrows-left-right"></i></div><div className="project-content"><h3>Reconnectify — Alumni Association Platform</h3><p>Developed a web platform for alumni, students, and institutions to connect and collaborate, with a responsive React frontend and RESTful backend services.</p><a className="project-link" href="https://reconnectify-vw3d.vercel.app/" target="_blank" rel="noopener noreferrer">View live project <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a><div className="project-tags"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>REST APIs</span></div></div></article>
          <article className="project-card">
            <div className="project-icon" aria-hidden="true"><i className="fa-solid fa-robot"></i></div>
            <div className="project-content">
              <h3>Robotic AI &ndash; AI-Powered Chatbot</h3>
              <p>Built an interactive chatbot using LangChain and Ollama with the Llama 3.1 8B model. It uses conversation memory for context-aware responses and includes a calculator tool for mathematical operations. The project demonstrates local LLM integration and AI tool usage in a Streamlit application.</p>
              <ul className="project-points">
                <li>Provides an interactive conversational interface with context-aware responses.</li>
                <li>Uses a calculator tool for mathematical operations.</li>
                <li>Runs the Llama 3.1 8B model locally through Ollama.</li>
              </ul>
              <div className="project-tags"><span>Python</span><span>Streamlit</span><span>LangChain</span><span>Ollama</span><span>Llama 3.1 8B</span><span>Git</span><span>GitHub</span></div>
            </div>
          </article>
          <article className="project-card">
            <div className="project-icon" aria-hidden="true"><i className="fa-solid fa-database"></i></div>
            <div className="project-content">
              <h3>SQL RAG &ndash; AI-Powered Database Question Answering</h3>
              <p>Built a question-answering system that retrieves customer information from SQLite using natural-language questions. Llama 3.2, running locally through Ollama, generates read-only SQL queries, while ChromaDB and nomic-embed-text provide semantic search. SQL and vector results are combined with Reciprocal Rank Fusion, reranked with a Cross-Encoder, and passed to the language model for concise, context-based answers.</p>
              <ul className="project-points">
                <li>Combines structured SQL queries with semantic vector search.</li>
                <li>Uses Reciprocal Rank Fusion and Cross-Encoder reranking to improve retrieval.</li>
                <li>Restricts generated SQL queries to read-only operations.</li>
              </ul>
              <div className="project-tags"><span>Python</span><span>LangChain</span><span>SQLite</span><span>SQLAlchemy</span><span>Ollama</span><span>Llama 3.2</span><span>ChromaDB</span><span>Sentence Transformers</span></div>
            </div>
          </article>
          <article className="project-card"><div className="project-icon" aria-hidden="true"><i className="fa-solid fa-comments"></i></div><div className="project-content"><h3>Feedback Management System</h3><p className="project-role">Java Web Application</p><p>A web-based system for collecting user feedback and helping administrators manage feedback records.</p><ul className="project-points"><li>Implemented registration, login authentication, and session management using Java Servlets and JSP.</li><li>Designed responsive interfaces with HTML, CSS, and JSP.</li><li>Integrated MySQL with JDBC for data storage and retrieval, with admin tools to review and manage feedback.</li></ul><div className="project-tags"><span>Java</span><span>JSP</span><span>Servlets</span><span>MySQL</span><span>JDBC</span><span>HTML</span><span>CSS</span><span>Apache Tomcat</span></div></div></article>
          <article className="project-card"><div className="project-icon" aria-hidden="true"><i className="fa-solid fa-cart-shopping"></i></div><div className="project-content"><h3>E-Commerce Application — Java Swing</h3><p className="project-role">Java Developer · Desktop Application</p><p>A desktop shopping application with five categories, 20 subcategories, and 200 products.</p><ul className="project-points"><li>Developed product browsing and detailed product information modules.</li><li>Implemented login, registration, cart, and checkout functionality.</li><li>Applied OOP, collections, encapsulation, and event handling.</li></ul><div className="project-tags"><span>Java</span><span>Java Swing</span><span>OOP</span><span>Collections</span><span>Event handling</span></div></div></article>
        </div>
      </div>
    </section>

    <section id="certificates">
      <div className="container">
        <div className="section-heading"><p className="section-kicker">Learning &amp; participation</p><h2>Credentials</h2></div>
        <div className="credential-grid">
          <article className="panel credential-card"><i className="fa-solid fa-award"></i><div><h3>Java</h3><p>NPTEL certification · Score: 64%</p></div></article>
          <article className="panel credential-card"><i className="fa-solid fa-award"></i><div><h3>HTML, CSS &amp; JavaScript</h3><p>SoloLearn certificates</p></div></article>
          <article className="panel credential-card"><i className="fa-solid fa-award"></i><div><h3>UI/UX Design</h3><p>Novitech certification</p></div></article>
          <article className="panel credential-card"><i className="fa-solid fa-people-group"></i><div><h3>National Level Hackathon</h3><p>Participant, Shree Devi Institution of Technology</p></div></article>
          <article className="panel credential-card"><i className="fa-solid fa-file-lines"></i><div><h3>Reconnectify Publication</h3><p>Alumni Association Platform · IJDST Journal (2026)</p></div></article>
        </div>
      </div>
    </section>

    <section id="contact">
      <div className="container"><div className="contact-box"><div><p className="section-kicker">Have a project or opportunity?</p><h2>Let’s connect.</h2><p>I’m open to connecting with people working on software, web, and database projects.</p><div className="contact-details"><a href="mailto:hethengokul@gmail.com"><i className="fa-regular fa-envelope"></i> hethengokul@gmail.com</a><a href="tel:+918190083451"><i className="fa-solid fa-phone"></i> +91 8190083451</a><a href="https://www.linkedin.com/in/hethenthira-a-52136731b" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i> LinkedIn profile</a></div></div><div className="social-links" aria-label="Social profiles"><a href="https://github.com/Hethenthira" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a><a href="https://www.instagram.com/hethen._.gokul" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a><a href="https://wa.me/918190083451" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a></div></div></div>
    </section>
  </main>
  <footer><div className="container footer-inner"><span>© <span>{new Date().getFullYear()}</span> Hethen Gokul</span><span>Designed and built with care.</span></div></footer>
    </>
  );
}

export default App;
