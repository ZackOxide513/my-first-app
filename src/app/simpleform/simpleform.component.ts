import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  buttonState = false;
  userName = '';

  constructor() { 
    this.buttonState = false;
    this.userName = '';
  }

  updateButtonState() {
    if (this.userName.trim() === '') {
      return true;
    }
    else {
      return false;
    }
  }

  resetUserName () {
    this.userName = '';
  }



  ngOnInit(): void {
  }

}
