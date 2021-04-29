angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location', 'CursoService']; //inserir dependencias para navegação; $location é responsavel por fazer a navegação na tela.

function HomeController($location, CursoService){
    vm = this;
    vm.texto = 'Home'
    vm.clientes = ''
    vm.error = false

    vm.init = function(){
        vm.listarClientes()
    }

    vm.navegar = function(){
        $location.path('Cadastro') //.path diz a rota
    }

    vm.listarClientes = function(){
        CursoService.exec_GET().then(function(response){
            if(response){
                vm.clientes = response
            } else {
                vm.error = true
            }
        })
    }

    vm.excluir = function(id){
        CursoService.exec_DEL(id).then(function(response){
            if(response){
                //mensagem resposta
            }
        })
    }

    vm.editar = function(id){
        $location.path('Cadastro/' + id)
    }

} // estrutura inicial