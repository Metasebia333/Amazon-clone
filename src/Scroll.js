import React, { useState, useEffect } from 'react';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="back-to-top">
            {showButton && (
                <button onClick={handleClick}>Back to Top</button>
            )}
        </div>
    );
};

export default BackToTop;