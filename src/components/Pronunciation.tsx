"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./styles/pronunciation.module.scss";

type PronunciationProps = {
  audioUrl: string;
  alt?: string;
  durationMs?: number;
};

export default function Pronunciation({
  audioUrl,
  alt = "Pronunciation of the website name",
  durationMs = 2300,
}: PronunciationProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isDepleting, setIsDepleting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const playingLabel = "Playing...";
  const tooltip = "Click to hear the pronunciation";
  
  const handlePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;

    setIsDepleting(true);
    setIsPlaying(true);
    setAnimKey((k) => k + 1);

    try {
      await audio.play();
    } catch (error) {
      console.error("Impossibile riprodurre l'audio", error);
    }
  };

  return (
    <button
      type="button"
      className={styles.pronunciation}
      onClick={handlePlay}
      onMouseLeave={() => setIsPlaying(false)}
      aria-label={alt}
      data-tooltip={isPlaying ? playingLabel : tooltip}
      style={{ "--duration": `${durationMs}ms` } as React.CSSProperties}
    >
      <span
        key={animKey}
        className={`${styles.timer} ${isDepleting ? styles.isDepleting : ""}`}
        onAnimationEnd={() => setIsDepleting(false)}
        aria-hidden="true"
      />

      <Image
        src="/media/pronunciation.avif"
        width={40}
        height={40}
        alt={alt}
      />

      <audio ref={audioRef} src={audioUrl} preload="auto" />
    </button>
  );
}