import { Component, OnInit } from '@angular/core';
import { Formation } from '../entity/formation';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})

export class FormationsComponent implements OnInit {
  private _liste : Array<Formation>;

  constructor(){}

  public get liste() : Array<Formation> {
    return this._liste;
  }

  public set liste(v : Array<Formation>) {
    this._liste = v;
  }
  
  ngOnInit(){
    this.liste = new Array<Formation>();
    this.liste.push(new Formation("Spring"));
    this.liste.push(new Formation("Angular"));
    this.liste.push(new Formation("Java"));
  }

}
