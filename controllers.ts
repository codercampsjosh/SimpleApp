namespace Controllers {
  class MovieListController {
    public movies;

    constructor() {
      this.movies = [
        {id: 1, title: `Batman`, director: `Nolan`},
        {id: 2, title: `Star Wars`, director: `Lucas`},
        {id: 3, title: `Jurassic Park`, director: `Lucas`}
      ]
    }
  }
  angular.module(`MovieApp`).controller(`MovieListController`, MovieListController);
}
