module.exports = function (templateParams) {
  return JSON.stringify({
    __entry: global.__entry,
    __entryPath: global.__entryPath,
    HTML_WEBPACK_PLUGIN: global.HTML_WEBPACK_PLUGIN
  });
};
