angular.module('app').component('alertParaUsuario', {
    templateUrl :  'componentes/alert.html', //vai apontar para:
    bindings : { //variáveis que podem transacionar
        msg : '=' // nome da variável : two way data binding
    },
    controllerAs : 'vm',
    controller : function(){
        vm = this
        vm.teste = 'blá blá'
    }
})