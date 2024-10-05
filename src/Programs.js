import React, { useState } from 'react';

export default function Programs({ programTitle, programDesc, programBody, image }) {
    // State to manage the visibility of the overlay card
    const [showOverlay, setShowOverlay] = useState(false);

    // Toggle overlay visibility
    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };

    return (
        <div className="col-md-4" style={{ position: 'relative' }}>
            {/* Main card (always visible) */}
            <div
                className="program-card"
                style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    height: '350px', // Fixed height
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div className="icon" style={{ fontSize: '50px', color: '#27ae60' }}>
                    <i className={image}></i>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginTop: '20px' }}>{programTitle}</h3>
                <p
                    style={{
                        fontSize: '0.9rem',
                        marginTop: '10px',
                        color: '#7f8c8d',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {programDesc}
                </p>
                <a
                    href="#!"
                    className="btn"
                    onClick={toggleOverlay}
                    style={{
                        background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        transition: 'transform 0.3s ease, background-color 0.3s ease',
                        marginTop: 'auto',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                >
                    Learn More
                </a>
            </div>

            {/* Overlay card (shown when 'Learn More' is clicked) */}
            {showOverlay && (
                <div
                    className="overlay-card"
                    style={{
                        position: 'absolute',
                        top: '-20px', // Position it above the main card
                        left: '0',
                        right: '0',
                        backgroundColor: 'white',
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        zIndex: '10',
                        textAlign: 'left',
                        overflowY: 'auto',
                        maxHeight: '400px',
                        transition: 'opacity 0.3s ease',
                    }}
                >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{programTitle}</h3>
                    <p
                        style={{ fontSize: '1rem', color: '#2c3e50' }}
                        dangerouslySetInnerHTML={{ __html: programBody }}
                    />


                    <i
                        className="fas fa-times"
                        onClick={toggleOverlay}
                        style={{
                            color: '#e74c3c',
                            fontSize: '24px',
                            cursor: 'pointer',
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
                        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    ></i>
                </div>
            )}
        </div>
    );
}
