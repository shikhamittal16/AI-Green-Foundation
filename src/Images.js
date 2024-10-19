import {useState} from "react";

export default function Images() {
    const [modalImage, setModalImage] = useState(null);

    const handleScroll = (direction) => {
        const container = document.querySelector(".ngo-images-grid");
        const scrollAmount = 300; // Adjust the scroll amount as needed
        if (direction === "left") {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
    };

    const handleImageClick = (imageSrc) => {
        setModalImage(imageSrc);
    };

    const closeModal = () => {
        setModalImage(null);
    };
    return (
        <section className="ngo-images-section">
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#2c3e50', marginBottom: '40px' }}>Our NGO Initiatives</h2>

                {/* Left Arrow */}
                <button className="scroll-arrow left-arrow" onClick={() => handleScroll("left")}>&#9664;</button>

                <div className="ngo-images-grid">
                    <img src={`${process.env.PUBLIC_URL}/image-1.jpeg`} alt="NGO 1" className="ngo-image" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/image-1.jpeg`)} />
                    <img src={`${process.env.PUBLIC_URL}/image-2.jpeg`} alt="NGO 2" className="ngo-image" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/image-2.jpeg`)} />
                    <img src={`${process.env.PUBLIC_URL}/image-3.jpeg`} alt="NGO 3" className="ngo-image" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/image-3.jpeg`)} />
                    <img src={`${process.env.PUBLIC_URL}/image-4.jpeg`} alt="NGO 4" className="ngo-image" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/image-4.jpeg`)} />
                    <img src={`${process.env.PUBLIC_URL}/image-5.jpeg`} alt="NGO 5" className="ngo-image" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/image-5.jpeg`)} />
                    <img src={`${process.env.PUBLIC_URL}/image-6.jpeg`} alt="NGO 5" className="ngo-image" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/image-6.jpeg`)} />
                </div>

                {/* Right Arrow */}
                <button className="scroll-arrow right-arrow" onClick={() => handleScroll("right")}>&#9654;</button>
            </div>

    {modalImage && (
        <div className="modal" onClick={closeModal}>
            <span className="close">&times;</span>
            <img className="modal-content" src={modalImage} alt="Enlarged NGO" />
        </div>
    )}
        </section>

    )
}