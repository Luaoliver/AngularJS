angular.module('app').component('alertParaUsuario', {
    templateUrl :  'componentes/alert.html', //vai apontar para:
    bindings : { //variáveis que podem transacionar
        msg : '=', // nome da variável : two way data binding
        tipo : '='
    },
    controllerAs : 'vm',
    controller : function(){
        vm = this
        vm.tipoClasse = undefined

        vm.$onInit = function(){ //$onInit para que inicie junto a tela principal
            if(vm.tipo == 'sucesso'){
                vm.tipoClasse = 'alert alert-success'
            } else if (vm.tipo == 'erro'){
                vm.tipoClasse = 'alert alert-danger'
            }
        }

    }
})