import { Link } from "react-router-dom";

export const Footer = () => {
    let year = new Date().getFullYear();

    return (
    <footer>      
        <div className="footer__info">
            <div className="footer__contacts">
                <p  className="footer__text">For EXPERT ADVICE</p>
                <p  className="footer__text">Call <a className="link_white underline" href="tel:+44 (0)20 3962 2362">+44 (0)20 3962 2362</a></p>
            </div>
            <div className="footer__aboutus">
                <p  className="footer__text">Stay CONNECTED</p>
                <a href="https://www.instagram.com/"><img className="footer__aboutus__img" src="imgs\1077042.png" alt="" /></a>
                <a href="https://www.pinterest.com/"><img className="footer__aboutus__img" src="imgs\733622.png" alt="" /></a>
                <a href="https://m.facebook.com/"><img className="footer__aboutus__img" src="imgs\220342.png" alt="" /></a>
            </div>
        </div>        
        
        <div className="container__footer">
            <Link className="footer__link link_white" to="/about_us">About us</Link>
            <Link className="footer__link link_white" to="/contact_us">Contact us</Link>            
        </div>
        <p className="container__footer__copyright">Copyright © {year} WinterWonderland</p>
    </footer>
        )
}