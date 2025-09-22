import React, { createContext, useState, useEffect } from "react";

export const MouseContext = createContext();

export const MouseProvider = ({ children }) => {
  const [coords, setCoords] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) setCoords({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return <MouseContext.Provider value={{ coords }}>{children}</MouseContext.Provider>;
};
