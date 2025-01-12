import Card from "@/components/card"
import CoolTitle from "@/components/utils/coolTitle"

import pool from '@/components/db'
import { ProjectInterface } from '@/components/db'

export async function generateMetadata() {
  return {
    title: 'Progetti | CAERULEUM ',
    descriptiom : 'tutti i progetti del mio sito portfolio'
  }
}

export default async function Project() {
  const results = await pool.query('SELECT * FROM projects');
  const projects: any = results[0];

  
  return (
    <div
      className="main_content"
    >
       <h1>Projects</h1>
       <ul>
      
         {projects.map((project : ProjectInterface) => (
           <li key={project.id}>
             <h2>{project.title}</h2>
             <p>{project.short_description}</p>
             <a href={project.cta_link} target="_blank" rel="noopener noreferrer">
               {project.cta_text}
             </a>
           </li>
         ))}
       </ul>
       {/* [0]<p>{JSON.stringify(projects)}</p> */}
     </div>
  );
  // return (
  //   
  // );
    // return (
    //    <div className="main_content">
    //       <h1> This is the PROJECT PAGE</h1>

          
    //       <Card>
    //        <CoolTitle
    //           title="Prova 1"
    //           colorClass="blue_3"
    //         />  
    //       </Card> 
    //       <Card>
    //        <CoolTitle
    //           title="secondo Titolo "
    //           colorClass="blue_2"
    //         />  
    //       </Card> 
    //       <Card>
    //        <CoolTitle
    //           title="Prova 1"
    //           colorClass="blue_5"
    //         />  
    //       </Card> 
    //       <Card>
    //        <CoolTitle
    //           title="Prova 1"
    //           colorClass="blue_3"
    //         />  
    //       </Card> 
    //     </div>
    // )
}