import Card from "@/components/card"


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
          <Card />  
        </main>
    )
}