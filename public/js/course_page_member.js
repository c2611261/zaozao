

angular.module('coursePageMemberModel',[]).
  controller('CoursePageMemberController', ['$scope', '$http','$location', 
        function($scope, $http, $location){
    getCourseByCategoryAfter($http, $scope, $location);
    getCourseByCategoryBefore($http, $scope, $location);
}]);

var getCourseByCategoryAfter = function($http, $scope, $location){
    	 	$http.get(getQueryLink($location))
    	 	.success(function(e){
    	 		console.log('get course ',e);
    	 		$scope.courseCategories = e;
    	 		$scope.d=e;
    	 		//$scope.$digest();
    	 	}).error(function(e){

    	 	});
}

var getCourseByCategoryBefore = function($http, $scope, $location){
            $http.get(getQueryLink($location)+'&history=1')
            .success(function(e){
                console.log('get history course ',e);
                $scope.historyCourseCategories = e;
                $scope.d=e;
                //$scope.$digest();
            }).error(function(e){

            });
}


var getQueryLink = function($location){
    return 'http://'+$location.host()+":8080"+
            '/education/zaozao/course/query?category='+encodeURI('预教课程');
}
