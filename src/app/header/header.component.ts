import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
imgheader?:string;
  constructor() { }

  ngOnInit(): void {
  this.imgheader="../../assets/img/1.jpg";
  }

}
