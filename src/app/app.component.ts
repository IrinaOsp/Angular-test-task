import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconGeneratorComponent } from './icon-generator/icon-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-app';
}
