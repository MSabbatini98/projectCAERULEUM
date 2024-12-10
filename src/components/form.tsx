'use client'
import React, { useState } from "react"
import { FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    birth: "",
    topic: "",
    frequency: "",
    message: ""
  });
  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
 
  //   const formData = new FormData(event.currentTarget)
  //   const response = await fetch('/api/submit', {
  //     method: 'POST',
  //     body: formData,
  //   })


  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const fieldName = e.target.name;
  //   const fieldValue = e.target.value;

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [fieldName]: fieldValue
  //   }));
  // }

  const submitForm = () => {
    // e.preventDefault()

    // const formURL = e.target.action
    // const data = new FormData()

    // // Turn our formData state into data we can use with a form submission
    // Object.entries(formData).forEach(([key, value]) => {
    //   data.append(key, value);
    // })

    // // POST the data to the URL of the form
    // fetch(formURL, {
    //   method: "POST",
    //   body: data,
    //   headers: {
    //     'accept': 'application/json',
    //   },
    // }).then((response) => response.json())
    // .then((data) => {
    //   setFormData({
    //     name: "",
    //     lastname: "",
    //     email: "",
    //     birth: "",
    //     topic: "",
    //     frequency: "",
    //     message: ""
    //   })

    //   setFormSuccess(true)
    //   setFormSuccessMessage(data.submission_text)
    // })
  }

  return (
    <div className="form_newsletter">
      {formSuccess ?
        <div>{formSuccessMessage}</div>
        :
        <form method="POST" action="" onSubmit={submitForm}>
            <div className="big_col">

                <fieldset>
                    <legend>Informazioni Personali <span>da vendere al migliore offerente:</span></legend>
                    <div>
                        <label>Nome</label>
                        <input 
                            type="text" 
                            name="name" 
                            // onChange={handleInput} 
                            // value={formData.name} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Cognome</label>
                        <input 
                            type="text" 
                            name="lastname" 
                            // onChange={handleInput} 
                            // value={formData.lastname} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            // onChange={handleInput} 
                            // value={formData.name} 
                            required
                        />
                    </div>
                    <div>
                        <label>Anno di nascita </label>
                        <input 
                            type="month" 
                            id="month" 
                            // onChange={handleInput} 
                            // value={formData.name} 
                            name="datemin" 
                            min="2000-01" 
                            max="2025-01" 
                            required 
                        />
                    </div>
                </fieldset>

                <div className="topic">
                    <p className="row">Scegli uno o più argomento da ignorare:</p>
                    <input type="checkbox" id="topic1" name="topic1" value="nature" />
                    <label>Natura & Ambiente<br/></label>
                    <input type="checkbox" id="topic2" name="topic2" value="diy" />

                    <label>Hack & Life Tips</label>
                    <input type="checkbox" id="topic3" name="topic3" value="projects" />
                    <label>Progetti Firmati Matteo Sabbatini</label>
                    <input type="checkbox" id="topic4" name="topic4" value="all" />
                    <label>Tutti quanti ! Rigorosamente in mail differenti</label>
                </div>

            </div>
            <div className="small_col">
                <div>
                    <label>Message</label>
                    <textarea 
                      name="message" 
                      placeholder={"Scrivi qui qualsiasi nota o informazione aggiuntiva, sarò lieto di risponderti !"} 
                      // onChange={handleInput} 
                      value={formData.message}
                      ></textarea>
                </div>
                <button type="submit">Send message</button>
            </div>
        </form>
      }
    </div>
  )
}

// import Form from 'next/form'
 
// export default function Newsletter() {
//   return (
//     <Form action="/search">
//         <div className="form_newsletter">
//             <div className="big_col">
//                 <div className="intro">
//                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere corrupti sit earum in quo eveniet libero.</p>
//                 </div>

//             </div>
//         <input name="query" />
//         <button type="submit">Submit</button>

//         </div>
//       {/* On submission, the input value will be appended to 
//           the URL, e.g. /search?query=abc */}
//     </Form>
//   )
// }