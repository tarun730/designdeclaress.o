import Sections from "./Sections";
import Sidebarsection from "./Sidebarsection";

const DonateSection = () => {
  return (

    <Sections>
      <Sidebarsection title="Donate to D!" />

      <div className="donate-content">
        <p className="paragraph">
          Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community
          working towards change in the creative industry. Your support can go a long way, and helps us continue the valuable work needed in
          tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more
          equitable and just planet.
        </p>

        <div className="donate-buttons">
          <a
            href="https://wise.com/pay/r/uZ5h3pxRMmTE_pk"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
            Donate £10
          </a>
          <a
            href="https://wise.com/pay/r/u2IiQNt2ebixruk"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
            Donate £20
          </a>
          <a
            href="https://wise.com/pay/r/2vqUbqPfU9hvVLE"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
            Donate £50
          </a>
        </div>
      </div>

    </Sections>

  );
};

export default DonateSection;
