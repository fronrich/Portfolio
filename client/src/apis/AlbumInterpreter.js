// turn an array of image urls into scaled images for the react
// photo gallery component
export const generateImagesScaled = (imageURLArray) => {
  const template = (url, x, y) => {
    return {
      src: url,
      width: x,
      height: y,
    };
  };

  let list = [];

  imageURLArray.forEach(async (url) => {
    let width;
    let height;
    url = url === "EOF" ? url : `${url}.jpg`;
    // get image size

    function getMeta(url, callback) {
      var img = new Image();
      img.src = url;
      img.onload = function () {
        callback(this.width, this.height);
      };
    }
    getMeta(url, function (width, height) {
      if (url === "EOF") {
        //TODO: FIXME
        // solution 1: cache images locally
        // solution 2: write to file every time and add this to a buil script
      }
      console.log(width, height);
      let ratio = width / height;
      let scaledWidth = Math.round(width * ratio);
      let scaledHeight = Math.round(height * ratio);
      list.push(template(url, scaledWidth, scaledHeight));
    });
  });
  return list;
};
