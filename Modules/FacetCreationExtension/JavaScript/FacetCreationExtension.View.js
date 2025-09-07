define('JJ.FacetCreationExtension.FacetCreationExtension.View',
[
    'jj_facetcreationextension_facetcreationextension.tpl',
    'Backbone',
    'Backbone.CollectionView',
    'Facets.FacetedNavigationItem.View'
],
function (
    jj_facetcreationextension_facetcreationextension_tpl,
    Backbone,
    BackboneCollectionView,
    FacetsFacetedNavigationItemView
) {
    'use strict';

    return Backbone.View.extend({
        template: jj_facetcreationextension_facetcreationextension_tpl,

        initialize: function (options) {
             
        },

        childViews: {
             
        },

        getContext: function () {
            return {
                message: this.message || 'Hello World!!'
            };
        }
    });
});
