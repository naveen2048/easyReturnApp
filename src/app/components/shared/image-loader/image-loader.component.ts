import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-image-loader',
	templateUrl: './image-loader.component.html',
	styleUrls: [ './image-loader.component.scss' ]
})
export class ImageLoaderComponent implements OnInit {
  @Input() image: string = '../../../../assets/images/noimage.png';
  @Input() description: string = '';
	constructor() {}

	ngOnInit() {}
}
