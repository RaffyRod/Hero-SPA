import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../servicios/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes: any = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
               // tslint:disable-next-line: variable-name
               private _heroesService: HeroesService) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      // tslint:disable-next-line: no-string-literal
     this.termino = params['termino']; 
     this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes );
  
      });
  }

}
