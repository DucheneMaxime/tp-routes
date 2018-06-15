import { Component, OnInit } from '@angular/core';
import { Formation } from '../entity/formation';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})

export class FormationsComponent implements OnInit {
  private _liste : Array<Formation>;

  constructor(private route: ActivatedRoute, private router: Router){}

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
    this.route.data.subscribe(data => console.log('Formations', data['formations']));

  }

}
