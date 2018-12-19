'use strict';

/**
 * @ngdoc function
 * @name chatFrontendApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the chatFrontendApp
 */
angular.module('chatFrontendApp')
  .controller('ChatCtrl', function ($scope,chatFactory ) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'ngMaterial',
      'ngMessages',
      'ui.router'
    ];

	$scope.chatsPrivate=[];
$scope.formNewMsgGroup = function () {
			 var data = {
			 		msgGroup: $scope.msgGroup,
			 		idEm: userLogin.id,
			 		NombreEm: userLogin.Nombre
			   		};

			    chatFactory.createMsgChatGroup(data).then(function (dataMsg) {
			    	if (dataMsg) {
						chatFactory.listMsgGroup().then(function (dataChatGroup) {
			   			     $scope.chatGroups = dataChatGroup;
			   			     $scope.msgGroup ='';
				   		}).catch(function (err) {
						   	  console.log(JSON.stringify(err));
						   });
			    	}
			   	
				   		
			   }).catch(function (err) {
			   	  console.log(JSON.stringify(err));
			   })
			 
	},

	$scope.formNewMsgPrivate = function () {
			 var dataChatPrivado = {
			 		msg: $scope.msgChatPrivado,
			 		idEm: userLogin.id,
			 		NombreEm: userLogin.Nombre,
			 		idRcp: $scope.idRec,
			 		NombreRcp: $scope.habloCon
			   		};
			   		
			    chatFactory.createMsgChatPrivate(dataChatPrivado).then(function (dataMsgPrivate) {
			        $scope.msgChatPrivado = null;
					if (dataMsgPrivate) {
			       }
			    }).catch(function (err) {
			   	  console.log(JSON.stringify(err));
			   })
			 
	};
	
	$scope.chatPrivado = function(idRec,NombreRec){
		$scope.chatActive = true;
		$scope.idRec = idRec;
		$scope.habloCon = NombreRec;
		var idNot = '#ntf'+NombreRec;
		$(idNot).css("display", "none");
        $scope.chatsPrivate=[];
		var data = {
			idEm: userLogin.id,
			idRcp: idRec
		}
 			chatFactory.listMsgChatPrivateUser(data).then(function (dataChatPrivate) {
			   			    for (var i = 0; i < dataChatPrivate.length;i++) {
								$scope.chatsPrivate.push(dataChatPrivate[i]);
							}
				   		}).catch(function (err) {
						   	  console.log(JSON.stringify(err));
						   });

	}

io.socket.on('ChatGroupCreated', function (dataChat){
	if (dataChat.NombreEm === userLogin.Nombre) 
		$('#ChatGroup').append("<p style='text-align: right;'>"+dataChat.msgGroup+"</p>");
	else
		$('#ChatGroup').append("<p><strong>"+dataChat.NombreEm+": </strong>"+dataChat.msgGroup+"</p>");
	
});

io.socket.on('MsgPrivateCreated', function (dataChat){
	
	if (userLogin.Nombre ===dataChat.NombreRcp){
		var idNot = '#ntf'+dataChat.NombreEm;
        $(idNot).empty();
        $(idNot).append("1");
		$(idNot).css("display", "block");
	}
	$scope.chatsPrivate.push(dataChat);
});


function ActivarChatPrivate($scope,data, sessionService) {
	 sessionService.createSession(data).then(function (dataSession) {
			   	if(dataSession) {
			   	}else{
			   		alert('Error Session');
			   	}
			   	 
			   }).catch(function (err) {
			   	  console.log(err);
			   });
};


  });

