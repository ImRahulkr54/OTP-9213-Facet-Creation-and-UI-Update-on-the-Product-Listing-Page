
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.FacetCreationExtension.FacetCreationExtension.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.FacetCreationExtension.FacetCreationExtension.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}