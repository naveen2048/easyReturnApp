import { Subject } from 'rxjs';

export class AppConstants {
	static refundMethods = [
		{ 'text': 'Refund', 'value': 'Refund' },
		{ 'text': 'Exchange', 'value': 'Exchange' },
		{ 'text': 'Bank Transfer', 'value': 'Bank' }
	];
}

export class sharedModel {
  sideSheet: boolean = false;
  data:any = {};
}
