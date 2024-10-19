import React, { useState } from 'react';
import {FaCity, FaRecycle, FaHandsHelping, FaLeaf, FaTrashAlt, FaSeedling, FaInfoCircle} from 'react-icons/fa';

export default function GreenRoing() {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    const sections = [
        {
            title: 'Why Green Roing Was Started',
            description: 'Addressing the growing waste concerns in Roing due to increasing population and development.',
            icon: <FaCity />,
            details:
                'Roing saw a significant increase in population after the commencement of India’s longest bridge, generating large amounts of waste. Green Roing was started to manage this issue sustainably.',
        },
        {
            title: 'What We Do',
            description: 'Implementing sustainable waste management through segregation, transportation, and treatment.',
            icon: <FaRecycle />,
            details:
                'Green Roing collects, segregates, and recycles waste in Roing. We work to reduce landfill waste and promote eco-friendly practices in the community.',
        },
        {
            title: 'How We Work',
            description: 'Collaborating with local authorities and NGOs to promote the 4Rs: Reduce, Reuse, Recycle, and Refuse.',
            icon: <FaHandsHelping />,
            details:
                'Green Roing educates citizens through door-to-door campaigns and collaborates with local organizations for better waste management practices.',
        },
        {
            title: 'Sustainability Model',
            description: 'Self-sustained through nominal fees for garbage collection and selling recyclable materials.',
            icon: <FaLeaf />,
            details:
                'Green Roing operates on a service-based model, collecting fees and selling recyclables to sustain itself. This model helps cover salaries, vehicle maintenance, and other expenses.',
        },
        {
            title: 'Daily Waste Collected',
            description: 'Collecting around 7.5 tons of waste daily from markets and villages.',
            icon: <FaTrashAlt />,
            details:
                'Green Roing collects approximately 3 tons of waste daily from markets and 4.5 tons from surrounding villages.',
        },
        {
            title: 'Future Plans',
            description: 'Plans to adopt Zero Waste villages, create eco-friendly parks, and develop composting units.',
            icon: <FaSeedling />,
            details:
                'Green Roing plans to expand into more areas, promoting zero-waste villages and creating eco-friendly public spaces, among other green initiatives.',
        },
    ];

    return (
        <div className="green-roing-summary">
            <div className="col-12 mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                    src={`${process.env.PUBLIC_URL}/Green Roing- Logo.png`}
                    alt="AI Green Foundation"
                    height="100px"
                    width="100px"
                    style={{ marginRight: '20px' }}
                />
                <h2 style={{ fontSize: '2.5rem', color: '#000000', marginBottom: '10px' }}>Green Roing</h2>
            </div>


            {sections.map((section, index) => (
                <div
                    className="summary-section"
                    key={index}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} // Added flex for better alignment
                >
                    <div className="icon" style={{ fontSize: '24px', color: '#2ecc71', marginRight: '10px' }}>
                        {section.icon}
                    </div>
                    <div>
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                    </div>
                    <div style={{ marginLeft: 'auto', fontSize: '18px', color: '#3498db' }}>
                        <FaInfoCircle onClick={() => openModal(section.details)} title="Click to learn more" />
                    </div>
                </div>
            ))}

            {/* Modal for detailed content */}
            {modalContent && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <p>{modalContent}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

