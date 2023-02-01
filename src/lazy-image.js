import { useState, useEffect } from 'react';
import LazyLoad from "vanilla-lazyload";
import lazyloadConfig from "./config/lazyioad";
import { useMediaQuery } from '@react-hook/media-query';

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
}

const LazyImage = ({ portfolioImg, srcSet, sizes, dataSrc, alt }) => {
  const [dataSrcImg, setDataSrcImg] = useState(dataSrc.mobile1x);
  const [imageGif, setImageGif] = useState("data:image/gif;base64,R0lGODlhSwAxAIAAAP///wAAACH5BAEAAAEALAAAAABLADEAAAJAjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1iCgA7");

  const isMobile = useMediaQuery(
    'only screen and (max-width: 767px)'
  );
  const isTablet = useMediaQuery(
    'only screen and (min-width: 768px) and (max-width: 1199px)'
  );
  const isDesktop = useMediaQuery(
    'only screen and (min-width: 1200px)'
  );

  useEffect(() => {
    document.lazyLoadInstance.update();
  }, []);  

  useEffect(() => {
    if (isMobile) {
      setDataSrcImg(dataSrc.mobile1x);
      setImageGif("data:image/gif;base64,R0lGODlhSwAxAIAAAP///wAAACH5BAEAAAEALAAAAABLADEAAAJAjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1iCgA7");
    }
    if (isTablet) {
      setDataSrcImg(dataSrc.tablet1x);
      setImageGif("data:image/gif;base64,R0lGODlhOwAxAIAAAP///wAAACH5BAEAAAEALAAAAAA7ADEAAAI4jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvPZKgAAOw==");
    }
    if (isDesktop) {
      setDataSrcImg(dataSrc.desktop1x);
      setImageGif("data:image/gif;base64,R0lGODlhuQCTAIAAAP///wAAACH5BAEAAAEALAAAAAC5AJMAAALPjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7OvloAADs=");
    }

  }, [ isMobile, isTablet, isDesktop, setDataSrcImg, setImageGif, dataSrc.mobile1x, dataSrc.tablet1x, dataSrc.desktop1x]);

  return (
      <img
        className={`${"lazy"} ${portfolioImg}`}
        data-srcset={srcSet}
        data-sizes={sizes}
        data-src={dataSrcImg}
        alt={alt}
        src={imageGif}
      />
  );
}

export default LazyImage;
