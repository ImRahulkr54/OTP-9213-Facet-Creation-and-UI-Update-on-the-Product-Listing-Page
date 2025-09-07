define(
    'JJ.FacetCreationExtension.FacetCreationExtension',
    [
        'JJ.FacetCreationExtension.FacetCreationExtension.View',
        'Facets.Browse.View',
        'Facets.FacetedNavigationItem.View',
        'jj_facet_browse.tpl',
        'jj_facets_navigation.tpl'

    ],
    function (
        FacetCreationExtensionView,
        FacetsBrowseView,
        FacetsNavigationView,
        FacetsBrowseTemplate,
        FacetsNavigationTemplate
    ) {
        'use strict';

        return {
            mountToApp: function (container) {
                 try { 

                    FacetsBrowseView.prototype.template = FacetsBrowseTemplate;
                   // FacetsNavigationView.prototype.template = FacetsNavigationTemplate;

                } catch (e) {
                    console.log("Error injecting FacetFilter: " + e.message);
                } 
            }
        };
    }
);
