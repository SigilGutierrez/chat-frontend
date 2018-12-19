'use strict';

/**
 * @ngdoc function
 * @name chatFrontendApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the chatFrontendApp
 */
var userLogin ={};
function inciarSession($scope,data, userFactory) {
	 userFactory.createSession(data).then(function (dataSession) {
			   	if(dataSession) {
			   	}else{
			   		console.log('Error');
			   	}
			   	 
			   }).catch(function (err) {
			   	  console.log(err);
			   });
	// body...
}


angular.module('chatFrontendApp')
  .controller('UserCtrl', function ($scope, userFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'ngMaterial',
      'ngMessages',
      'ui.router'
    ];
    $scope.users =[];
      $scope.user = {
      name: 'John Doe',
      email: '',
      phone: '',
      address: 'Mountain View, CA',
      donation: 19.99
    };
	$scope.formNewUserSubmit = function () {

			 var data ={
			 		Nombre: $scope.user.Nombre,
			 		Apellido: $scope.user.Apellido,
			 		Usuario: $scope.user.Usuario,
			 		Correo: $scope.user.Correo
			   		};
			   		userFactory.createUser(data).then(function (dataUser) {
					   	if (dataUser) {
					   		inciarSession($scope,dataUser,userFactory);
					   		$scope.nombreUsurioLogin = dataUser.Nombre;
					   		userLogin = dataUser;
					   		userFactory.listUser().then(function (dataUsers) {
				   			     $scope.users = dataUsers;
					   		}).catch(function (err) {
							   	  console.log(JSON.stringify(err));
							   });
							
						$scope.session = true;
						}
				    }).catch(function (err) {
				   	 	console.log(JSON.stringify(err));
				    });

};

//recepcion de sockets
	io.socket.on('userCreated', function (dataU){
		$scope.users.push(dataU);
	});
});

