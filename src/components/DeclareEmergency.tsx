import EmergencyDeclarationForm from "./EmergencyDeclarationForm"
import Sections from "./Sections"
import Sidebarsection from "./Sidebarsection"

const DeclareEmergency = () => {
    return (
        <Sections  className="declaration">
            <Sidebarsection title="Declare Emergency Now" />
            <div className="donate-content">
                <p className="paragraph">
                    Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.

                </p>
                <EmergencyDeclarationForm />
            </div>
        </Sections>
    )
}

export default DeclareEmergency


