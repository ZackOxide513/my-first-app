import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedApp: string = 'recipe';

  navigateApp(name: string) {
    this.loadedApp = name;
  }
}
