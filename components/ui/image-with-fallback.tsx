'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { getImageWithFallback } from '@/lib/image-fallback';

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  src: string;
  alt: string;
}

// SVG placeholder as data URI
const PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%236b7280'%3ERWUA%3C/text%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%239ca3af'%3EImage Loading...%3C/text%3E%3C/svg%3E";

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [errorCount, setErrorCount] = useState(0);

  // Reset when src changes
  useEffect(() => {
    setImgSrc(src);
    setErrorCount(0);
  }, [src]);

  const handleError = () => {
    if (errorCount === 0) {
      // First error: try the fallback from our mapping
      const fallbackSrc = getImageWithFallback(src);
      setImgSrc(fallbackSrc);
      setErrorCount(1);
    } else if (errorCount === 1) {
      // Second error: use the SVG placeholder
      setImgSrc(PLACEHOLDER_SVG);
      setErrorCount(2);
    }
    // After 2 errors, stop trying
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
      unoptimized={imgSrc.startsWith('data:')}
    />
  );
};

export default ImageWithFallback;
