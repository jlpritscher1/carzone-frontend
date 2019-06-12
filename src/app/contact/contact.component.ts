import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name:string;
  email:string;
  message:string;

  constructor() { }

  submitContact(){
    console.log('Name: ' + this.name, '\nEmail: ' + this.email, '\nMessage: ' + this.message)
  }

  ngOnInit() {
  }



}
