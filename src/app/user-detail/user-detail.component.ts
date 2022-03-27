import { Component, IterableDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() {
    this.setMyClasses();

  }

  myclasses: any = {}
  setMyClasses() {
    this.myclasses = {
      wow: false,
      amazing: true,
    }
  }


  userdetail = {
    firstname: "Avicii",
    lastname: "Dahan",
    location: "safed",
    age: 24,
    title: "Anime - Men"
  }
  p1color = 'red'
  isSpecial: boolean = true

  p3style = {
    'font-size': '50px',
    'font-style': 'italic',
  };


  ngOnInit(): void {
  }

}
