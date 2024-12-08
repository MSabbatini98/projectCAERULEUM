import Card from "@/components/card"
import CoolTitle from "@/components/utils/coolTitle"

export async function generateMetadata() {
  return {
    title: 'Progetti | CAERULEUM ',
    descriptiom : 'tutti i progetti del mio sito portfolio'
  }
}

export default function Project() {
    return (
       <div className="main_content">
          <h1> This is the PROJECT PAGE</h1>

          
          <Card>
           <CoolTitle
              title="Prova 1"
              colorClass="blue_3"
            />  
          </Card> 
          <Card>
           <CoolTitle
              title="secondo Titolo "
              colorClass="blue_2"
            />  
          </Card> 
          <Card>
           <CoolTitle
              title="Prova 1"
              colorClass="blue_5"
            />  
          </Card> 
          <Card>
           <CoolTitle
              title="Prova 1"
              colorClass="blue_3"
            />  
          </Card> 
        </div>
    )
}