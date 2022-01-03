import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
// criar a propriedade com a expressao e uso da diretiva *ngFor
subtitle: string = "Top 5 movies!"

// criando o conjunto de dados
movies: Movie[] = [
    {
      title:'O poderoso Chefão', 
      direction:'Francis Ford Coppola', 
      cast:'Marlon Brando, Al Pacino, James Caan', 
      releaseYear:'10 de setembro, 1972'
    },

    {
      title:'Um Estranho no Ninho', 
      direction:'Milos Forman', 
      cast:'Jack Nicholson, Louise Fletcher, Michael Berryman ', 
      releaseYear:'26 de maio, 1976'
    },

    {
      title:'A lista de Schindler', 
      direction:'Steven Spielberg', 
      cast:'Liam Neeson, Ralph Fiennes, Ben Kingsley', 
      releaseYear:'11 de março, 1993'
    },

    {
      title:'Forrest Gump - O contador de histórias', 
      direction:'Robert Zemeckis', 
      cast:'Tom Hanks, Robin Wright, Gary Sinise', 
      releaseYear:'7 de dezembro, 1994'
    },

    {
      title:'Laranja Mecânica', 
      direction:'Stanley Kubrik', 
      cast:'Malcolm McDowell, Patrick Magee, Michael Bates ', 
      releaseYear:'04 de setembro, 1971'
    },
  ]
}

// criando o model domain - para dar "formato" ao dataset
class Movie {
  title!: string
  direction!: string
  cast!: string
  releaseYear!: string
}