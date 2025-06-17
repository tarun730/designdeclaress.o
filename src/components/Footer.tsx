
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo">
            <span className="logo-text">Design <br/> Declares</span>
          </div>

          <div className="footer-nav">
            <nav aria-label="Menu">
              <a href="/contact" target="_self">Contact</a>
              <a href="https://www.instagram.com/design_declares/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/groups/12699995/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="/privacy-policy" target="_self">Privacy Policy</a>
            </nav>
          </div>

          <div className="footer-newsletter">
            <p className="newsletter-heading">Sign up to the D! Newsletter</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="email">Email:*</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                />
              </div>

              <div className="form-options">
                <div className="consent-group">
                  
                    {/* <input type="checkbox" name="newsletterConsent" required /> */}
                    <label  className="radio-option custom-radio">
            <input
              type="radio"
              name="entity"
             
              required
            />
            <span className="radio-mark"></span>
                    I would like to be added to the Design Declares! newsletter and receive further updates.
                  </label>
                  <a href="/privacy-policy">View our Privacy Policy</a>
                </div>
                <button type="submit" className="subscribe-button">Subscribe</button>
              </div>
            </form>
          </div>

          <div className="footer-info">
            <p>
              This website has been built following low-carbon principles of web development and hosted using serverless computing, by only allocating energy when needed and on demand.
              <a href="https://digitalbeacon.co/report/designdeclares-com" target="_blank" rel="noopener noreferrer"> Learn more about our carbon footprint</a>.
            </p>
            <p>
              Empowered by <a href="https://driftime.media" target="_blank" rel="noopener noreferrer">Driftime®</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
