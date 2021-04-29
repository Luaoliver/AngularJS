angular.module('app').controller('CadastroController', CadastroController)
CadastroController.$inject = ['$location', 'CursoService'] //inserir dependencias para navegação; $location é responsavel por fazer a navegação na tela.

    function CadastroController($location, CursoService){
        vm = this;
        vm.teste = 'Cadastro'
        vm.cliente = {}

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