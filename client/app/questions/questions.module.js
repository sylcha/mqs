(function() {
    'use strict';
    angular
        .module('mqs.questions', [])
        .controller('QuestionsProvider', function QuestionsProvider($scope) {
            $scope.questions = [
                {
                    text: "L'image de $2$ par la fonction $f$, définie sur $\\mathbb{R}$ par $f(x)=-3x^2+5x-1$ est :",
                    answers: ["$-22$", "$-3$", "Aucune des réponses"],
                    author: "sylcha"
                },
                {
                    text: "Un antécédent de $-5$ par la fonction $f$, définie sur $\\mathbb{R}$ par $f(x)=4x-3$ est :",
                    answers: ["$2$", "$0,5$", "-0,5", "-23", "Aucune des réponses"],
                    author: "sylcha"
                },
                {
                    text: "On considère la fonction $g$ définie sur $\\mathbb{R}^{*}$ par $g(x)=\\frac{1}{x}$. L'image de $4$ par $g$ est :",
                    answers: ["$0,25$", "$-2$", "$-4$", "$-0,25$", "Aucune des réponses"],
                    author: "sylcha"
                }
            ]
        });
})();
