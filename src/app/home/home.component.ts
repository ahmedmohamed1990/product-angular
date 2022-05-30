import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  peopleByCountry: any[] = [
    {
      country: 'UK',
      people: [{ name: 'Douglas Pace' }, { name: 'Mcleod Mueller' }],
    },
    {
      country: 'US',
      people: [
        { name: 'Day Meyers' },
        { name: 'Aguirre Ellis' },
        { name: 'Cook Tyson' },
      ],
    },
    {
      country: 'MARS',
      people: [{ name: 'Douglas Pace' }, { name: 'Mcleod Mueller' }],
    },
  ];
  people: any[] = [
    { "name": "Douglas Pace", "age": 35, "country": 'MARS' },
    { "name": "Mcleod Mueller", "age": 32, "country": 'USA' },
    { "name": "Day Meyers", "age": 21, "country": 'UK' },
    { "name": "Aguirre Ellis", "age": 34, "country": 'UK' },
    { "name": "Cook Tyson", "age": 32, "country": 'USA' }];

  constructor() { }

  ngOnInit(): void {
  }

}

