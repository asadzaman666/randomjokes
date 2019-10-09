import { Component, OnInit } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';
import { Jokes } from '../../interfaces/jokes';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  randomJoke: Jokes;

  constructor( private jokesService: JokesService ) { }

  ngOnInit() {
    this.jokesService.getRandomJokes().subscribe((data: Jokes) => {
      this.randomJoke = data;
    });

    setInterval( () => {
      this.jokesService.getRandomJokes().subscribe((data: Jokes) => {
        this.randomJoke = data;
      });
    }, 15000);

  }

}
