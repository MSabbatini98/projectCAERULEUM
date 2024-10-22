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
        <main className="main_content">
          <h1> This is the PROJECT PAGE</h1>
          <Card>
           <CoolTitle
              title="Prova 1"
              color="blue_3"
            />  
          </Card> 
          <Card>
           <CoolTitle
              title="secondo Titolo "
              color="blue_2"
            />  
          </Card> 
          <Card>
           <CoolTitle
              title="Prova 1"
              color="blue_5"
            />  
          </Card> 
          <Card>
           <CoolTitle
              title="Prova 1"
              color="blue_3"
            />  
          </Card> 
        </main>
    )
}