import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  buttonState = false;
  userName = '';
  displayState = false;
  logs = [];

  constructor() { 
    this.buttonState = false;
    this.userName = '';
    this.displayState = false;
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

  onClickToggle() {
    this.displayState = !this.displayState;
    this.logs.push(Date());
  }

  ngOnInit(): void {
  }
}
