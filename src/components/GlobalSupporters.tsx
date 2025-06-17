


import Sections from './Sections'
import Sidebarsection from './Sidebarsection'
import '../Styles/GlobalSupporters.css'
const GlobalSupporters = () => {
    const designersByCountry = [
        {
          country: "Argentina",
          designers: ["Celina Hilbert"]
        },
        {
          country: "Australia",
          designers: [
            "Alena Smith Interior Design",
            "Andrew Sloan",
            "Andrew Vaughan",
            "Andy Marks",
            "Arielle Breit",
            "Art Disrupt",
            "Austin Smidt",
            "AUTHENTIC DESIGN ALLIANCE (ADA)",
            "Ben Rennie",
            "BETTER FUTURE",
            "Bohdan Dorniak & Co Pty Ltd - PROSPECT, SA",
            "Brand & Communications at Edge Impact",
            "Breathe Architecture",
            "BWD Strategic",
            "Cameron Tonkinwise",
            "Carbon Creative",
            "Carolyn King",
            "Celine Waters",
            "Charlotte Adams",
            "Design by Nature",
            "Design Consigned",
            "Diadem",
            "Dr Michelle Douglas FRSA",
            "eco creative agency",
            "ETHEOS Digital Agency",
            "Finbar",
            "RMIT University",
            "Samuel Yu",
            "Seek & Design",
            "Snug House",
            "Society for Responsible Design Inc.",
            "Sponge",
            "Stephanie Mueller",
            "Steve Baty",
            "STUDIO PERISCOPE",
            "Studio Regina",
            "studiospillane",
            "Tanisha Maria Naik",
            "The Design Thinkers",
            "UNEND",
            "United Studio",
            "vert design",
            "Wendy Fountain",
            "X+O",
            "Ys",
            "Zero Co Pty Ltd"
          ]
        },
        {
          country: "Austria",
          designers: ["Luain"]
        },
        {
          country: "Bangladesh",
          designers: ["Rifat Anik"]
        },
        {
          country: "Belgium",
          designers: [
            "Air",
            "Blue Kameleon SRL",
            "Core Branding",
            "Futurewave",
            "HIER"
          ]
        },
        {
          country: "Brazil",
          designers: [
            "Francisco Albuquerque",
            "GABRIEL ESTEVES DE OLIVEIRA LEITAO",
            "George Rutherford",
            "GIOVANA LORENA FAZIONI",
            "Green Mandarin",
            "IMK Arquitetura e engenharia",
            "Jaakko Tammela",
            "Jenifer Rodrigues",
            "Juan Solís Gundín",
            "JULIA RESENDE",
            "JULIANA SIDASMER",
            "Juliany adiel rafae",
            "Junior Magalhães",
            "KAREN TIE KAWAKAMI",
            "Karla Scherer",
            "Larissa Nunes",
            "Leo Eyer",
            "Leonardo Lins",
            "Leon Seragini",
            "Lincoln Shigui",
            "Lincoln Shiguio",
            "Lorena Shirakawa",
            "LUIS FERNANDO OSCAR COSTA",
            "Marcel Sales",
            "Marcus F. Pereira Junior"
          ]
        },
        {
          country: "Bulgaria",
          designers: ["Ivelina Dimitrova"]
        },
        {
          country: "Canada",
          designers: [
            "Ardeshir Amini",
            "Cense Ltd.",
            "Eliane Bowden",
            "Fletcher Scott Studio Inc.",
            "Meghan Hellstern",
            "PiTCH PR",
            "PiTCH PR",
            "Project 42",
            "Ryan Mayer",
            "SUPERFORT Creative Agency"
          ]
        },
        {
          country: "China",
          designers: [
            "Campaign Design",
            "Orange Creatives",
            "Platform88"
          ]
        },
        {
          country: "Colombia",
          designers: ["Coombo", "Leticia"]
        },
        {
          country: "Croatia",
          designers: ["Creek and Pine", "Protagonist agencija"]
        },
        {
          country: "Czechia",
          designers: ["Entain"]
        },
        {
          country: "Guatemala",
          designers: ["Fabrizio Constanza"]
        },
        {
          country: "India",
          designers: [
            "A BLUNT STORY",
            "Aboa Hasa Foundation",
            "Dinu Prasanna Kennedy",
            "DxE Inc.",
            "LOCAL",
            "Minto Joy",
            "Sai Challa",
            "Shona Sinha",
            "Shreya Salian"
          ]
        },
        {
          country: "Indonesia",
          designers: [
            "Andini Putri Pramudya",
            "Wardani",
            "Nice To Meet You Studio",
            "Skemasocial"
          ]
        },
        {
          country: "Ireland",
          designers: [
            "A Worthy Cause",
            "Aaron O’Neill",
            "Abigail Smith",
            "Alanna Campbell",
            "Alessandra Ravida",
            "Alkamee",
            "Alphabet Soup",
            "Anastasiia Chorna",
            "Andrew Anderson",
            "Babelfis",
            "BIEN",
            "Billion Studio",
            "Emberlight",
            "Emi Daly",
            "Emma Nolan",
            "EPIC Interpretive Design",
            "Fly Bird Design",
            "FUSE Graphic Design Ltd",
            "Global Creative at Johnson Controls",
            "Good As Gold",
            "Grace",
            "Graphic Design [+] at IADT",
            "Graphic Design Communication at LSAD at TUS",
            "Griffith College Design",
            "Image Now",
            "Image Now",
            "Imagine Lab",
            "Iman",
            "Ingrid Smyth",
            "Institute of Designers Ireland",
            "Isabel Staunton",
            "Jamie Whelan",
            "Jeffers & Sons",
            "Joan Ellison",
            "Johanna Legnar",
            "John Connolly",
            "John Connolly",
            "John O’Brien",
            "Jonny Willis",
            "Kacper Jaroszsynski",
            "Kalil Dunne",
            "Sasha Sykes Studio",
            "Self employed - Nichola Wolfe.com",
            "Serena Chille",
            "Shane Casey",
            "Sharon Maxwell",
            "Signal Type Founddry",
            "SLMD",
            "So Studio",
            "Sorcha Fitzgerald",
            "Stefan Paz",
            "Studio Kosmos",
            "Studio Saol",
            "studioimr",
            "Superfolk",
            "Susan Carberry",
            "Sweet! Graphic Design",
            "The Factory",
            "The FACTORY",
            "The Public House",
            "THINKHOUSE",
            "Together We Create",
            "Treetop Studio",
            "University of Limerick",
            "Unthink",
            "Wes Trumble Design",
            "Wilson Creative",
            "Wove"
          ]
        },
        {
          country: "Isle of Man",
          designers: ["Studio Cooper"]
        },
        {
          country: "Italy",
          designers: ["acy"]
        },
        {
          country: "Nicaragua",
          designers: ["Bernardo van de Schepop"]
        },
        {
          country: "Nigeria",
          designers: ["Nuel Wogundu", "Ridwan Awujoola"]
        },
        {
          country: "Norway",
          designers: ["Petchy", "Respira"]
        },
        {
          country: "Pakistan",
          designers: ["Ali Murtaza", "Syed Faizan Raza"]
        },
        {
          country: "Philippines",
          designers: [
            "Darwin Antipolo",
            "Jesi Sumeg-ang",
            "Mathijs Sterrenburg",
            "TAYO Change Agency: House of Culture & Creativity"
          ]
        },
        {
          country: "Poland",
          designers: ["Erogdesign", "Weronika Wojnarowicz"]
        },
        {
          country: "Portugal",
          designers: [
            "Afonso Miguel Tomaz",
            "Assis dos Santos Januário",
            "Bernd Herbert",
            "Carolina Borges Sacoto"
          ]
        },
        {
          country: "Sweden",
          designers: ["Antrop", "Simone De Vivo"]
        },
        {
          country: "Switzerland",
          designers: [
            "Blitz & Donner",
            "Cerca Research & Design Lab",
            "Reform GmbH",
            "Sarah Santacroce",
            "she explores tech",
            "Swiss Design Association",
            "Valerie Notter de Rabanal"
          ]
        },
        {
          country: "Thailand",
          designers: ["Tipaporn", "Tharawongthawat"]
        },
        {
          country: "Turkey",
          designers: ["Bilal Akpinar", "Gaye Poçan"]
        },
        {
          country: "United States",
          designers: [
            "2911 Creative LLC d/b/a Missionspring Studio",
            "76West",
            "Amanda Bauer",
            "Analogy",
            "Angeline Neo",
            "Autumn Dahlia Creative Services LLC",
            "Box Clever"
          ]
        }
      ];
      
    return (
        <Sections>
            <Sidebarsection className="Signatories" title="#661" />
            <span className='Signatories_text' >Global Supporters
            </span>
            <div className="columns-responsive">
            {designersByCountry.map((group, index) => (
        <div key={index} className="section">
          <h3 className="section-title">{group.country}</h3>
          {group.designers.map((designer, i) => (
            <a
              key={i}
              className="custom-link"
            //   href={designer.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Go to ${designer}'s website.`}
            >
              {designer}
            </a>
          ))}
        </div>
      ))}


            </div>
        </Sections>
    )
}

export default GlobalSupporters