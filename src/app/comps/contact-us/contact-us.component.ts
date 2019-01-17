import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name: string;
  email: string;
  msg: string;


  constructor() { }

  ngOnInit() {
      this.name = 'T';
      this.email = 't@hello.com';
      this.msg = 'Hello world';

    }
    }

