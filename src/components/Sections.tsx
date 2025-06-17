// import { ReactNode } from "react"


// interface SectionsProps {
//   children: ReactNode;
// }
import { useInView } from "react-intersection-observer";

const Sections = ({ children, className  }: { children: any, className?:string }) => {
    const { ref, inView } = useInView({
        // threshold: 0.1,
      });
    return (
        <div id={className} className={` donate-section ${
            inView
              ? "visible"
              : ""
          }`} ref={ref}>
                <div className="donate-grid">
                    {children}
                </div>
          
        </div>
    )
}

export default Sections