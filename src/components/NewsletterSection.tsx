import Sections from "./Sections";
import Sidebarsection from "./Sidebarsection";
import '../Styles/NewsletterSection.css'

const NewsletterSection = () => {
  return (
    <Sections>
    <Sidebarsection title="The Design Declares Newsletter and Toolkit" />
    <div className="donate-content">

    
        <figure className="image-container">
          <div className="image-wrapper">
            <img
              alt=""
              loading="lazy"
              src="https://cdn.sanity.io/images/zqatagq1/production/88fd99f7f3ecf6762e7dbe50ca090a59277eff87-3840x2160.png?max-w=1440"
              className="newsletter-image"
            />
          </div>
        </figure>
        <p className="newsletter-text">
          Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.
        </p>
        <p className="newsletter-text two">
          Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.
        </p>

        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">Email:*</label>
            <input type="email" id="email" name="email" required autoComplete="email" />
          </div>

          <div className="checkbox-group" role="group" aria-label="Consent options">
            <label className="checkbox-label">
              <input style={{display:"none"}} type="checkbox" required name="newsletterConsent" />
              <span className="checkbox-box">
                <svg viewBox="0 0 24 24">
                <path strokeLinecap="square" d="M6 6L18 18" />
  <path strokeLinecap="square" d="M6 18L18 6" />
                </svg>
              </span>
              <span className="checkbox-text">
                I would like to be added to the Design Declares! newsletter and receive further updates.
              </span>
            </label>
          </div>

          <a className="privacy-link" href="/privacy-policy" target="_self">View our Privacy Policy</a>

          <div className="submit-group">
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
 
   
</Sections>
  )
}

export default NewsletterSection