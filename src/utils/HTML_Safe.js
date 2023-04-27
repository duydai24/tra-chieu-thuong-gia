
export function HTML_Safe(html) {
  let str = html;
  if (!str || str.length === 0)
    return null;
  if ((str + '').indexOf('https://www.youtube.com') > -1) {
    str = str.replace(
      /(?:<oembed) (?:url)=(".*)(?:"><\/oembed)>/gm,
      (g, g1) => {
        return `
            <iframe
                className="youtube-frame"
                src="${g1.replace('/watch?v=', '/embed/')}"
                allowFullScreen
            />
    `;
      }
    );
  }
  return str;
}
