import { Component, OnInit, Input } from '@angular/core';
import { File } from '../file';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser"; 

@Component({
  selector: 'app-show-files',
  templateUrl: './show-files.component.html',
  styleUrls: ['./show-files.component.css']
})
export class ShowFilesComponent implements OnInit {
  // title="Show-Files";
  @Input() files : File;
  iurl : any;
  constructor(public sanitizer : DomSanitizer) {
    this.iurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.files.link);
   }

  ngOnInit(){}

}