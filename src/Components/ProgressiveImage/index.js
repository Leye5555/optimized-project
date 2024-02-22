import React, { useEffect, useState } from "react";
import "./styles.css";
const Index = ({ src, placeholderSrc, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const loadClass =
    placeholderSrc && placeholderSrc === imgSrc ? "loading" : "loaded";
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  return (
    <img
      className={loadClass}
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
    />
  );
};

export default Index;
