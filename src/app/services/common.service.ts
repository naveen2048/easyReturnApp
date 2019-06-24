import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { sharedModel } from '../models/common.model';

@Injectable({
	providedIn: 'root'
})
export class CommonService {
	data: any;
	_sideSheet = new Subject<sharedModel>();
	constructor() {}

	sideSheet(): Observable<sharedModel> {
		return this._sideSheet.asObservable();
	}

	toggleSideSheet(show: boolean, d?: any) {
    var x = { sideSheet: show, data: d }
		this._sideSheet.next(x);
	}
}
