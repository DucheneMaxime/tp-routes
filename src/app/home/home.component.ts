import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_DETAIL } from '../consts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  idDetail: number=1;

  constructor(private router: Router) { }

  navigateToDetail() {
    this.router.navigate([PATH_DETAIL, this.idDetail]);
  }

  ngOnInit() {
  }

}
