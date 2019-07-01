import { Component } from '@angular/core';
import { FILES } from './mock-files';
import { File } from './file';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  files = FILES;
}
