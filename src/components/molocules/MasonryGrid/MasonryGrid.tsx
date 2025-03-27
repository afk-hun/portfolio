"use client";

import Image from "next/image";
import "./Masonry.css";
import Portal from "@/components/Portal/Portal";
import { ImageModal } from "../ImageModal/ImageModal";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

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
  const [activeImage, setActiveImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  return (
    <>
      <Portal>
        <CSSTransition
          in={isOpen}
          nodeRef={nodeRef}
          timeout={300}
          classNames="modal"
          unmountOnExit
        >
          <ImageModal
            ref={nodeRef}
            src={images[activeImage].src}
            alt={images[activeImage].alt}
            hasMany={images.length > 1}
            onLeftClick={function (): void {
              setActiveImage((prev) => {
                if (prev === 0) {
                  return images.length - 1;
                }
                return prev - 1;
              });
            }}
            onRightClick={function (): void {
              setActiveImage((prev) => {
                if (prev === images.length - 1) {
                  return 0;
                }
                return prev + 1;
              });
            }}
            onClose={function (): void {
              setIsOpen(false);
            }}
          />
        </CSSTransition>
      </Portal>
      <div className={"masonry"}>
        {images.map(
          ({ id, src, width, height, alt }, index) => (
            console.log("width", width, "height", height),
            (
              <div
                key={id}
                className={"item"}
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
                <Image
                  className={"image"}
                  fill
                  src={src}
                  alt={alt}
                  onClick={() => {
                    setActiveImage(index);
                    setIsOpen(true);
                  }}
                />
              </div>
            )
          )
        )}
      </div>
    </>
  );
};

export default Masonry;
