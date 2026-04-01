'use client'
import Image, { ImageProps } from "next/image";
import { use } from "react";

interface DownloadableImgProps extends ImageProps {
  downloadLink: string;
}

export default function DownloadableImg({
  downloadLink,
  ...imgProps
}: DownloadableImgProps) {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = downloadLink.split("/").pop() || "download.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      onClick={handleClick}
      className="cv_hover"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      <Image {...imgProps} />
    </div>
  );
}
