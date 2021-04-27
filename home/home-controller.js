angular.module("app").controller("HomeController", HomeController);
HomeController.$inject = ["$location"]; //inserir dependencias para navegação; $location é responsavel por fazer a navegação na tela.

function HomeController($location){
    vm = this;
}; // estrutura inicial