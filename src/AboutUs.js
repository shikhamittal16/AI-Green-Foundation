import React from "react";
import Mission from "./Mission";
import Footer from "./Footer";
import KeyMilestones from "./Keymilestones";
import Projects from "./Projects";

export default function AboutUs() {
  return (
    <div className="about-us-page">
      <div className="hero-section" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/ngos-spearheading-environmental-sustainability-world-ngo-day_893571-29646.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '50px 0' }}>
        <div className="hero-content">
          <h1 className="hero-title">AI Green Foundation</h1>
          <p className="hero-description">Supporting green initiatives and innovation</p>
        </div>
      </div>
        <section className="about-efi-section">
        <div className="container">
          <h2 className="section-title">About AI Green Foundation</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                Founded to tackle pressing environmental and social issues in all over India, the AI Green Foundation (AIGF) is a non-profit organization that focuses on sustainable development, environmental protection, and community welfare. Registered under the Ministry of Corporate Affairs (CIN: U88900AR2023NPL013908) and compliant with Section 12A and 80G of the Income Tax Act, the organization has been growing steadily since its inception, making a substantial impact in the field of waste management, river conservation, pollution control, and more.
                Starting its journey from Roing town in Lower Dibang Valley, AIGF’s foundation was laid with a focus on promoting environmental stewardship through community participation, research, training, and hands-on initiatives.
              </p>
              <p className="about-description">
              </p>
            </div>
          </div>
        </div>
      </section>

      <KeyMilestones />
      <Mission />
      <Projects/>
      <Footer />
    </div>
  );
}
