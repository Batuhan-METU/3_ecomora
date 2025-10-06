"use client";

import { useState, useRef, useEffect } from "react";

export default function ImageBanner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="banner-images">
      <img
        className="low-res-img"
        src="low_res/banner.jpeg"
        alt="banner-low-res"
      />
      <img
        className="high-res-img"
        ref={imgRef}
        src="med_res/banner.png"
        alt="banner-high-res"
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => {
          // when high resolution image is completely loaded, this callback function will be executed and the intention will be executed and the intention is to get it to take this initally invisible image and now make it visible
          setIsLoaded(true);
        }}
      />
      <div className="cta-btns-container">
        <div>
          <div>
            <h3>Welcome to</h3>
            <h1>The Ecomora Store</h1>
          </div>
          <div>
            <button className="sticker-shop">Shop Stickers</button>
            <button className="sticker-shop">Shop Planner</button>
          </div>
        </div>
      </div>
    </div>
  );
}
