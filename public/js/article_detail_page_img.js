
angular.module('articleDetailPageModel',['ngRoute']).
  controller('ArticleDetailPageController', ['$scope', '$http','$location', '$routeParams',
        function($scope, $http, $location, $routeParams){
    var id = $location.search().id;
    console.log('query course '+id);
    $http.get('http://'+$location.host()+":8080/education/zaozao/course/querycourse/"+id)
    	 	.success(function(e){
    	 		console.log('get course ',e);
    	 		$scope.course = e;
    	 		document.getElementById('courseintro').innerHTML=$scope.course.content;
    	 	}).error(function(e){

    	 	});
}]);