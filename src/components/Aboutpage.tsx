import Sections from "./Sections"
import Sidebarsection from "./Sidebarsection"

const Aboutpage = () => {
    return (
        <div>
       
            <AboutDesignDeclares />
            <GlobalPartnership />
            <BehindDesign />
            <SteeringGroup />
        </div>
    )
}

export default Aboutpage


export const Header=()=> {
    return (
      <header className="header">
        <div className="container">
          <a className="logo-link" href="/">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 44 59"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="logo_about"
              role="img"
              aria-label="Design Declares!"
            >
              <path d="M15.052,59l-15.052,0l-0,-57.705l15.052,0c8.096,0 11.705,3.925 11.705,12.722l0,31.809c0,9.112 -3.609,13.174 -11.705,13.174Zm-3.574,-10.75l1.293,-0c1.61,-0 2.284,-0.453 2.284,-3.26l0,-30.29c0,-2.874 -0.895,-3.107 -1.978,-3.107l-1.599,-0l0,36.657Z" />
              <path d="M43.953,6.9l-6.44,36.806l-6.384,-36.813c-0.285,-3.719 2.668,-6.893 6.412,-6.893c3.748,0 6.704,3.181 6.412,6.904l0,-0.004Zm0.047,44.959c0,3.553 -2.911,6.433 -6.501,6.433c-3.59,-0 -6.501,-2.88 -6.501,-6.433c-0,-3.553 2.911,-6.434 6.501,-6.434c3.59,0 6.501,2.881 6.501,6.434Z" />
            </svg>
          </a>
        </div>
      </header>
    );
  }



const AboutDesignDeclares = () => {


    return (
        <Sections>
            <Sidebarsection title="About Design Declares" />
            <div className="section-wrapper content">
                <h2 className="heading">Climate breakdown has begun. And business as usual is not an option.</h2>
                <p className="lead"><strong>That’s why we started Design Declares.</strong></p>
                <p className="lead">
                    Inspired by a global declaration movement sounding the alarm in industries everywhere, we’re an
                    industry-recognised initiative representing the fears, hopes and commitment to action of a
                    growing group of designers, design studios, agencies and institutions.
                </p>

                <div className="button-wrapper">
                    <a className="btn btn-primary" href="/" target="_self">See Global Declarations</a>
                </div>

                <div className="grid-wrapper">
                    <div className="grid-column">
                        <p>
                            Together, we sit at the very beginning of the creative process. The tools we use and the
                            choices we make can influence society’s behaviour, change economies and challenge everything
                            that’s come before.
                        </p>
                    </div>
                    <div className="grid-column">
                        <p>
                            Because design, whether it’s a product, a piece of packaging or an exhibition space, has
                            impact. It’s up to us whether that impact is harmful or healing.
                        </p>
                        <p>We’re glad you’re here. Let’s get to work.</p>
                    </div>
                </div>

                <div className="button-wrapper">
                    <a className="btn btn-primary" href="/" target="_self">Declare Emergency Now</a>
                </div>

                <div className="grid-wrapper">
                    <div className="grid-column">
                        <ul>
                            <li>Design Declares is free.</li>
                            <li>‘Design’ to us means industrial, digital, graphic, communication and service design.</li>
                            <li>
                                Design Declares offers support to all its signatories through shared best practice,
                                resources and insights, all found in the Toolkit.
                            </li>
                            <li>
                                Our signatories use the clarity of the 8 Acts of Emergency as a way to start meaningful
                                conversations and actions in collaboration with colleagues, collaborators and clients.
                            </li>
                        </ul>
                    </div>
                    <div className="grid-column">
                        <ul>
                            <li>
                                We welcome declarations from companies with an office and/or employing at least one
                                full-time designer, and from practising freelance designers who are registered as
                                self-employed in the UK. All signatories will be named and published on this site.
                            </li>
                            <li>
                                As a collective voice, we will liaise with other industry organisations and networks,
                                constructively engaging with government, clients and design media.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </Sections>
    )
}



