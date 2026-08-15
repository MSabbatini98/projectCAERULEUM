import banner_it from "../../../public/media/sliderImgs/italy_banner.webp"
import banner_fr from "../../../public/media/sliderImgs/france_banner.webp"
import banner_sp from "../../../public/media/sliderImgs/spain_banner2.png"
import banner_jp from "../../../public/media/sliderImgs/japan_banner.webp"
import banner_ps from "../../../public/media/sliderImgs/palestine_banner.webp"
import banner_en from "../../../public/media/sliderImgs/uk_banner.webp"

export interface IkigaiItem {
    title: string;
    content: string;
    contentLink?: string;
  }
  
  export const IKIGAI: IkigaiItem[] = [
    // it can have the following properties: title, content and content_link. 
    // TODO Rn content_link is not used, but it can be used bc it's bronken
    { 
        title: "What I love", 
        content: "I crave novelty and creativity, and I find joy in learning new things and exploring new ideas. I am passionate about technology, sustainability, and making a positive impact on the world. I love working on projects that challenge me to think outside the box and push the boundaries of what is possible.", 
    },
    { 
        title: "What I'm good at", 
        content: "I have a strong background in e-commerce platforms such as Shopify, BigCommerce - for which i have a certificate, but also Magento2, and custom hybrid solutions with nextJs and wordpress. I'm currently the sole Web Master of multiple different websites, such as this one. I am skilled at analyzing data, identifying trends, and I'm currently working on developing data analytics skills thanks to my google Certificate. I'm also working to perfect my Ux/Ui design skills. I am also a creative problem solver and a strong communicator, able to collaborate effectively with cross-functional teams and stakeholders.", 
    },
    { 
        title: "What I want to do", 
        content: "I'm still too young to have a clear vision of my future, but I know that I want to work on projects that have a positive impact on the world and that allow me to continue learning and growing. I'm particularly interested in sustainability and environmental issues, and I would love to work on projects that help to create a more sustainable future. I'm also interested in exploring new technologies and finding innovative simple solutions to somewhat complex problems.", 
    },
    { 
        title: "What the world needs", 
        content: "Right now, more than ever, the world needs peace and quite to heal. We need to find ways to work together to create bridges and not fences. Bridges that connects forests divided by highways, bridges between different cultures, different generations, different ideologies. We need to find ways to connect with each other and with nature to improve the quality of our lives and protect what is dear to us, as a species and as individuals. We need to find ways to create a more sustainable future for ourselves and for future generations.", 
    }
];
export    const  LANG_SLIDER = [ 
    {
        urlIcon: banner_it,
        altIcon: "Bandiera Italiana",
        urlMainImg : banner_it,
        altMainImg: "Bandiera Italiana",
        title: "Italiano",
        content: "Nato e cresciuto in Italia, parlo l'italiano come lingua madre. ",
        example: "Codesta stilografica giace posata sul desco, adiacente a un docile felino ed un'annurca vermiglia."
    },
    {
        urlIcon: banner_en,
        altIcon: "Bandiera Inglese",
        urlMainImg : banner_en,
        altMainImg: "Bandiera Inglese",
        title: "Inglese",
        content: "Grazie all'anno trascorso vivendo negli USA, ho una ottima padronanza della lingua inglese, sia in ambito professionale che personale. L'accento, come per l'italiano, varia a seconda dell'ultima influenza predominante",
        example: "That fountain pen lies upon the smooth oaken table, beside a docile feline and a vermilion Annurca apple."
    },
    {
        urlIcon: banner_fr,
        altIcon: "Bandiera Francese",
        urlMainImg : banner_fr,
        altMainImg: "Bandiera Francese",
        title: "Francese",
        content: "Il mio livello di francese è relativamente basso, con una minima comprensione pessima pronuncia, dovuto in gran parte al fatto di aver imparato la lingua esclusivamente tramite Duolingo. ",
        example: "Le stylo est sur la table, près d’un chat et une pomme rouge."
    },
    {
        urlIcon: banner_sp,
        altIcon: "Bandiera Spagnola",
        urlMainImg : banner_sp,
        altMainImg: "Bandiera Spagnola",
        title: "Spagnolo",
        content: "Ho una conoscenza scolastica dello spagnolo, livello A2. Posso comprendere e comunicare in situazioni quotidiane, ma ho difficoltà con conversazioni più complesse o tecniche se non dovesse funzionare la S alla fine. ",
        example: "Esa pluma estas sobre la mesa, con un gato y una manzana roja."
    },
    {
        urlIcon: banner_jp,
        altIcon: "Bandiera Giapponese",
        urlMainImg : banner_jp,
        altMainImg: "Bandiera Giapponese",
        title: "Giapponese",
        content: "Conosco abbastanza bene 1 dei 3 alfabeti, l'hiragana, e sono in grado di leggere i kanji più semplici. Riesco inoltre a capire le frasi più comunemente usate negli anime (quindi ad esempio ‹sono tornat a casa›, ma anche ‹ucciderò tutti i demoni› e ovviamente ‹salverò il mondo/l'umanità/la tua anima› ). Attualmente lo studio del giapponese è stato sospeso per dare spazio all'arabo - che ha un solo alfabeto.",
        example: "ペンはつくえの上にあります。ねことあかいりんごといっしょです。 (Pen wa tsukue no ue ni arimasu. Neko to akai ringo to issho desu.)"
    },
    {
        urlIcon: banner_ps, 
        altIcon: "Bandiera Palestina (lingua araba)",
        urlMainImg : banner_ps,
        altMainImg: "Bandiera Palestina (lingua araba)",
        title: "Arabo MSA",
        content: "Ho do poco cominciato a studiare l'arabo MSA ( forma ufficiale usata nei libri, nei giornali, alla televisione e nei discorsi formali) e l'alfabeto arabo. I progressi possono essere consultati sulla pagina di Duolingo.",
        example: "بوب (Bob)"
    }
];