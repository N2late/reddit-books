export function secondsToDhms(unix) {
  const start = new Date(unix * 1000);
  const seconds = (Date.now() - start) / 1000;

  let y = Math.floor(seconds / (3600 * 24 * 365));
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);

  if (y > 0) {
    return y + (y == 1 ? ' year' : ' years');
  }
  if (d > 0) {
    return d + (d == 1 ? ' day' : ' days');
  }

  if (h > 0) {
    return h + (h == 1 ? ' hour' : ' hours');
  }

  if (m > 0) {
    return m + (m == 1 ? ' minute' : ' minutes');
  }
  if (s > 0) {
    return s + (s == 1 ? ' second' : ' seconds');
  }
}

export const textWithParagraphs = (text) =>
  text
    .split('\n')
    .map((paragraph) => (
      <p className="text1">
        {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
      </p>
    ));

/*export const linkify = (str) => {
  var newStr = str.replace(
    /((http(s)?(:\/\/))?(www\.)?([a-zA-Z0-9-_./])*(\.[a-zA-Z]{2,3}\/?))([a-zA-Z0-9-_/?=&#])*(?!.*a>|('|"))/g,
    '<a href="$1"> $1 </a>',
  );
  console.log(newStr);
  return newStr;
};*/