const GlobalPartnership = () => {
    return (
        <>
            <Sections>
                <Sidebarsection title="About Design Declares" />
                <div className="section-wrapper content">
                    <p className="lead"><strong>We invite our colleagues from across the design industry to join us in declaring an emergency, and starting to take urgent action.*</strong></p>
                    <div className="grid-wrapper">
                        <div className="grid-column">
                            <p>
                                The acts of emergency above are the first (big) steps. As we all commit to this work, we must also commit to doing it in a way that is genuinely inclusive and equitable.
                            </p>
                            <p>It doesn’t matter where on the journey you are. What matters is that you’re here, and you’re ready to do the work. Because there is no design on a dead planet.</p>
                        </div>
                        <div className="grid-column">
                            <p>
                                *We are actively seeking partnerships to expand Design Declares around the world. If that sounds like something you’re interested in, please get in touch.
                            </p>
                            <p>Join our list of global partners..</p>
                            <p>
                                <a className="link" href="/" target="_self">UK</a>,{' '}
                                <a className="link" href="/" target="_self">Ireland</a>,{' '}
                                <a className="link" href="/" target="_self">Brazil</a>,{' '}
                                <a className="link" href="/" target="_self">Australia</a>
                            </p>
                        </div>
                    </div>

                    <div className="button-wrapper">
                        <a className="btn btn-primary" href="/" target="_self">Get in Touch</a>
                    </div>

                </div>


            </Sections>
        </>
    )
}

