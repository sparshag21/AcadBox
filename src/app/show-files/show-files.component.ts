import { Component, OnInit, Input } from '@angular/core';
import { FILES } from '../mock-files';
import { File } from '../file';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-show-files',
  templateUrl: './show-files.component.html',
  styleUrls: ['./show-files.component.css']
})

export class ShowFilesComponent implements OnInit {
  // title="Show-Files";
  @Input() file: File;
  url: string = '{{file.link}}';
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
