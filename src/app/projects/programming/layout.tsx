import "../../styles/projects.scss";
import "./../../globals.scss"

//components
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"


export default function ProgrammingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="project_layout main_content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
