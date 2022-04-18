import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  public sdata:Student[]=[
    {id:1, name:'User1'},
    {id:2, name:'User2'},
    {id:3, name:'User3'},
    {id:4, name:'User4'}
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
