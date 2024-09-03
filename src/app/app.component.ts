import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParcialComponent } from "./components/parcial/parcial.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ParcialComponent]
})
export class AppComponent {
  title = 'parcial';
}
