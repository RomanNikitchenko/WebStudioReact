import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeCurrentType } from 'redux/extraInfo/extraInfo-slice';
import s from './PortfolioProduct.module.css';
import { useMediaQuery } from '@react-hook/media-query';
import { LazyImage } from 'lazy-image';

export const PortfolioProduct = ({
  img,
  description,
  title,
  text,
  index,
  options,
}) => {
  const isTablet = useMediaQuery(
    'only screen and (min-width: 768px) and (max-width: 1199px)'
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (title.length > 28 && isTablet === true) {
      dispatch(changeCurrentType(index % 2 === 1 ? index - 1 : index + 1));
    } else if (title.length > 28 && isTablet === false) {
      dispatch(changeCurrentType([]));
    }
  }, [dispatch, index, title.length, isTablet]);

  return (
    <li className={s.portfolioItem}>
      <NavLink onClick={e => e.preventDefault()} className={s.portfolioLink}>
        <div className={s.portfolioDescription}>
          {/* <picture>
            <source
                srcSet={`${img.desktop1x} 1x, ${img.desktop2x} 2x`}
                media="(min-width: 1200px)"
              />
            <source
                srcSet={`${img.tablet1x} 1x, ${img.tablet2x} 2x`}
                media="(min-width: 768px)"
              />
            <source
                srcSet={`${img.mobile1x} 1x, ${img.mobile2x} 2x`}
                media="(max-width: 767px)"
              />
            <img
                srcSet={`${img.desktop1x} 370w, ${img.desktop2x} 740w, ${img.tablet1x} 354w, ${img.tablet2x} 708w, ${img.mobile1x} 450w, ${img.mobile2x} 900w,`}
                sizes="(min-width: 1200px) 370px, (min-width: 768px) 354px, (max-width: 767px) 450px, 100vw"
                src={img.src}
                alt={img.alt}
              />
          </picture> */}
          <LazyImage
            srcSet={`${img.desktop1x} 370w, ${img.desktop2x} 740w, ${img.tablet1x} 354w, ${img.tablet2x} 708w, ${img.mobile1x} 450w, ${img.mobile2x} 900w,`}
            sizes="(min-width: 1200px) 370px, (min-width: 768px) 354px, (max-width: 767px) 450px, 100vw"
            src={img.src}
            alt={img.alt}
          />
          <p className={s.portfolioText}>{description}</p>
        </div>
        <div className={`${s.thumb} ${options.includes(index) && s.thumbItem}`}>
          <h2 className={s.thumbTitle}>{title}</h2>
          <p className={s.thumbText}>{text}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default PortfolioProduct;
