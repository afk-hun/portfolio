'use client';

import React, { useEffect } from 'react';

const DynamicFavIcon: React.FC = () => {
  const [index, setIndex] = React.useState<number>(0);
  const [indexText, setIndexText] = React.useState<string>('01');

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIndex((prevIndex) => (prevIndex + 1) % 33);
        setIndexText(index < 10 ? `0${index}` : `${index}`);
      },
      index === 7 || index === 18 || index === 29 ? 1000 : 100
    );

    return () => clearTimeout(timer);
  }, [index]);
  return <link rel='icon' href={`/images/fav-icons/AFK-32-${indexText}.png`} />;
};

export default DynamicFavIcon;
