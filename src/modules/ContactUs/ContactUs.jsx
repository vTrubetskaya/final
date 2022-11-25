export const ContactUs = () => {

    return (        
        <div className="container">
            <div className="contacts__bcg">
                <h1 className="contacts__title">Contact us</h1>
                <div>                    
                    <div>
                        <h2 className="contacts__box__title">Customer Service</h2>
                        <p className="contacts__content">Winter Wonderland is dedicated to providing exceptional customer service. If there is anything we can assist you with, please do not hesitate to reach out to us via the following means.<br/>
                        We're available Monday to Friday, 09:00 – 18:00</p>
                    </div>
                    <div>
                        <h2 className="contacts__box__title">We'll be in touch soon</h2>
                        <p className="contacts__content">We aim to respond within 24 hours, but during busy periods like holidays, sales and special campaigns, we may take a little longer getting back to you. Want to get in touch? Scroll down for more details.</p>
                    </div>
                </div>
                <h1 className="contacts__title">General contacts</h1>
                <div>                    
                    <div>
                        <h2 className="contacts__box__title">Phone number:</h2>
                        <p className="contacts__content"><a className="underline link_black" href="tel:+44 (0)20 3962 2362">+44 (0)20 3962 2362</a></p>
                    </div>
                    <div>
                        <h2 className="contacts__box__title">Email</h2>
                        <p className="contacts__content"><a className="underline link_black" href="https://mail.google.com/">ask@winterwonderland.com</a></p>
                    </div>
                </div>
            </div>
        </div>      
    )
}