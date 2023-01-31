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
    const { srcSet, sizes, src, alt } = this.props;
    return (
      <img
        className="lazy"
        data-srcset={srcSet}
        data-sizes={sizes}
        data-src={src}
        alt={alt}
      />
    );
  }
}

export default LazyImage;
