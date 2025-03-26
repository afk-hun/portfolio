"use client";

import Image from "next/image";
import styles from "./Masonry.module.css";

type ImageData = {
  id: number;
  width: number;
  height: number;
  src: string;
  alt: string;
};

interface MasonryProps {
  images: ImageData[];
}

const Masonry: React.FC<MasonryProps> = ({ images }) => {
  return (
    <div className={styles.masonry}>
      {images.map(
        ({ id, src, width, height, alt }) => (
          console.log("width", width, "height", height),
          (
            <div
              key={id}
              className={styles.item}
              style={{
                minWidth: `${width}px`,
                minHeight: `${height}px`,
              }}
            >
              <span
                style={{
                  color: "#ff00ff",
                  top: "10px",
                  left: "10px",
                  position: "absolute",
                  zIndex: 1,
                }}
              >{`w:${width}-h:${height}`}</span>
              <Image className={styles.image} fill src={src} alt={alt} />
            </div>
          )
        )
      )}
    </div>
  );
};

export default Masonry;
