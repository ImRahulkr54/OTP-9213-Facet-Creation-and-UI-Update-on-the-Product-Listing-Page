// Model.js
// -----------------------
// @module Case
define("JJ.FacetCreationExtension.FacetCreationExtension.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/FacetCreationExtension/SuiteScript2/FacetCreationExtension.Service.ss"
            ),
            true
        )
});
});
