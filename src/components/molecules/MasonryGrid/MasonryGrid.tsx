"use client";

import Image from "next/image";
import "./Masonry.css";
import Portal from "@/components/Portal/Portal";
import { ImageModal } from "../ImageModal/ImageModal";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useDisplaySize } from "@/hooks/display";
import { Media } from "@/payload-types";

interface MasonryProps {
  images: Media[];
}

const Masonry: React.FC<MasonryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);
  const size = useDisplaySize();

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
            src={images[activeImage].url || ""}
            alt={images[activeImage].alt || "Image description not available"}
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
        {images.map(({ id, url, width, height, alt }, index) => (
          <div
            key={id}
            className={"item"}
            style={{
              minWidth: `${(width ?? 100) / 15}px`,
              minHeight: `${(height ?? 100) / 15}px`,
            }}
          >
            {/* <span
                  style={{
                    color: "#ff00ff",
                    top: "10px",
                    left: "10px",
                    position: "absolute",
                    zIndex: 1,
                  }}
                >{`w:${width}-h:${height}`}</span> */}
            <Image
              priority
              className={"image"}
              style={{ cursor: size !== "mobile" ? "pointer" : "default" }}
              sizes={size !== "mobile" ? "auto" : "auto"}
              fill={size !== "mobile"}
              width={size === "mobile" ? width || 100 : undefined}
              height={size === "mobile" ? height || 100 : undefined}
              src={url || ""}
              alt={alt || "Image description not available"}
              onClick={() => {
                if (size !== "mobile") {
                  setActiveImage(index);
                  setIsOpen(true);
                }
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Masonry;
