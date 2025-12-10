import heroCasino from './hero-casino.webp';

export const images = {
  '/images/hero-casino.webp': heroCasino,
};

export const getImage = (path) => {
  return images[path] || path;
};

export default images;