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
      return "data:image/gif;base64,R0lGODlhSwAxAIAAAP///wAAACH5BAEAAAEALAAAAABLADEAAAJAjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1iCgA7"
    }
    if (isTablet) {
      return "data:image/gif;base64,R0lGODlhOwAxAIAAAP///wAAACH5BAEAAAEALAAAAAA7ADEAAAI4jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvPZKgAAOw=="
    }
    if (isDesktop) {
      return "data:image/gif;base64,R0lGODlhuQCTAIAAAP///wAAACH5BAEAAAEALAAAAAC5AJMAAALPjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7OvloAADs="
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
