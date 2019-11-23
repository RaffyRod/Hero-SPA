import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// tslint:disable-next-line: no-unused-expression
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe:any = {};

  constructor( private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService 
              ) {
    this.activatedRoute.params.subscribe( params =>{
     // console.log( params['id'] );
      this.heroe = this._heroesService.getHeroe( params['id'] );
    });
   }
}
