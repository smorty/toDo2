var app = angular.module('toDo2')

app.factory('fbFactory', function($q){
	var ref = new Firebase('https://tododevmtn.firebaseio.com/')
	return {
		getItem: function(){
			var deferred = $q.defer()
			var items = [];
			ref.on('child_added', function(snapshot){
				items.push(snapshot.val());
				deferred.resolve(items);
			});
			// debugger;
			// return items;
			return deferred.promise;
		},
		addItem: function(item){
			ref.push(item);
		},
		initItems: function(){
			var items = [];
			// debugger;
			ref.on('value', function(snapshot){
				items.push(snapshot.val())
			})
			return items;
		}
	}
});