import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private _activatedRoute: ActivatedRoute, private heroesService: HeroesService ) { 
    this._activatedRoute.params.subscribe( params => {
      console.log( params['id'] );
      this.heroe = this.heroesService.getHeroe( params['id'] ) 
    } )
  }

  ngOnInit(): void {
   
  }

}
