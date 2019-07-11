import { Component, OnInit, Input } from '@angular/core';
import { File } from '../file';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-files',
  templateUrl: './show-files.component.html',
  styleUrls: ['./show-files.component.css']
})

export class ShowFilesComponent implements OnInit {
  @Input() files: File;
  iurl: any;
  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.iurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.files.link);
  }

  openFull(){
    window.open(this.iurl);
  }
}
