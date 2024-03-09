'use client'

import React, { useEffect, useRef } from 'react';
import Experience from './Experience/Experience.js';

function ExperienceComponent() {
  const ref = useRef();

  useEffect(() => {
    const experience = new Experience(ref.current);

    // Clean up function
    return () => {
      experience.destroy(); // Assuming Experience has a destroy method
    };
  }, []); // Empty dependency array so this runs once on mount and clean up on unmount

  return <div className="experience-canvas" ref={ref} />;
}

export default ExperienceComponent;