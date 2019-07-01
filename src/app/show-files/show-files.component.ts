import { Component, OnInit, Input } from '@angular/core';
import { FILES } from '../mock-files';
import { File } from '../file';

@Component({
  selector: 'app-show-files',
  templateUrl: './show-files.component.html',
  styleUrls: ['./show-files.component.css']
})

export class ShowFilesComponent implements OnInit {
  // title="Show-Files";
  @Input() file: File;

  constructor() { }

  ngOnInit() { }

}
