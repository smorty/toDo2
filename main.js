'use strict';

angular.module('toDo2')
  .controller('MainCtrl', ['$scope', 'fbFactory',
  	function($scope, service){
  		$scope.list = service.getItem();
  		$scope.listAdd = function(){
  			service.addItem({task: $scope.listItem});
  			$scope.listItem = '';
  		};
  		service.initItems();
  	}
]);



  	// function ($scope, todoService) {
  	// $scope.listAdd = function(){
  	// 	todoService.addItem($scope.listItem);
  	// 	getParseData();
  	// };
  	// var getParseData = function(){
  	// 	todoService.getItem()
  	// 		.then(function(data){
  	// 			$scope.list = data;
  	// 		});
  	// };

  	// getParseData();

    // $scope.listAdd = function(){
    // 	var obj = {
    // 		task: $scope.listItem
    // 	}
    // 	todoService.addItem(obj);
    // 	$scope.listItem = '';
    // }

    // $scope.list = todoService.getItem();
  // });