import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss']
})
export class ImageLoaderComponent implements OnInit {
  imagePath = '';

  @Input() description = '';
  constructor() {}

  ngOnInit() {}

  @Input('image')
  set image(path: string) {
    let x = '' + path[0];
    if (x.indexOf('https') === -1) {
      this.imagePath = '../../../../assets/images/noimage.png';
      return;
    }
    this.imagePath = x;
  }
}
