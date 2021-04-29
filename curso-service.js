angular.module('app').factory('CursoService', CursoService)

CursoService.$inject = ['$http']

    function CursoService($http){
        var service = {
            exec_GET : function(){
                return $http.get('http://localhost:3000/Clientes').then(tratarResposta, tratarErro)
            }, // then(duas funções de callback)
            exec_POST : function(cliente){
                return $http.post('http://localhost:3000/Clientes', cliente).then(tratarResposta, tratarErro)
            }
        }

        function tratarResposta(response){
            return response.data
        } //data é um padrão web que captura dados

        function tratarErro(error){
            return error.data
        }

        return service
    }