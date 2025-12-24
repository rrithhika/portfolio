import './ThankYou.css';

function ThankYou() {
  return (
    <section id="thankyou" className="thankyou">
      <div className="thankyou-container">
        <div className="thankyou-content">
          <div className="emoji-heart">💜</div>
          <h2 className="thankyou-title">Thank You!</h2>
          <p className="thankyou-message">
            Thank you for taking the time to explore my portfolio. 
            Your interest means a lot to me!
          </p>
         <p className="thankyou-submessage">
  I love connecting with fellow artists, art lovers, and anyone who appreciates thoughtful, handmade creativity.
</p>
          <div className="decorative-stars">
            <span className="star">✨</span>
            <span className="star">⭐</span>
            <span className="star">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;
