import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from './services/common.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'easyReturn App';
  showSide = false;
  data:any;
  subscription:any;

  constructor(private router:Router,
    private params:ActivatedRoute,
    private commonService: CommonService){
      this.subscription = commonService.sideSheet().subscribe(d =>  {
        this.showSide = d.sideSheet;
        this.data = d.data;
      });
    }

  ngOnInit(){ }

  closeSheet() {
    this.commonService.toggleSideSheet(false);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
