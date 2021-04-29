angular.module('app').controller('CadastroController', CadastroController)
CadastroController.$inject = ['$location', 'CursoService', '$routeParams'] //inserir dependencias para navegação; $location é responsavel por fazer a navegação na tela.

    function CadastroController($location, CursoService, $routeParams){
        vm = this;
        vm.teste = 'Cadastro'
        vm.cliente = {}
        vm.idCli = undefined

        if($routeParams.idCli){
            vm.idCli = $routeParams.idCli
            alert(vm.idCli)
        }

        vm.navegar = function(){
            $location.path('/') //.path diz a rota, o / direciona pra home, página default
        }

        vm.cadastrar = function(){
            CursoService.exec_POST(vm.cliente).then(function(response){
                if(response){
                    vm.cliente = response
                }
            })
            vm.navegar('/')
        }

        vm.limpar = function(){
            vm.cliente = {}
        }
    } // estrutura inicial