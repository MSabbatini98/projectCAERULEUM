import Card from "@/components/card"
import CoolTitle from "@/components/utils/coolTitle"

export async function generateMetadata() {
    return {
      title: 'Progetti | CAERULEUM',
      descriptiom : 'tutti i progetti del mio sito portfolio'
    }
  }

export default function Project() {
    return (
       <div className="main_content">
          <h1> This is the PROJECT PAGE</h1>

          <Card
            href="/projects/prova1"
            hrefTitle="Scopri di più"
            projectLongDescription="Sono ormai referente per il Comune di Bologna da MAggio 2024. Grazie a PlasticFree ho potuto organizzare diverse raccolte e diverse sensibilizzazioni con scuole ed aziende"

          >
           <CoolTitle
              title="PlastcFree Bologna"
              colorClass="blue_3"
            />  
          </Card>


          <Card
            href="/projects/prova2"
            hrefTitle="Scopri di più"
            projectLongDescription="A casa ho tante piante, ho deciso di creare un database per tenere traccia di tutte le mie piante, con foto, nome, data di acquisto e altre informazioni utili. Il progetto è in collaborazione GITHUB, per collegare dei rilevatori di umidità e un arduino, in modo da poter monitorare le mie piante anche quando sono fuori casa"
          > 
           <CoolTitle
              title="Plant DB "
              colorClass="blue_2"
            />  
          </Card> 
          <Card
            href="/projects/basic-calculator"
            hrefTitle="Calcolatrice base"
            projectLongDescription="Esercizio semplice per prendere dimestichezza con useReducer."
          >
           <CoolTitle
              title="secondo Titolo "
              colorClass="blue_2"
            />  
          </Card> 
          <Card
            href="/projects/prova2"
            hrefTitle="Prova 2"
            projectLongDescription="Lorem Ipsum"
          >
           <CoolTitle
              title="secondo Titolo "
              colorClass="blue_2"
            />  
          </Card> 
          <Card
            href="/projects/prova2"
            hrefTitle="Prova 2"
            projectLongDescription="Lorem Ipsum"
          >
           <CoolTitle
              title="secondo Titolo "
              colorClass="blue_2"
            />  
          </Card> 
        </div>
    )
}