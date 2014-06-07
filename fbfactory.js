var app = angular.module('toDo2')

app.factory('fbFactory', function(){
	var ref = new Firebase('https://tododevmtn.firebaseio.com/')
	return {
		getItem: function(){
			var items = [];
			ref.on('child_added', function(snapshot){
				items.push(snapshot.val());
			});
			return items;
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