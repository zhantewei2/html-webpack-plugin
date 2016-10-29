module.exports = function (templateParams) {
  return {
    compilation: typeof templateParams.compilation,
    dirname: __dirname,
    filename: __filename
  };
};