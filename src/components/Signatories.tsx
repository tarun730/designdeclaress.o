


import Sections from './Sections'
import Sidebarsection from './Sidebarsection'
import '../Styles/Signatories.css'
const Signatories = () => {
    const names = [
        "21–87",
        "216 Signs",
        "31% Wool",
        "400",
        "A–Side.",
        "Aalia Ahamed",
        "Abbie Williams",
        "abc",
        "ACRE – A Creative Endeavour Ltd",
        "Active Matter",
        "ACX",
        "Adele Kelly",
        "AdesignStorie",
        "Advocate Design Agency",
        "Aetha Design",
        "Aileron Design Ltd",
        "Alan Pitchforth",
        "Alex Kimber Design",
        "Alexander Miller",
        "Alexandra Lunn Studio",
        "Alexandra Lunn Studio",
        "Alexie Sommer",
        "Alexis Bardini",
        "Ali Adair",
        "Andrew Carr",
        "ANdy Parker",
        "Aalia Ahamed",
        "Abbie Williams",
        "abc",
        "ACRE – A Creative Endeavour Ltd",
        "Active Matter",
        "ACX",
        "Adele Kelly",
        "AdesignStorie",
        "Advocate Design Agency",
        "Aetha Design",
        "Aileron Design Ltd",
        "Alan Pitchforth",
        "Alex Kimber Design",
        "Alexander Miller",
        "Alexandra Lunn Studio",
        "Alexandra Lunn Studio",
        "Alexie Sommer",
        "Alexis Bardini",
        "Ali Adair",
        "Andy Thornton",
        "Anja Klüver",
        "Annabelle Vuille",
        "Apfel",
        "Applied Works",
        "Archetype Accessories",
        "Arif Yusop",
        "Arrival",
        "Avery & Brown",
        "BA (Hons) Design for Sustainable Futures at Arts University Bournemouth",
        "BA Graphic Design at Kingston School of Art",
        "Aalia Ahamed",
        "Abbie Williams",
        "abc",
        "ACRE – A Creative Endeavour Ltd",
        "Active Matter",
        "ACX",
        "Adele Kelly",
        "AdesignStorie",
        "Advocate Design Agency",
        "Aetha Design",
        "Aileron Design Ltd",
        "Alan Pitchforth",
        "Alex Kimber Design",
        "Alexander Miller",
        "Alexandra Lunn Studio",
        "Alexandra Lunn Studio",
        "Alexie Sommer",
        "Alexis Bardini",
        "Ali Adair",
        "Badfish Labs",
        "Aalia Ahamed",
        "Abbie Williams",
        "abc",
        "ACRE – A Creative Endeavour Ltd",
        "Active Matter",
        "ACX",
        "Adele Kelly",
        "AdesignStorie",
        "Advocate Design Agency",
        "Aetha Design",
        "Aileron Design Ltd",
        "Alan Pitchforth",
        "Alex Kimber Design",
        "Alexander Miller",
        "Alexandra Lunn Studio",
        "Alexandra Lunn Studio",
        "Alexie Sommer",
        "Alexis Bardini",
        "Ali Adair",
        "Baines Design LTD",
    ];

    return (
        <Sections>
            <Sidebarsection className="Signatories" title="#513" />
            <span className='Signatories_text' >Signatories and counting in <span className="badge">D! UK</span>
            </span>
            <div className="columns-responsive">
                {
                    names.map((i,index) => (
                        <a
                            key={index}
                            className="custom-link"
                            href="https://bluntcrayon.com/"
                            target="_blank"
                            aria-label="Go to Blunt Crayon's website.">
                            {i}
                        </a>
                    ))
                }


            </div>
        </Sections>
    )
}

export default Signatories