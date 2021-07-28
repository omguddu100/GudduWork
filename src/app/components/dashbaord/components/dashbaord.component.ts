import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit {

  constructor() { }

  titleData=
    {
      level1:"Vendor Contracts",
      level2:"Fixed Price Contracts – English",
      icon:'fas fa-chevron-right',
      btn1:'Cancel',
      btn2:'Save',
    }
  

  ngOnInit(): void {
  }

}
