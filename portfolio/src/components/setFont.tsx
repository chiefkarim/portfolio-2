"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function Font() {
  useEffect(() => {
    // Code inside this useEffect will run on the client side
    // Ensure that window is defined before accessing its properties
    if (typeof window !== "undefined") {
      // Load the WebFont script dynamically on the client side
      const webFontScript = document.createElement("script");
      webFontScript.src =
        "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
      webFontScript.async = true;

      webFontScript.onload = () => {
        // Load the fonts using WebFont.load after the script is loaded
        const windowWithWebFont = window as typeof window & {
          WebFont: any;
        };
        windowWithWebFont.WebFont.load({
          google: {
            families: [
              "Abril Fatface:regular",
              "Muli:regular,italic,600,600italic,700,700italic,800,800italic,900,900italic",
            ],
          },
        });
      };
      document.head.appendChild(webFontScript);
    }
  }, []);
  return <></>;
}
