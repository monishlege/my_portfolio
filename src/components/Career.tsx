import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BE in Computer Science Engineering</h4>
                <h5>CITNC, Bangalore</h5>
              </div>
              <h3>2025-2029</h3>
            </div>
            <p>
              Pursuing a Bachelor of Engineering in Computer Science, focusing on
              AI, modular systems, and biometric platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Webmaster</h4>
                <h5>IEEE CITNC AESS Society</h5>
              </div>
              <h3>JAN 2026 - PRESENT</h3>
            </div>
            <p>
              Managing web assets and digital presence for the IEEE Aerospace and
              Electronic Systems Society at CITNC.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GenAI & AI Certifications</h4>
                <h5>IBM & Outskill</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed IBM Applied AI Certificate and Outskill GenAI Accelerator,
              mastering prompt engineering and AI-driven workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
