import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { 
    /*if(!localStorage.getItem('user')){
      this.router.navigateByUrl('/')
    }*/
  }

  ngOnInit(): void {
  }

}
