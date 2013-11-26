define(['collection', 'models/vimeo-video', 'localstorage'], function (Collection, Model, localStorage) {
  return Collection.extend({
    name: 'vimeoVideos',
    url: "http://vimeo.com/api/v2/channel/kinetictypography/videos.json",
    model: Model,
    localStorage: new Backbone.LocalStorage("videoCollection")
  });
});
