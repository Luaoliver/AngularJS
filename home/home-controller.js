angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location', 'CursoService']; //inserir dependencias para navegação; $location é responsavel por fazer a navegação na tela.

function HomeController($location, CursoService){
    vm = this;
    vm.texto = 'Home'
    vm.clientes = ''

    vm.navegar = function(){
        $location.path('Cadastro') //.path diz a rota
    }

    vm.listarClientes = function(){
        CursoService.exec_GET().then(function(response){
            if(response){
                console.log(response)
            }
        })
    }

} // estrutura inicial