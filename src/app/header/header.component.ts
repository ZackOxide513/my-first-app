import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() AppSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  onSelect(app: string) {
    this.AppSelected.emit(app);
  }
}
