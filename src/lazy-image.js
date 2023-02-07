import { useEffect } from 'react';
import LazyLoad from 'vanilla-lazyload';
import lazyloadConfig from './config/lazyioad';
import { useMediaQuery } from '@react-hook/media-query';
import './lazy-image.css';

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
}

const LazyImage = ({ portfolioImg, img }) => {
  const isMobile = useMediaQuery('only screen and (max-width: 767px)');
  const isTablet = useMediaQuery(
    'only screen and (min-width: 768px) and (max-width: 1199px)'
  );
  const isDesktop = useMediaQuery('only screen and (min-width: 1200px)');

  const {
    alt,
    mobile1x,
    tablet1x,
    desktop1x,
    mobile2x,
    tablet2x,
    desktop2x,
    mobileBase450px,
    tableBase354px,
    desktopBase370px,
  } = img;

  useEffect(() => {
    document.lazyLoadInstance.update();
  }, []);

  const imageDevice = () => {
    if (isMobile) {
      return mobile1x;
    }
    if (isTablet) {
      return tablet1x;
    }
    if (isDesktop) {
      return desktop1x;
    }
  };

  const baseImage = () => {
    if (isMobile) {
      return mobileBase450px;
    }
    if (isTablet) {
      return tableBase354px;
    }
    if (isDesktop) {
      return desktopBase370px;
    }
  };

  return (
    <picture>
      <source
        media="(min-width: 1200px)"
        data-srcset={`${desktop1x} 1x, ${desktop2x} 2x`}
      />
      <source
        media="(min-width: 768px)"
        data-srcset={`${tablet1x} 1x, ${tablet2x} 2x`}
      />
      <source
        media="(max-width: 767px)"
        data-srcset={`${mobile1x} 1x, ${mobile2x} 2x`}
      />

      <img
        className={`${'lazy'} ${portfolioImg}`}
        data-src={imageDevice()}
        src={baseImage()}
        alt={alt}
      />
    </picture>
  );
};

export default LazyImage;
