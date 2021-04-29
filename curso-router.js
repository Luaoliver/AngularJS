angular.module('app').config(function($routeProvider){
    $routeProvider //injetou a dependência
        .when('/Cadastro/:idCli?', { //"?" indica que é opcional .quando receber a /chamada de rota vai redirecionar para:
            templateUrl: 'cadastro/cadastro.html',
            controller: 'CadastroController as vm'
        }) //abertura da primeira rota
        .otherwise({
            templateUrl: 'home/home.html',
            controller: 'HomeController as vm'
        }) //direcionamento de uma rota default
})