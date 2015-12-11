
angular.module('articleDetailPageModel',['ngRoute']).
  controller('ArticleDetailPageController', ['$scope', '$http','$location', '$routeParams',
        function($scope, $http, $location, $routeParams){
    var id = $location.search().id;
    console.log('query course '+id);
    $http.get('http://'+$location.host()+":8080/education/zaozao/course/querycourse/"+id)
    	 	.success(function(e){
    	 		console.log('get course ',e);
    	 		$scope.course = e;
                
                
                console.log('show video '+$scope.showVideo);
                console.log('show image '+$scope.showImage);
                console.log('aaa '+$scope.course.titleImagePath !== undefined);
                console.log($scope.course.videoPath === undefined);
    	 		document.getElementById('courseintro').innerHTML=$scope.course.content;

                // $http.get('http://'+$location.host()+":8080/education/zaozao/course/file/"+id+"/"+$scope.course.videoPath)
                // .success(function(e){
                //     console.log('read '+e);
                    //$scope.course.videoUrl='data:image/jpeg;base64,' +btoa(e);
                    $scope.showVideo = ($scope.course.titleImageUrl === undefined) 
                        || ($scope.course.videoUrl !== undefined);
                // });

                // $http.get('http://'+$location.host()+":8080/education/zaozao/course/file/"+id+"/"+$scope.course.titleImagePath)
                // .success(function(e){
                    //$scope.course.titleImageUrl='data:image/jpeg;base64,' +e;
                    $scope.showImage = ($scope.course.titleImageUrl !== undefined) 
                        && ($scope.course.videoUrl === undefined);
                // });

    	 	}).error(function(e){

    	 	});
}]);