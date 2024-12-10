'use client'
import React, { useState } from "react"
import { FormEvent } from 'react'

export default function Newsletter() {
  
  return (
    <div className="form_newsletter">

        <form method="POST" action="">
            <div className="big_col">

                <fieldset>
                    <legend>Informazioni Personali <span>da vendere al migliore offerente:</span></legend>
                    <div>
                        <label>Nome</label>
                        <input 
                            type="text" 
                            name="name" 
                            required 
                        />
                    </div>
                    <div>
                        <label>Cognome</label>
                        <input 
                            type="text" 
                            name="lastname" 
                            required 
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            required
                        />
                    </div>
                    <div>
                        <label>Anno di nascita </label>
                        <input 
                            type="month" 
                            id="month" 
                            name="birth" 
                            min="2000-01" 
                            max="2025-01" 
                            required 
                        />
                    </div>
                </fieldset>
                <div className="frequency">
                  <p>Scegli la frequenza con cui essere spammato</p>
                  <div>
                    <input type="radio" name="frequency" value="1/day"/>
                    <label ><span className="freq_num"> 1 </span> mail al giorno</label>
                  </div>
                  <div>
                    <input type="radio" name="frequency" value="2/week"/>
                    <label><span className="freq_num"> 2 </span> mail a settimana</label>
                  </div>
                  <div>
                    <input type="radio" name="frequency" value="50/month"/>
                    <label className="offerta"><span className="freq_num"> 50 </span> mail al mese</label>
                  </div>
                </div>
                <div className="topic">
                    <p className="row">Scegli uno o più argomento da ignorare:</p>
                    <input type="checkbox" id="topic1" name="topic1" value="nature" />
                    <label>Natura & Ambiente<br/></label>
                    <input type="checkbox" id="topic2" name="topic2" value="diy" />

                    <label>Hack & Life Tips</label>
                    <input type="checkbox" id="topic3" name="topic3" value="projects" />
                    <label>Progetti Firmati Matteo Sabbatini</label>
                    <input type="checkbox" id="topic4" name="topic4" value="all" />
                    <label>Tutti quanti! <br/>Rigorosamente in mail differenti</label>
                </div>

            </div>
            <div className="small_col">
              <div>
                <h3>Lascia un messaggio !</h3>
                <p className="message_intro">Ecco il mitico spazio per i tuoi pensieri aggiuntivi dove puoi scrivere quello che vuoi: domande, complimenti, complimenti o anche lamentele sul meteo.</p>
              </div>
                <div>
                    <label>Messaggio</label>
                    <textarea name="message" placeholder={"Prometto di leggerlo tutto… un giorno. Nel frattempo, stupiscimi: il campo è tuo!"} >
                    </textarea>
                </div>
            </div>
            <button type="submit">Iscriviti !</button>
        </form>
    </div>
  )
}