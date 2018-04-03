function instanab(username, _opts) {
  const opts = _opts || {};
  const limit = opts.limit || 10;
  let images = [];
  if (!username) {
    throw new Error('Must give username');
  }

  function run() {
    doXhr();
  }

  function doXhr() {
    const url = `https://www.instagram.com/${username}?__a=1`;
    const req = new XMLHttpRequest();
    req.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const text = this.responseText;
        const json = JSON.parse(text);
        images = getImages(json);
        setImages();
      }
    };
    req.open('GET', url, true);
    req.send();
  }

  const makeLink = (shortcode) => `https://www.instagram.com/p/${shortcode}`;

  const getImages = (payload) => payload.graphql
    .user
    .edge_owner_to_timeline_media
    .edges
    .map(e => e.node)
    .filter(n => n.__typename === 'GraphImage' || n.__typename === 'GraphSidecar' || n.__typename === 'GraphVideo')
    .map(n => ({
      link: makeLink(n.shortcode),
      img: n.thumbnail_src,
      kind: n.__typename,
      id: n.shortcode
    }));

  function setImages() {
    const parent = document.getElementById('instanab');

    images.forEach(i => {
      const a = document.createElement('a');
      a.href = i.link;
      a.id = i.id;
      a.target = '_blank';

      const img = document.createElement('img');
      img.src = i.img;

      a.appendChild(img);
      parent.appendChild(a);
    });
  }

  return {
    run
  };
}
