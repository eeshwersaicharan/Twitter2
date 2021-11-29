import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  title:string="Twitter Welcomes You"

  constructor() { }

  ngOnInit(): void {
  }

}
