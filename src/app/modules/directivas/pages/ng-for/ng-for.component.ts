import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  stores = [
    {
      "id": "1",
      "nombre": "Josue",
      "carnet": "CC17081",
    },
    {
      "id": "2",
      "nombre": "Daniel",
      "carnet": "CC17081",
    },
    {
      "id": "3",
      "nombre": "David",
      "carnet": "CR17029",
    },
    {
      "id": "4",
      "nombre": "Brayan",
      "carnet": "PP16009",
    },
    {
      "id": "5",
      "nombre": "Edwin",
      "carnet": "AA16021",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
