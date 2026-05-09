import { useEffect, useState } from "react";
import "./styles/Career.css";
import { education as localEducation, experience as localExperience, CareerItem } from "../data/careerData";
import { MdArrowOutward } from "react-icons/md";

const Career = () => {
  const [education, setEducation] = useState<CareerItem[]>(localEducation);
  const [experience, setExperience] = useState<CareerItem[]>(localExperience);

  useEffect(() => {
    // You can replace this URL with your own API endpoint or a GitHub Gist URL
    // that returns your LinkedIn data in JSON format.
    const EXTERNAL_DATA_URL = ""; 

    if (EXTERNAL_DATA_URL) {
      fetch(EXTERNAL_DATA_URL)
        .then(res => res.json())
        .then(data => {
          if (data.education) setEducation(data.education);
          if (data.experience) setExperience(data.experience);
        })
        .catch(err => console.error("Failed to fetch LinkedIn data:", err));
    }
  }, []);

  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {/* Education Section */}
          {education.map((item, index) => (
            <div className="career-info-box" key={`edu-${index}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>
                    {item.company}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="career-link">
                        <MdArrowOutward />
                      </a>
                    )}
                  </h5>
                </div>
                <h3>{item.duration}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}

          {/* Experience Section */}
          {experience.map((item, index) => (
            <div className="career-info-box" key={`exp-${index}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>
                    {item.company}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="career-link">
                        <MdArrowOutward />
                      </a>
                    )}
                  </h5>
                </div>
                <h3>{item.duration}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
