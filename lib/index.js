module.exports = function (data) {
  data.content = data.content.replace(
    /\!\[(.*)\]\((.*)\)/g,
    (match, text, url, offset, string) => {
      if (/^\.\/(.*)/.test(url)) {
        const asset = url.replace(/\.\/(?:[^/]*\/)?(.*)/, '$1');
        return `{% asset_img ${text}${asset ? ` ${asset}` : ''} %}`;
      } else if (/^(.*)/.test(url)) {
        const asset = url.replace(/(?:[^/]*\/)?(.*)/, '$1');
        return `{% asset_img ${text}${asset ? ` ${asset}` : ''} %}`;
      } else {
        return string;
      }
    },
  );
  return data;
};
