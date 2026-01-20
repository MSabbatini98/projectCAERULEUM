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
          <Card>
           <CoolTitle
              title="Calcolatrice classica"
              colorClass="blue_3"
            />  
            {/* TODO passare grado di difficoltà in modo dinamico */}
            {/* TODO passare tecnologia utilizzata in modo dinamico */}
            {/* TODO passare link pagina in modo dinamico */}
            {/* TODO passare grado di difficoltà in modo dinamico */}

            <p> Una calcolatrice classica realizzata con HTML, CSS e JavaScript. </p>
          </Card> 
        </div>
    )
}