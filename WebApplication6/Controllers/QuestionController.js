var myApp = angular.module("myApp");
myApp.controller("QuestionController",
    function($scope) {

        $scope.sortparam = "rate";
        $scope.question = {
            text: "Who is the best player?",
            author: "Kirill Nekrevich",
            date: "21/09/2018",
            answers: [
                {
                    text: "Cristiano Ronaldo",
                    author: "Alexey Apanovich",
                    date: "21/09/2018",
                    rate: 1
                }, {
                    text: "Leonel Messi",
                    author: "Vladislav Gusar",
                    date: "21/09/2018",
                    rate: 2
                }, {
                    text: "Eden Hazard!!!!",
                    author: "Kirill Nekrevich",
                    date: "21/09/2018",
                    rate: -12
                }
            ]
        };
        $scope.voteUp = function(answer) {
            answer.rate++;
        };
        $scope.voteDown = function(answer) {
            answer.rate--;
        };
    });