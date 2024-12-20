// 'use client';

import Script from 'next/script';
import CoolTitle from './utils/coolTitle';

export default function AboutMap() {
    return (
        <section className="about_map">
            {/* Start map section */}
            <div className="map_container">
                <CoolTitle
                title="Nazioni visitate"
                colorClass="blue_2"/>
                <p className ="map_intro" >Queste mappe di seguito (3) evidenziano i posti in cui sono stato, sia in visita che per vivere. <br/> Sulla mappa Globale ci sono indicati anche i giorni di permanenza</p>
            
                <div className="about_map">
                    <Script src="https://static-bundles.visme.co/visme-embed.js" />

                <div className="visme_d" data-title="Top 10 Countries Map Square" data-url="x40zw83y-untitled-project" data-w="800" data-full-h="false" data-h="600" data-domain="my">
                </div>

                <p>Made with <a href="https://www.visme.co/?vc=Made-With-Visme&amp;utm_medium=Embed" target="_blank" rel="noreferrer">Visme</a></p>
                </div>
            </div>

        </section>

    )
}
