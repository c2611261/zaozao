

angular.module('coursePurchaseModel',[]).
  controller('CoursePurchaseController', ['$scope', '$http','$location', function($scope, $http, $location){
    getCoursePlanList($http, $scope, $location);
    $scope.d=['aaa','bbb'];
}]);

var getCoursePlanList = function($http, $scope, $location){
    	 	$http.get('http://'+$location.host()+":"+"8080"+
    	 	'/education/zaozao/courseplan')
    	 	.success(function(e){
    	 		console.log('get courseplan ',e);
    	 		$scope.coursePlanList = e;
    	 		$scope.d=e;
    	 		//$scope.$digest();
    	 	}).error(function(e){

    	 	});
    	 }