const BehindDesign = () => {
    return (
        <>
            <Sections>
                <Sidebarsection title="The Designers Behind Design Declares UK" />

                <div className="content ">
                    <div className="textBlock">
                        <p>
                            Inspired by the global emergency declaration movement demanding accountability and action across industries,
                            Design Declares is the initiative of a multidisciplinary group of design professionals and agencies who all believe
                            in the power of design to change things.
                        </p>
                    </div>

                    <div className="logoGrid">
                        <div className="logoItem">
                            <a href="https://www.designforlife.earth" target="_blank" aria-label="Go to Design for Life's website" rel="noopener noreferrer">
                                <figure className="logoFigure">
                                    <div className="logoContainer">
                                        <img
                                            alt="Logo for Design for Life"
                                            src="https://cdn.sanity.io/images/zqatagq1/production/eef6913e335c69e4b094a1eb32b5d1203c4840ae-290x56.svg"
                                        />
                                    </div>
                                </figure>
                            </a>
                        </div>

                        <div className="logoItem">
                            <a href="https://driftime.media" target="_blank" aria-label="Go to Driftime®'s website" rel="noopener noreferrer">
                                <figure className="logoFigure">
                                    <div className="logoContainer">
                                        <img
                                            alt="Logo for Driftime®"
                                            src="https://cdn.sanity.io/images/zqatagq1/production/fe235f0c24f5465498ea9ba83e7eff983961a427-166x32.svg"
                                        />
                                    </div>
                                </figure>
                            </a>
                        </div>

                        <div className="logoItem">
                            <a href="https://www.morrama.com" target="_blank" aria-label="Go to Morroma's website" rel="noopener noreferrer">
                                <figure className="logoFigure">
                                    <div className="logoContainer">
                                        <img
                                            alt="Logo for Morroma"
                                            src="https://cdn.sanity.io/images/zqatagq1/production/a03a37e4a4bcd8745ee6d7930573174bf13d23ac-196x24.svg"
                                        />
                                    </div>
                                </figure>
                            </a>
                        </div>

                        <div className="logoItem">
                            <a href="https://www.studiowood.co.uk" target="_blank" aria-label="Go to Studio Wood's website" rel="noopener noreferrer">
                                <figure className="logoFigure">
                                    <div className="logoContainer">
                                        <img
                                            alt="Logo for Studio Wood"
                                            src="https://cdn.sanity.io/images/zqatagq1/production/73ad4f9a263d71dc223c588ecd5a2fce66561626-271x40.svg"
                                        />
                                    </div>
                                </figure>
                            </a>
                        </div>

                        <div className="logoItem">
                            <a href="https://thomasmatthews.com" target="_blank" aria-label="Go to Thomas.Matthews's website" rel="noopener noreferrer">
                                <figure className="logoFigure">
                                    <div className="logoContainer">
                                        <img
                                            alt="Logo for Thomas.Matthews"
                                            src="https://cdn.sanity.io/images/zqatagq1/production/ada25b334eb920fc0aebf096e6c61b87282868b2-241x64.svg"
                                        />
                                    </div>
                                </figure>
                            </a>
                        </div>

                        <div className="logoItem">
                            <a href="https://urgecollective.com" target="_blank" aria-label="Go to URGE Collective's website" rel="noopener noreferrer">
                                <figure className="logoFigure">
                                    <div className="logoContainer">
                                        <img
                                            alt="Logo for URGE Collective"
                                            src="https://cdn.sanity.io/images/zqatagq1/production/69be8518748504b11342c7937965574bd6d7493e-132x72.svg"
                                        />
                                    </div>
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>




            </Sections>
        </>
    )
}
const SteeringGroup = () => {
    return (
        <>
            <Sections>
                <Sidebarsection title="Steering Group" />


                <div className="content">

                <div className="flex-container">
  <div className="profile-card">
    <figure className="image-figure">
      <div className="image-wrapper">
        <img
          alt="Photograph of Abb-d Taiyo"
          loading="lazy"
          width="600"
          height="800"
          decoding="async"
          className="image"
          src="https://cdn.sanity.io/images/zqatagq1/production/735f5280c655e648d271314df15d7bd130219f48-1024x1536.jpg?rect=303,233,487,649&w=600&h=800&max-w=1440"
        />
      </div>
    </figure>
    <div className="text-content">
      <p>Abb-d Taiyo</p>
      <p className="font-sm">Driftime®</p>
    </div>
  </div>

  <div className="profile-card">
    <figure className="image-figure">
      <div className="image-wrapper">
        <img
          alt="Photograph of Alexie Sommer"
          loading="lazy"
          width="600"
          height="800"
          decoding="async"
          className="image"
          src="https://cdn.sanity.io/images/zqatagq1/production/5c2fba0be083af622957e8b41729c278a9f3a597-1024x1427.jpg?rect=0,0,1024,1365&w=600&h=800&max-w=1440"
        />
      </div>
    </figure>
    <div className="text-content">
      <p>Alexie Sommer</p>
      <p className="font-sm">URGE Collective</p>
    </div>
  </div>

  <div className="profile-card">
    <figure className="image-figure">
      <div className="image-wrapper">
        <img
          alt="Photograph of Aurelie Lionet"
          loading="lazy"
          width="600"
          height="800"
          decoding="async"
          className="image"
          src="https://cdn.sanity.io/images/zqatagq1/production/36397c01986187debcc53073347368138cd46a86-1024x683.jpg?rect=380,246,328,437&w=600&h=800&max-w=1440"
        />
      </div>
    </figure>
    <div className="text-content">
      <p>Aurelie Lionet</p>
      <p className="font-sm">Design for Life</p>
    </div>
  </div>

  <div className="profile-card">
    <figure className="image-figure">
      <div className="image-wrapper">
        <img
          alt="Photograph of Jo Barnard"
          loading="lazy"
          width="600"
          height="800"
          decoding="async"
          className="image"
          src="https://cdn.sanity.io/images/zqatagq1/production/e67cf8253e3f5fa3d6fe575bd89abbda3d6c0d96-1024x926.jpg?rect=232,129,598,797&w=600&h=800&max-w=1440"
        />
      </div>
    </figure>
    <div className="text-content">
      <p>Jo Barnard</p>
      <p className="font-sm">Morrama</p>
    </div>
  </div>
</div>



                </div>
            </Sections>
        </>
    )
}

