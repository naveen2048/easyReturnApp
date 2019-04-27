import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'easyReturn App';

  constructor(private router:Router, private params:ActivatedRoute){ }

  ngOnInit(){
    // if(top !== self){
    //   this.router.navigate(['/home'])
    // }
    // else{
    //   this.router.navigate(['/shop', { shop: this.params.snapshot.paramMap.get('shop') }])
    // }
  }
}
