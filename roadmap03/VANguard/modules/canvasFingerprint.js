// Hook into the CanvasRenderingContext2D prototype
const getContext = HTMLCanvasElement.prototype.getContext;

HTMLCanvasElement.prototype.getContext = function() {
  const context = getContext.apply(this, arguments);

  // Override the methods commonly used for fingerprinting
  const getImageData = context.getImageData;
  context.getImageData = function() {
    console.warn('Canvas fingerprinting attempt detected: getImageData');
    return getImageData.apply(this, arguments);
  };

  const toDataURL = context.toDataURL;
  context.toDataURL = function() {
    console.warn('Canvas fingerprinting attempt detected: toDataURL');
    return toDataURL.apply(this, arguments);
  };

  return context;
};

// Additional hook into OffscreenCanvas for modern browsers
if (window.OffscreenCanvas) {
  const getOffscreenContext = OffscreenCanvas.prototype.getContext;
  OffscreenCanvas.prototype.getContext = function() {
      const context = getOffscreenContext.apply(this, arguments);

      const offscreenGetImageData = context.getImageData;
      context.getImageData = function() {
          console.warn('Canvas fingerprinting attempt detected in OffscreenCanvas: getImageData');
          return offscreenGetImageData.apply(this, arguments);
      };

      const offscreenToDataURL = context.toDataURL;
      context.toDataURL = function() {
          console.warn('Canvas fingerprinting attempt detected in OffscreenCanvas: toDataURL');
          return offscreenToDataURL.apply(this, arguments);
      };

      return context;
  };
}
