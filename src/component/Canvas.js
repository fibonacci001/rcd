import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const MyComponent = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        { color: "#908B8B", enabled: true },
        { color: "#dde2c6", enabled: true },
        { color: "#767970", enabled: true },
        { color: "#504846", enabled: true },
        { color: "#e6eed6", enabled: true },
      ],
      speed: 6,
      horizontalPressure: 3,
      verticalPressure: 3,
      waveFrequencyX: 2,
      waveFrequencyY: 2,
      waveAmplitude: 9,
      shadows: 0,
      highlights: 10,
      colorBrightness: 1,
      colorSaturation: -1,
      wireframe: false,
      colorBlending: 8,
      backgroundColor: "#FFFFFF",
      backgroundAlpha: 1,
      resolution: 1,
    });

    return () => {
      if (gradientRef.current) {
        gradientRef.current.destroy();
      }
    };
  }, []);

  return (
    <canvas
      style={{
        isolation: "isolate",
        height: "100%",
        width: "100%",
      }}
      ref={canvasRef}
    />
  );
};

export default MyComponent;
