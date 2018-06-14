import { Component, OnInit } from '@angular/core';
import { Connaissance } from '../entity/connaissance';

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {
  private _liste : Array<Connaissance>;

  public get liste() : Array<Connaissance> 
  {
    return this._liste;
  }

  public set liste(v : Array<Connaissance>)
   
  {
    this._liste = v;
  }
  
  constructor() { }

  ngOnInit() {
    this.liste = new Array<Connaissance>();
    this.liste.push(new Connaissance("Connaissance 1"));
    this.liste.push(new Connaissance("Connaissance 2"));
    this.liste.push(new Connaissance("Connaissance 3"));
  }

}
