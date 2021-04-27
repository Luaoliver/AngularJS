angular.module("app").controller("CadastroController", CadastroController);
CadastroController.$inject = ["$location"]; //inserir dependencias para navegação; $location é responsavel por fazer a navegação na tela.

function CadastroController($location){
    vm = this;
}; // estrutura inicial