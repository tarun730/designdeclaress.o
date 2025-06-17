import Sections from "./Sections"
import Sidebarsection from "./Sidebarsection"

const Breakdown = () => {

  return (

    <Sections>
      <Sidebarsection title="This is Breakdown" />

      <div className="content">
        <h2 className="title">
          The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
        </h2>
        <div className="accordion">
          <div className="accordion-item">
            <button className="accordion-button">
              <h3 className="accordion-title">The Role of Design</h3>
              <span className="accordion-icon"><span aria-hidden="true">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                >
                  <path
                    strokeLinecap="square"
                    d="M19.5 8.25L12 15.75 4.5 8.25"
                  />
                </svg>
              </span>
              </span>
            </button>
          </div>
          <div className="accordion-item">
            <button className="accordion-button">
              <h3 className="accordion-title">Time for Change</h3>
              <span className="accordion-icon"><span aria-hidden="true">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                >
                  <path
                    strokeLinecap="square"
                    d="M19.5 8.25L12 15.75 4.5 8.25"
                  />
                </svg>
              </span>
              </span>
            </button>
          </div>
          <div className="accordion-item">
            <button className="accordion-button">
              <h3 className="accordion-title">Act with Urgency</h3>
              <span className="accordion-icon"><span aria-hidden="true">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                >
                  <path
                    strokeLinecap="square"
                    d="M19.5 8.25L12 15.75 4.5 8.25"
                  />
                </svg>
              </span>
              </span>
            </button>
          </div>
        </div>
        <div className="cta">
          <a href="https://youtu.be/XpnOe94eXdM" target="_blank" rel="noopener noreferrer" className="cta-button">
            View our D! Intro Video
          </a>
        </div>
      </div>
   </Sections>
 
  )
}

export default Breakdown


