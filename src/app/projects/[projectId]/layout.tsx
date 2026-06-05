import "../../styles/projects.scss";
import "./../../globals.scss"

//components
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"


export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
        <div className="project_layout mainContent">
          {children}  
        </div>
      <Footer />
    </>
  );
}