var Controllers;
(function (Controllers) {
    var MovieListController = (function () {
        function MovieListController() {
            this.movies = [
                { id: 1, title: "Batman", director: "Nolan" },
                { id: 2, title: "Star Wars", director: "Lucas" },
                { id: 3, title: "Jurassic Park", director: "Lucas" }
            ];
        }
        return MovieListController;
    }());
    angular.module("MovieApp").controller("MovieListController", MovieListController);
})(Controllers || (Controllers = {}));
