import Sections from "./Sections";
const Latestpage = () => {

    const caseStudyData = 
    [
        {
          title: "Embedding Sustainability in the Design Curriculum",
          description: "Outlining the journey of how the Design Declares initiative was integrated into the National College of Art and Design’s curriculum for BA Graphic Design students.",
          category: "Case Studies",
          location: "D! Ireland",
          date: "30.04.2025",
          time: "16:30",
          image: "https://cdn.sanity.io/images/3xff4iuw/production/d23367e512187cb561f9e12ff83705ca2a25f033-1080x1080.png?max-w=1440",
          source: "from National College of Art & Design, Ireland"
        },
        {
          title: "SD4P Collective: How can Service Design drive meaningful sustainability impact",
          description: "Recap: SD4P Collective working session – 28th March 2025",
          category: "Events",
          location: "D! UK",
          date: "24.04.2025",
          time: "15:30",
          image: "https://cdn.sanity.io/images/3xff4iuw/production/d23367e512187cb561f9e12ff83705ca2a25f033-1080x1080.png?max-w=1440",
          source: "from SD4P Collective"
        },
        {
          title: "Sasha Titchkosky Interview",
          description: "An Interview with Koskela Founder and Design Declares Australia Board Member - Sasha Titchkosky",
          category: "Perspective",
          location: "D! Australia",
          date: "18.12.2024",
          time: "08:38",
          image: "https://cdn.sanity.io/images/3xff4iuw/production/d23367e512187cb561f9e12ff83705ca2a25f033-1080x1080.png?max-w=1440",
          source: "from Koskela"
        },
        {
          title: "Andrew Simpson Interview",
          description: "An Interview with Vert Design and Design Declares Australia CEO - Andew Simpson",
          category: "Perspective",
          location: "D! Australia",
          date: "10.12.2024",
          time: "08:37",
          image: "https://cdn.sanity.io/images/3xff4iuw/production/d23367e512187cb561f9e12ff83705ca2a25f033-1080x1080.png?max-w=1440",
          source: "from Vert Design"
        },
        {
          title: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
          description: "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
          category: "Events",
          location: "D! UK",
          date: "06.12.2024",
          time: "14:30",
          image: "https://cdn.sanity.io/images/3xff4iuw/production/d23367e512187cb561f9e12ff83705ca2a25f033-1080x1080.png?max-w=1440",
          source: "from Design Declares UK"
        },
        {
          title: "D! June Event Recap",
          description: "Design Declares has always been about people. From the moment that Design Council CDO Cat Drew introduced Alexie Sommer and Jo Barnard back in 2022...",
          category: "Events",
          location: "D! UK",
          date: "27.06.2024",
          time: "16:30",
          image: "https://cdn.sanity.io/images/3xff4iuw/production/d23367e512187cb561f9e12ff83705ca2a25f033-1080x1080.png?max-w=1440",
          source: "from Design Council UK"
        },
        {
          title: "Reducing Website Carbon Emissions",
          description: "In an industry first, MEK have documented exactly how they approached and solved this challenge...",
          category: "Case Studies",
          location: "D! UK",
          date: "26.06.2024",
          time: "14:30",
          image: "https://cdn.sanity.io/images/3xff4iuw/production/d23367e512187cb561f9e12ff83705ca2a25f033-1080x1080.png?max-w=1440",
          source: "from MEK Agency"
        },
        {
          title: "Creative Climate Investigations",
          description: "A showcase of 8 projects exploring greenwashing, air quality, environmental effects on wellbeing, and more.",
          category: "Case Studies",
          location: "D! UK",
          date: "01.01.2024",
          time: "19:30",
          image: "https://cdn.sanity.io/images/3xff4iuw/production/d23367e512187cb561f9e12ff83705ca2a25f033-1080x1080.png?max-w=1440",
          source: "from Design Declares"
        }
      ]
      
      
    
  return (
<Sections>


<div className="sidebar">
    <div className="sticky-header">
    <div className="filter-panel">
      <h1 className="sr-only">Latest</h1>

      <div className="section">
        <div className="filter-group">
          <h2 className="heading">Categories</h2>
          <div className="radio-group" role="radiogroup" aria-label="Filter articles by category">
            {["All", "Events", "Case Studies", "Updates", "Perspective"].map((label) => (
              <label key={label} className="radio-label">
                <input type="radio" name="category" value={label} />
                <span className={`radio-button ${label === "All" ? "selected" : ""}`}>{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h2 className="heading">View by Chapter</h2>
          <div className="radio-group" role="radiogroup" aria-label="Filter articles by chapter">
            {["All", "D! UK", "D! Ireland", "D! Australia"].map((label) => (
              <label key={label} className="radio-label">
                <input type="radio" name="chapter" value={label} />
                <span className={`radio-button ${label === "All" ? "selected" : ""}`}>{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

<div className="content">
{
    caseStudyData.map(i=><CaseStudyCard data={i}/>)
}

</div>
</Sections>
  )
}

export default Latestpage


const CaseStudyCard=({ data }:{ data:any })=> {
  return (
    <div className="case-study-card">
      <div className="case-image" style={{ backgroundImage: `url(${data.image})` }}>
        {/* <div className="case-label">Case Study</div> */}
        <h1 className="case-title">
          {/* {data.title} */}
        </h1>
        {/* <p className="case-source">{data.source}</p> */}
      </div>
      <div className="case-info">
        <div className="tags">
          <span className="tag">{data.category}</span>
          <span className="tag">{data.location}</span>
          <span className="">{data.date}, {data.time}</span>
        </div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
