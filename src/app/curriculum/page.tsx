import Image from "next/image";

import "../styles/curriculum.scss";
import Theater from "@/components/theater";
import TheaterLang from "@/components/theaterLang";

import { SKILLZ, LANG_SLIDER } from "./data";
import {Card, CardHalf} from "@/components/card";
import CoolTitle from "@/components/utils/coolTitle";

export default function Curriculum() {
  return (
    <div className="main_content curriculum">
      <div className="cv_upper">
        <div className="cv_txt">
          <p className="intro">
            {
              "Dall'esperienza accumulata nell'e-Commerce in Spotview alla passione innata per l'ambiente, scopri le più importanti esperienze lavorative e formatice che hanno contribuito a costruire una professionalità versatile e responsabile."
            }
          </p>
          <p className="fake_cta">
            Clicca sul curriculum per scaricarlo &rarr;{" "}
          </p>
        </div>
        <div className="cv_img">
          <Image
            src="/media/cv/cv.avif"
            width={400}
            height={800}
            alt="Author handing out his CV"
          />
          <Image
            src="/media/cv/extract-cv.avif"
            className="hover"
            width={400}
            height={800}
            alt="Author handing out his CV"
          />
        </div>
      </div>

      <div className="skillz">
        {/* <p> {SKILLZ[0].title}</p> Single item from DATA - SKILLZ*/}

        {SKILLZ.map(({ title, content }, index) => (
          <div
            className="PPF" //Past (soft skills ), Present (programming skills), Future (mission)-> Conoscenze passate (), presenti e future
            key={index}
          >
            <CoolTitle title={title} colorClass="blue_5" />
            <div>
              <p className="PPFcontent">{content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="lang_theater">
        <CoolTitle title={"Lingue conosciute"} colorClass="blue_5" />
        <p>
          Clicca sui vari banner per avere più informazioni sulle lingue che
          parlo e che sto imparando. Utilizza le frecce per spostarti e clicca
          di nuovo se vuoi chiudere.
        </p>
        <div className="cv_theater theater_lang">
          <TheaterLang langs={LANG_SLIDER} />
        </div>
      </div>

      <div className="volontariato">
        <CoolTitle title={"Volontariato"} colorClass="blue_5" />
        <p>
          Oltre alla mia esperienza lavorativa, nel corso degli anni ho dedicato
          parte del mio tempo al volontariato, contribuendo a progetti e
          iniziative che mirano a migliorare la comunità e l'ambiente. Queste
          esperienze mi hanno permesso di sviluppare competenze trasversali e di
          ampliare la mia prospettiva sul mondo del lavoro e sulla società in
          generale.
        </p>

        <h2>Salvaguardia dell'ambiente : PlasticFree</h2>
        <p>
          Con Plastic free effettuiamo diversi progetti sul territorio. Dalla
          sensibilizzazione nelle scuole alla partecipazione attiva durante le
          attività di raccolta rifiuti.
        </p>
        <h2>Integrazione con la comunità : Albero di Cirene</h2>
        <p>
          Con Albero di Cirene collaboriamo per promuovere l'integrazione
          sociale e culturale nella comunità. I progetti a cui partecipo la
          scuola di italiano per extracomunitari e il progetto di ascolto per le
          persone sole/anziane/emarginate.
        </p>
        <div className="volunteer-cards">

          
          <CardHalf
            href="/projects/prova1"
            hrefCTA="Albero di Cirene"
            projectLongDescription="Associazione di volontariato che persegue la promozione e la valorizzazione della persona, in qualunque condizione essa si trovi, attraverso attività di ascolto, orientamento, formazione e accompagnamento. Con Albero di Cirene collaboriamo per promuovere l'integrazione sociale e culturale nella comunità. I progetti a cui partecipo la scuola di italiano per extracomunitari e il progetto di ascolto per le persone sole/anziane/emarginate."
            projectLinkCTA="Scopri di più"
          >
            <CoolTitle title="Albero di Cirene" colorClass="blue_5" />
          </CardHalf>
          
          <CardHalf
            href="/projects/prova1"
            hrefCTA="Scopri la sezione PlasticFree dedicata"
            projectLongDescription="Sono ormai referente per il Comune di Bologna da Maggio 2024. Grazie a PlasticFree ho potuto organizzare diverse raccolte e diverse sensibilizzazioni con scuole ed aziende"
            projectLinkCTA="Scopri di più"

          >
          <CoolTitle title="PlasticFree " colorClass="blue_3" />
          </CardHalf>
        </div>

      </div>
    </div>
  );
}
