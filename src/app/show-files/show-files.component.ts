import { Component, OnInit, Input } from '@angular/core';
import { File } from '../file';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-show-files',
  templateUrl: './show-files.component.html',
  styleUrls: ['./show-files.component.css']
})

export class ShowFilesComponent implements OnInit {
  @Input() files: File;
  iurl: any;
  max = 5;
  currentRate = 0;
  user : any;
  constructor(public sanitizer: DomSanitizer, private userDataService : UserDataService) {
    userDataService.userDocument$.subscribe( (user) => {
      this.user = user;
      try{
        this.currentRate = this.files.raters[this.user.uid];
      }
      catch{
        this.currentRate = 0;
      }
    })
  }

  ngOnInit() {
    this.iurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.files.link);
  }

  openFull(){
    window.open(this.iurl.changingThisBreaksApplicationSecurity);
  }

  updateRating(){
    this.userDataService.updateRating(this.files, this.currentRate);
  }
}
