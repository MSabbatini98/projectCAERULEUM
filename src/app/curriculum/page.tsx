import Image from "next/image";

import Theater from "@/components/theater";
import TheaterLang from "@/components/theaterLang";

import { IKIGAI, LANG_SLIDER } from "./data";
import {Card, CardHalf} from "@/components/card";
import CoolTitle, { SuperCoolTitle } from "@/components/utils/coolTitle";
import DownloadableImg from "@/components/DownloadableImg";
import ExpandingPanel from "@/components/utils/expandCTA";
import Link from "next/link";
export default function Curriculum() {
  return (
    <div className="mainContent curriculum">
      <div className="cv_upper">
        <div className="cv_txt">
          <p className="intro">
          Dall'esperienza accumulata nell'e-Commerce  alla passione innata per l'ambiente, scopri le più importanti esperienze lavorative e formative che hanno contribuito a costruire una professionalità versatile e responsabile.
          </p>
          <button className="fakeCta">
            Clicca sul <span>curriculum</span> per scaricarlo<span> &rarr;{" "}</span>
          </button>
          <p className="intro">
          O continua a leggere per scoprire di più su di me, le mie competenze e i miei progetti.
          </p>
        </div>
        <div className="cv_img">
          <Image
            src="/media/cv/cv.avif"
            width={400}
            height={800}
            alt="Author handing out his CV"
          />

          <DownloadableImg
            src="/media/cv/extract-cv.avif"
            width={400}
            height={800}
            alt="Author handing out his CV"
            downloadLink="/media/cv/CV Matteo Sabbatini 2026.pdf"
          />

        </div>
      </div>

      <div className="ikigai">
        {/* <p> {IKIGAI[0].title}</p> Single item from DATA - IKIGAI*/}

        {IKIGAI.map(({ title, content, content_link }, index) => (
          <div
            className="ikigaiCard" 
            key={index}
          >
            <div className="ikigaiTextWrapper">
              <CoolTitle title={title} colorClass="blue_5" />
              <p className="ikigaiText">{content}</p>
              {content_link && (
                <a className="realCta" href={content_link}>
                  Esplora di più
                </a>
              )}
            </div>

            {index === 1 && (
              <div className="ikigaiSide">
                <Link className=" primaryBtn " href="/certifications">
                  Certifications
                </Link>
                <Link className=" primaryBtn" href="/certifications">
                  Projects
                </Link>
                <Link className=" primaryBtn" href="/certifications">
                  Skills
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mission">
        <SuperCoolTitle title={"Missione personale"} colorClass="blue_5" />
        <p>
          La mia missione personale è quella di contribuire attivamente alla
          creazione di un futuro più sostenibile e consapevole, mettendo a
          frutto le mie competenze, la mia creatività e la mia passione per l'ambiente. Attraverso
          il mio lavoro, mi impegno a promuovere pratiche eco-friendly e a
          sensibilizzare le persone sull'importanza di adottare stili di vita
          più sostenibili. Sono dalla parte del cambiamento positivo che il
          mondo ha bisogno, lavorando per un futuro in cui l'armonia tra uomo e
          natura sia una realtà concreta.
        </p>
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
        <div className="volunteerCards">
          <CardHalf
            hrefCta="Albero di Cirene"
            textCta="Scopri di più"
            longDescription="Associazione di volontariato che persegue la promozione e la valorizzazione della persona, in qualunque condizione essa si trovi, attraverso attività di ascolto, orientamento, formazione e accompagnamento. Con l'Albero di Cirene collaboro tramite l'insegnamento della lingua italiana a persone extracomunitarie."
            imgURL="/media/cv/logo_AlberoCirene.png"
          >
            <CoolTitle title="Albero di Cirene" colorClass="blue_5" />
          </CardHalf>
          
          <CardHalf
            longDescription="Sono ormai referente per il Comune di Bologna da Maggio 2024. Con Plastic free effettuiamo diversi progetti sul territorio: dalla sensibilizzazione nelle scuole alla partecipazione attiva durante le attività di raccolta rifiuti. Personalmente mi sono occupato di organizzare, divulgare, raccogliere e molto altro. Il tutto con l'obiettivo di sensibilizzare e coinvolgere sempre più persone nella lotta contro l'inquinamento da plastica."
            hrefCta="/projects/prova1"
            textCta="Scopri di più"
            imgURL="/media/cv/logo_PlasticFree.jpeg"
          >
          <CoolTitle title="PlasticFree " colorClass="blue_5" />
          </CardHalf>
        </div>
      </div>
        <ExpandingPanel color="red" CTAtext="Open">
          <p>This is a secret section. It will be avaiable after the GO LIVE of the fun mode.</p>
        </ExpandingPanel>
    </div>
  );
}
