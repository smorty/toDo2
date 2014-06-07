var app = angular.module('toDo2')

app.service('todoService', function ($http, $q) {
  	this.getItem = function(){
  		var d = $q.defer();
  		$http({
  			method: 'GET',
  			headers: {'X-Parse-Application-Id':'ZN2LjKrVSM23EQnytlsa8fBCqXc1aYuLR5p8k5tp', 'X-Parse-REST-API-Key':'xj1rkgrEcG14Tvvb8UM5bYxnZJin1M6QRMziL2MF'},
  			url: 'https://api.parse.com/1/classes/List'
  		}).success(function(data){
  			d.resolve(data.results);
  		});
  		return d.promise;
  	};

  	this.addItem = function(item){
  		var obj = {
  			task: item
  		};
  		$http({
  			method: 'POST',
			headers: { 'X-Parse-Application-Id':'ZN2LjKrVSM23EQnytlsa8fBCqXc1aYuLR5p8k5tp', 'X-Parse-REST-API-Key':'xj1rkgrEcG14Tvvb8UM5bYxnZJin1M6QRMziL2MF'},
  			url: 'https://api.parse.com/1/classes/List',
  			data: obj	
  		});
  	};
  });