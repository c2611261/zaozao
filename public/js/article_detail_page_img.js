
angular.module('articleDetailPageModel',['ngRoute']).
  controller('ArticleDetailPageController', ['$scope', '$http','$location', '$routeParams',
        function($scope, $http, $location, $routeParams){
    var id = $location.search().id;
    console.log('query course '+id);
    $http.get('http://'+$location.host()+":8080/education/zaozao/course/querycourse/"+id)
    	 	.success(function(e){
    	 		console.log('get course ',e);
    	 		$scope.course = e;
                $scope.showImage = ($scope.course.titleImagePath !== undefined) 
                        && ($scope.course.videoPath === undefined);
                $scope.showVideo = ! $scope.showImage;
                console.log('show video '+$scope.showVideo);
                console.log('show image '+$scope.showImage);
                console.log('aaa '+$scope.course.titleImagePath !== undefined);
                console.log($scope.course.videoPath === undefined);
    	 		document.getElementById('courseintro').innerHTML=$scope.course.content;
    	 	}).error(function(e){

    	 	});
}]);