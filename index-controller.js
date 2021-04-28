angular.module('app').controller('MenuController', MenuController)
MenuController.$inject = ['$location'] //inserir dependencias para navegação; $location é responsavel por fazer a navegação na tela.

    function MenuController($location){
        vm = this;

        vm.itensMenu = [
            {
                titulo: 'Home',
                classe: 'nav-link'
            },
            {
                titulo: 'Cadastro',
                classe: 'nav-link'
            }
        ]

        vm.menu = function(rota, array){
            angular.forEach(array, function(item){
                if(item.titulo == rota){
                    item.classe = 'nav-link active'
                } else {
                    item.classe = 'nav-link'
                }
            })
            $location.path(rota)
        }

    }