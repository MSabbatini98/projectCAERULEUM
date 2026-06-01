'use client'
import Image, { ImageProps } from "next/image";

interface DownloadableImgProps extends ImageProps {
  downloadLink: string;
}

export default function DownloadableImg({
  downloadLink,
  ...imgProps
}: DownloadableImgProps) {
  const handleClick = () => {
  const link = document.createElement("a");
  link.href = "/media/cv/CV_Matteo_Sabbatini_2026.pdf";
  link.download = "CV_Matteo_Sabbatini_2026.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <button onClick={handleClick} className="cv_hover">
      <Image {...imgProps} />
    </button>
  );
}