import { Card } from "@/components/card";
import CoolTitle from "@/components/utils/coolTitle";

export  function generateMetadata() {
  return {
    title: "Progetti | CAERULEUM",
    description: "tutti i progetti del mio sito portfolio",
  };
}

export default function Project() {
  return (
    <div className="main_content">
      <p className="project-into">I’m the kind of person who gets interested in almost everything — and I mean it. Over time, that’s turned into a collection of personal projects across different areas of my life. They all share a common thread: simple to try, sustainable, and accessible to anyone who wants to challenge themselves. Here is a non-exhaustive list of them. </p>

      <Card
        href="/projects/basic-calculator"
        hrefCTA="Vai alla Calcolatrice"
        projectLongDescription="Semplice esercizio in react per prendere dimestichezza e allenarmi con useReducer. L'esercizio è stato svolto seguendo un tutorial ma con alcune personalizzazioni stilistiche e funzionali."
        projectLinkCTA=""
        projectDifficulty="Facile"
        projectSkills={["HTML", "CSS", "JS", "REACT"]}
        projectStatus="Completato"
        projectDate="2026-02"
        isProjectProgramming={true}
        projectMainImage="/media/projects/basic_calculator.png"        
      >
        <CoolTitle title="Calcolatrice semplice" colorClass="blue_3" />

      </Card>


      <Card
        href="/projects/plasticfree"
        hrefCTA="Scopri di più"
        projectLongDescription="PlasticFree è un progetto che mira a sensibilizzare sull'importanza di ridurre l'uso della plastica nella nostra vita quotidiana. 
        Sono referente ormai da diversi anni e insieme a PlasticFree promuoviamo azioni locali per ridurre il consumo, la raccolta e il riciclo della plastica."
        projectDifficulty="Impossibile da definire"
        projectStatus="In corso"
        isProjectProgramming={false}
        projectMainImage="/media/cv/logo_PlasticFree.jpeg" 
        >
        <CoolTitle title="PlasticFree" colorClass="blue_2" />
      </Card>

      <Card
        href="/projects/kintsugi"
        hrefCTA="Kintsugi"
        projectLongDescription="Il kintzugi è l'arte giapponese di riparare oggetti rotti con l'oro, trasformando le crepe in elementi di bellezza. Il progetto Kintsugi è nato dal desiderio di riparare e valorizzare oggetti danneggiati, dando loro una nuova vita. Attraverso tecniche di restauro e design, Kintsugi mira a creare pezzi unici che raccontano storie di resilienza e trasformazione."
        projectLinkCTA="Scopri di più sul Kintsugi"
      >
        
        <CoolTitle title="secondo Titolo " colorClass="blue_2" />
      </Card>

      <Card
        href="/projects/prova2"
        hrefCTA="Prova 2"
        projectLongDescription="Lorem Ipsum"
        projectLinkCTA=""
      >
        <CoolTitle title="secondo Titolo " colorClass="blue_2" />
      </Card>


      <Card
        href="/projects/prova2"
        hrefCTA="Prova 2"
        projectLongDescription="A casa ho tante piante, ho deciso di creare un database per tenere traccia di tutte le mie piante, con foto, nome, data di acquisto e altre informazioni utili. Il progetto è in collaborazione GITHUB, per collegare dei rilevatori di umidità e un arduino, in modo da poter monitorare le mie piante anche quando sono fuori casa"
        projectLinkCTA=""
      >
        <CoolTitle title="secondo Titolo " colorClass="blue_2" />
        {/* TODO passare grado di difficoltà in modo dinamico */}
        {/* TODO passare tecnologia utilizzata in modo dinamico */}
        {/* TODO passare link pagina in modo dinamico */}
        {/* TODO passare grado di difficoltà in modo dinamico */}

        <p>
          {" "}
          Una calcolatrice classica realizzata con HTML, CSS e JavaScript.{" "}
        </p>
      </Card>


    </div>
  );
}
