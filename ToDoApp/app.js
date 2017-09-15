var app = angular.module("ToDoApp", []);

app.controller("TodoController", function ($scope) {

    $scope.todos = [
        { "ad": "Yapilacaklar 1", "isDone": false },
        { "ad": "Yapilacaklar 2", "isDone": false },
        { "ad": "Yapilacaklar 3", "isDone": false },
        { "ad": "Yapilacaklar 4", "isDone": false }
    ];

    $scope.NewTodo = function(){
        $scope.todos.push({
            "ad": $scope.todo,
            "isDone": false
        });
        $scope.todo = "";
    }

    $scope.DeleteTodos = function () {
        $scope.todos = $scope.todos.filter(function (item) {
            return !item.isDone;
        });
    }
});