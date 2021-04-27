angular.module("app").config(function($routerProvider){
    $routerProvider //injetou a dependência
        .when('/cadastro', { // .quando receber a /chamada de rota vai redirecionar para
            templateUrl: '/cadastro/cadastro.html',
            controller: 'CadastroController as vm'
        }) //abertura da primeira rota
        .otherwise({
            templateUrl: '/home/home.html',
            controller: 'HomeController as vm'
        }) //direcionamento de uma rota default
})