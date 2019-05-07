import WebFont from "webfontloader";

const loadFont = () => {
  WebFont.load({
    google: {
      families: ["Roboto:300,400,700", "sans-serif"]
    }
  });
};

export { loadFont };
