import { useState, useEffect } from 'react';
import './scrollup.css';
import './scrollup__media.css';

export const ScrollUp = () => {

  const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <div className="scrollUp">
            {" "}
            {showTopBtn && (
                <div className="scroll__position scroll__style"
                    onClick={goToTop}>   
                    <img className='scrollup__img' src="\imgs\7681978.png" alt=''/>
                </div>
            )}{" "}
        </div>
    );
}