import { Form, Input } from 'antd';
import { Modal2} from "../../components/Modal2";
import { useState } from "react";

export const ContactUs = () => {

    const layout = {
        wrapperCol: {
          span: 7,
        },
    };
    
    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!'
        }
    };
    
    const onFinish = (values) => {
        console.log(values);
    };

    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true);
        form.resetFields();
    }

    const handleModalClose = () => {
        setVisible(false);
    }

    const [form] = Form.useForm();
    

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
                <div className="contacts__form">
                    <h3 className="contacts__form__content">If you have any questions please fill out this contact form. Thank you!</h3>
                    <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item className='contacts__form__item'
                            name={['user', 'name']}
                            label="Your name"
                            tooltip="What do you want others to call you?"
                        >
                            <Input className='contacts__form__input'/>
                        </Form.Item>
                        <Form.Item className='contacts__form__item'
                            name={['user', 'email']}
                            label="Your email"
                            rules={[
                            {
                                type: 'email',
                                required: true 
                            },
                            ]}
                        >
                            <Input className='contacts__form__input'/>
                        </Form.Item>
                        <Form.Item className='contacts__form__item' name={['user', 'question']} label="Your question" rules={[
                            {
                                required: true 
                            },
                            ]}>
                            <Input.TextArea className='contacts__form__input'/>
                        </Form.Item>
                        <Form.Item
                        >
                            <button className='contacts__form__btn' htmltype="submit" onClick={openModal}> Submit </button>
                            {visible && <Modal2 onClose={handleModalClose} content={<p className="modalContacts__text">Your message was successfully sent! We will reply to you shortly.</p>} button={<span>OK</span>}/>} 
                        </Form.Item>
                        </Form>

                </div>
            </div>
        </div>      
    )
}