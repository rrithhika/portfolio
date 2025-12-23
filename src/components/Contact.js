import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // EmailJS credentials
    const SERVICE_ID = 'service_q6r2rs3';
    const TEMPLATE_ID = 'template_t63ytpd';
    const PUBLIC_KEY = '5FKVefG6u3DKhRcLJ';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitMessage('Message sent successfully! I will get back to you soon.');
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          setSubmitMessage('Failed to send message. Please try again or contact me directly.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-main-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-content">
          <div className="emoji-icon">👋</div>
          <h2>Let's Create Something Amazing Together</h2>
          <div className="decorative-line">
            <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10 25 Q 50 10, 100 25 T 190 25" stroke="#a855f7" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        
        <div className="contact-form-wrapper">
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Enter your name|" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Enter message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
