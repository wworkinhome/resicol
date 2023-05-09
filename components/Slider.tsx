import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  {
    src: '/public/images/john.png',
    alt: 'Image 1',
  },
  {
    src: '/public/images/ketherine.png',
    alt: 'Image 2',
  },
  {
    src: '/public/images/mike.png',
    alt: 'Image 3',
  },
  {
    src: '/public/images/Phillis.png',
    alt: 'Image 4',
  },
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="relative">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute top-0 left-0 transition-opacity duration-500 ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
