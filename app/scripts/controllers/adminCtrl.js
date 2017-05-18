vtApp.controller('AdminCtrl', ['$scope','$rootScope','$location','AdminService', 'toastr',function($scope,$rootScope,$location,adminService, toastr){

	$scope.enableUserManagement = function(){
		$scope.isShowUserManagement = true;
		$scope.isShowHerbManagement = false;
		$scope.isShowBlogManagement = false;
		$scope.isShowLookupManagement = false;
	}

	$scope.enableBlogManagement = function(){
		$scope.isShowUserManagement = false;
		$scope.isShowHerbManagement = false;
		$scope.isShowBlogManagement = true;
		$scope.isShowLookupManagement = false;
	}

	$scope.enableHerbManagement = function(){
		$scope.isShowUserManagement = false;
		$scope.isShowHerbManagement = true;
		$scope.isShowBlogManagement = false;
		$scope.isShowLookupManagement = false;
	}

	$scope.enableLookupManagement = function(){
		$scope.isShowUserManagement = false;
		$scope.isShowHerbManagement = false;
		$scope.isShowBlogManagement = false;
		$scope.isShowLookupManagement = true;
	}

	$scope.init = function(){
		$scope.enableUserManagement();
		var getAllUsers = adminService.getUsers();
		getAllUsers.then(function(msg){
			if(msg.status == 200){
				$scope.usersList = msg.data;
			}else{
				toastr.error("Error Fetching Users");
			}
		})
	}

	$scope.enableUser = function(user, index){
		var enableUser = adminService.enableUser(user);
		enableUser.then(function(msg){
			if(msg.status == 200){
				toastr.success("user profile updated successfully");
			}else{
				toastr.error("Error Enabling/Disabling User");
				$scope.usersList[index].active = user.active
			}
		})
	}

}]);