import React from "react";
import LazyLoad from "vanilla-lazyload";
import lazyloadConfig from "./config/lazyioad";

// Only initialize it one time for the entire application
if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
}

export class LazyImage extends React.Component {
  // Update lazyLoad after first rendering of every image
  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  // Just render the image with data-src
  render() {
    const { srcSet, sizes, src, alt, portfolioImg } = this.props;
    return (
      <img
        className={`${"lazy"} ${portfolioImg}`}
        data-srcset={srcSet}
        data-sizes={sizes}
        data-src={src}
        src="data:image/gif;base64,R0lGODlhSwAxAIAAAP///wAAACH5BAEAAAEALAAAAABLADEAAAJAjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1iCgA7"
        alt={alt}
      />
    );
  }
}

export default LazyImage;
