define([
  'backbone',
  'views/root',
  'collections/contacts',
  'views/contacts-list/index',
  'views/contacts-list/contact-details',
  'views/pet-view',
  'collections/pets',
  'views/vimeo-video-details',
  'views/vimeo-video-view',
  'collections/vimeo-videos'
], function(Backbone, RootView, ContactCollection, ContactListIndexView, ContactListDetailView, PetsView, PetsCollection, 
  VimeoVideoDetailsView, VimeoVideosView, VimeoVideos) {
  return Backbone.Router.extend({
    routes: {
      "foo1": "index",
      "foo2/:id": "details",
      "": "vimeo"
    },
    vimeo: function(){
      VIMEOVIDEOS.vimeoVideosCollection = new VimeoVideos();
      $.ajax({
        url: "http://vimeo.com/api/v2/channel/kinetictypography/videos.json"
      }).done(function(data){
        VIMEOVIDEOS.vimeoVideosCollection.add(data);
        var view = new VimeoVideosView({
          collection: VIMEOVIDEOS.vimeoVideosCollection
        });

        RootView.getInstance().setView(view);

      });
    },
    index: function() {
      var contacts = new ContactCollection();
      contacts.fetch();
      var view = new ContactListIndexView({
        collection: contacts
      });
      RootView.getInstance().setView(view);
    },
    details: function(id){
      var contacts = new ContactCollection();
      contacts.fetch();
      console.dir(contacts)
      var model = contacts.get(id)
      var detailView = new ContactListDetailView({
        model: model
      });
      RootView.getInstance().setView(detailView);
    }
  });
}); 
