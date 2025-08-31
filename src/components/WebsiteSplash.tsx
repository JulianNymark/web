"use client";

import { useEffect, useState } from "react";
import styles from "./WebsiteSplash.module.css";

export const WebsiteSplash = () => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch("/images/this-website.svg")
      .then((res) => res.text())
      .then(setSvgContent);
  }, []);

  return (
    <div
      aria-label="This Website graphic"
      className={styles.splash}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
