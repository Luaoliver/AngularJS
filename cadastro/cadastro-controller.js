angular.module('app').controller('CadastroController', CadastroController)
CadastroController.$inject = ['$location', 'CursoService', '$routeParams'] //inserir dependencias para navegação; $location é responsavel por fazer a navegação na tela.

    function CadastroController($location, CursoService, $routeParams){
        vm = this;
        vm.teste = 'Cadastro'
        vm.cliente = {}
        vm.idCli = undefined
        vm.textoBotao = 'Cadastrar'

        if($routeParams.idCli){
            vm.idCli = $routeParams.idCli
            buscarId(vm.idCli)
            vm.textoBotao = 'Editar'
        }

        vm.navegar = function(){
            $location.path('/') //.path diz a rota, o / direciona pra home, página default
        }

        vm.cadastrar = function(){
            if(vm.textoBotao == 'Cadastrar'){
                CursoService.exec_POST(vm.cliente).then(function(response){
                    if(response){
                        vm.cliente = response
                    }
                })
            } else if(vm.textoBotao == 'Editar'){
                CursoService.exec_PUT(vm.cliente).then(function(response){
                    if(response){
                        vm.cliente = response
                    }
                })
            }
            
            vm.navegar('/')
        }

        function buscarId(id){
            CursoService.exec_GET_ID(id).then(function(response){
                if(response){
                    vm.cliente = response
                }
            })
        }

        /** buscarId = (id) =>{
            CursoService.exec_GET_ID(id).then(function(response){
                if(response){
                    vm.cliente = response
                }
            })
        } */

        vm.limpar = function(){
            vm.cliente = {}
        }
    } // estrutura inicial