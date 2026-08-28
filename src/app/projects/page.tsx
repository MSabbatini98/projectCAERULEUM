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
    <div className="projects">
      <p className="projectIntro">I’m the kind of person who <b>gets interested in almost everything </b>— and I mean it. <br/>
      Over time, that’s turned into a collection of personal projects across different areas of my life.<br/> They all share a common thread: simple to tryout, sustainable, and accessible to anyone who wants to challenge themselves.  </p>

      <h3 className="projectIntroH">Here is a non-exhaustive list of them:</h3>

      {/*!  Calculator Basic */}
      <Card
        href="/projects/basic-calculator"
        hrefCTA="Vai alla Calcolatrice"
        projectDifficulty="Facile"
        projectSkills={["HTML", "CSS", "JS", "REACT"]}
        projectStatus="Completato"
        projectDate="2026-02"
        isProjectProgramming={true}
        projectMainImage="/media/projects/basic_calculator.png"
        githubLink="https://github.com/MSabbatini98/REACT-eruditio/tree/main/hook-use-reducer"
      >
        <CoolTitle title="Calcolatrice semplice" colorClass="blue_4" />
        <p className="projectLongDescription">Semplice esercizio in react per prendere dimestichezza e allenarmi con <b>useReducer</b>. L'esercizio è stato svolto seguendo un tutorial ma con alcune personalizzazioni stilistiche e funzionali.</p>
      </Card>

      {/* PlasticFree */}
      <Card
        projectDifficulty="Impossibile da definire"
        projectStatus="In corso"
        isProjectProgramming={false}
        projectMainImage="/media/cv/logo_PlasticFree.jpeg" 
        href="/projects/plastic-free"
        hrefCTA="Scopri tutti i dettagli"
        >
        <CoolTitle title="PlasticFree" colorClass="blue_4" />
        <p className="projectLongDescription">PlasticFree è un progetto che mira a sensibilizzare sull'importanza di ridurre l'uso della plastica nella nostra vita quotidiana. 
        Sono referente ormai da diversi anni e insieme a PlasticFree promuoviamo azioni locali per ridurre il consumo, la raccolta e il riciclo della plastica. <br></br>
        Tra i vari progetti ho collaborato in raccolte, sensibilizazioni e accordi con i comuni.
        </p>
      </Card>

      {/* kintzugi */}
      <Card
        href="/projects/kintsugi"
        hrefCTA="Scopri le mie creazioni"
        isProjectProgramming={false}
        projectMainImage="/media/projects/kintsugi/kintsugi_tile.jpeg" 
      >
        
        <CoolTitle title="Kintzugi" colorClass="blue_2" />
        <p className="projectLongDescription">Il kintzugi è l'arte giapponese di riparare oggetti rotti con l'oro, trasformando le crepe in elementi di bellezza. Il progetto Kintsugi è nato dal desiderio di riparare e valorizzare oggetti danneggiati, dando loro una nuova vita. Attraverso tecniche di restauro e design, Kintsugi mira a creare pezzi unici che raccontano storie di resilienza e trasformazione.</p>
      </Card>

      {/* scacchiera GOLIVE dopo aver consegnato il regalo */}
      {/* <Card
        href="/projects/scacchiera-argilla"
        hrefCTA="Scopri il processo creativo"
      >
        <CoolTitle title="Scacchiera in argilla" colorClass="blue_2" />
      </Card> */}
      
      {/*!  Calculator Scientific */}
      <Card
        href="/projects/scientific-calculator"
        hrefCTA="Vai alla Calcolatrice Scientifica"
        projectDifficulty="Facile"
        projectSkills={["HTML", "CSS", "JS", "REACT"]}
        projectStatus="Completato"
        projectDate="2026-08"
        isProjectProgramming={true}
        projectMainImage="/media/projects/basic_calculator.png"
        githubLink="https://github.com/MSabbatini98/REACT-eruditio/tree/main/hook-use-reducer"
      >
        <CoolTitle title="Calcolatrice scientifica" colorClass="blue_4" />
        <p className="projectLongDescription">L'evoluzione della <a>calcolatrice semplice</a>: dopo essermi esercitato, riprovo l'esercizio senza risorse esterne. Per non fare la stessa cosa, questa volta proverò a riprodurre la calcolatrice scientifica </p>
      </Card>


      <Card
        href="/projects/prova2"
        hrefCTA="Fai un tour"
      >
        <CoolTitle title="secondo Titolo " colorClass="blue_2" />
        <p className="projectLongDescription">A casa ho tante piante, ho deciso di creare un database per tenere traccia di tutte le mie piante, con foto, nome, data di acquisto e altre informazioni utili. Il progetto è in collaborazione GITHUB, per collegare dei rilevatori di umidità e un arduino, in modo da poter monitorare le mie piante anche quando sono fuori casa</p>
        {/* TODO passare grado di difficoltà in modo dinamico */}
        {/* TODO passare tecnologia utilizzata in modo dinamico */}
        {/* TODO passare link pagina in modo dinamico */}
        {/* TODO passare grado di difficoltà in modo dinamico */}

        <p>
          Una calcolatrice classica realizzata con HTML, CSS e JavaScript.{" "}
        </p>
      </Card>


    </div>
  );
}
