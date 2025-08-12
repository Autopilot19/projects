import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeqderComponent } from "./heqder/heqder.component";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeqderComponent,RouterModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'first-app';
}
