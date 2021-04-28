angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ["$location"]; //inserir dependencias para navegação; $location é responsavel por fazer a navegação na tela.

function HomeController($location){
    vm = this;
    vm.teste = 'Home 2'

    vm.navegar = function(){
        $location.path('cadastro') //.path diz a rota
    }

    vm.cadastro = function(){
        $location.path('cadastro')
    }
    
    vm.home = function(){
        $location.path('/')
    }

    
} // estrutura inicial