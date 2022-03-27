import { Component, IterableDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }

userdetail = {
  firstname : "Avicii",
  lastname : "Dahan",
  location : "safed",
  age: 24
}
p1color= 'red'
isSpecial:boolean = false

p3style={
  'font-size': '50px',
  'font-style': 'italic',
};

  ngOnInit(): void {
  }

}
