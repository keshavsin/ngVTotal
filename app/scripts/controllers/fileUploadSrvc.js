'use strict';
vtApp.factory('fileUploadService', function($http) {
	return {
		upload : function(formdata) {
			var request = {
                    method: 'POST',
                    url: 'controllers/api/fileupload/upload',
                    data: formdata,
                    headers: {
                        'Content-Type': undefined
                }
			};
			var $promise = $http(request);
			return $promise;
		}
	}
});