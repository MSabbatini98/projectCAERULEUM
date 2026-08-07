"use client";

import Image from "next/image";
import { useRef } from "react";
import styles from "./styles/pronunciation.module.scss";

type PronunciationProps = {
  audioUrl: string;
  alt?: string;
};

export default function Pronunciation({
  audioUrl,
  alt = "Pronunciation button, click to hear the pronunciation",
}: PronunciationProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = 0;

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
      aria-label={alt}
    >
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
