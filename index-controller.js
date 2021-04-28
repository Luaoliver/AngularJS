angular.module('app').controller('MenuController', MenuController)
MenuController.$inject = ['$location'] //inserir dependencias para navegação; $location é responsavel por fazer a navegação na tela.

    function MenuController($location){
        vm = this;

        vm.cadastro = function(){
            $location.path('cadastro')
        }
        
        vm.home = function(){
            $location.path('/')
        }
    }