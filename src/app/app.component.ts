import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'easyReturn App';
  showSide = false;
  data:any;

  constructor(private router:Router,
    private params:ActivatedRoute,
    private commonService: CommonService){
      commonService.sideSheet().subscribe(d =>  {
        this.showSide = d.sideSheet;
        this.data = d.data;
        console.log(this.data);
      });
    }


  ngOnInit(){ }

  closeSheet() {
    this.commonService.toggleSideSheet(false);
  }
}
