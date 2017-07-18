app =  angular.module('MonApp', []);

app.controller('demoCtrl', function($scope){

	$scope.compteur = 0;

	window.setInterval(function(){
		$scope.compteur++;

	}, 1000)

	$scope.incrementCompteur = function(){
		$scope.compteur++;
	}
})