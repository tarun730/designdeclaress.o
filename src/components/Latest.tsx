import Sections from "./Sections"
import Sidebarsection from "./Sidebarsection"
import '../Styles/Latest.css'
import { Link } from "react-router"

const Latest = () => {

    return (
        <Sections>
            <Sidebarsection title="Latest" />

            <div className="content">
                <EventCard />
                <button type="submit" className="submit-btn">
              <Link to="/latest"> See all the latest</Link> 
      </button>
            </div>

        </Sections>
    )
}

export default Latest


export const EventCard = () => {
    const events = [
        {
            "categoryTags": ["Events", "D! UK"],
            "dateTime": "24.04.2025, 15:30",
            "title": "SD4P Collective: How can Service Design drive meaningful sustainability impact",
            "recap": "Recap: SD4P Collective working session – 28th March 2025",
            "link": {
                "text": "Read story",
                "url": "https://designdeclares.com/latest/sd4p-collective-how-can-service-design-drive-meaningful-sustainability-impact"
            }
        },
        {
            "categoryTags": ["Events", "D! UK"],
            "dateTime": "24.04.2025, 15:30",
            "title": "Designing Tomorrow: Speculative Thinking Shapes Our Present",
            "recap": "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
            "link": {
                "text": "Read story",
                "url": "https://designdeclares.com/latest/designing-tomorrow-speculative-thinking-shapes-our-present"
            }
        },

    ]
    return (
       <>
            {events.map((event, index) => (
                <article key={index} lang="en-GB" className="event-article">
                    <div className="event-meta">
                        {event.categoryTags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="event-tag">
                                {tag}
                            </span>
                        ))}
                        <span className="event-date">{event.dateTime}</span>
                    </div>
                    {/* <div className="event-detils"> */}
                        <div className="event-title">
                            <h2>{event.title}</h2>
                        </div>

                        <div className="event-recap">
                            <p>{event.recap}</p>
                            <a href={event.link.url}>{event.link.text}</a>
                        </div>
                    {/* </div> */}
                </article>
            ))}
    </>
    );
};

