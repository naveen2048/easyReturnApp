import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private toaster: ToastrService) {}

    showInfo(message){
        this.toaster.info(message, 'Info');
    }

    showError(message) {
        this.toaster.error(message, 'Error');
    }

    showSuccess(message){
        this.toaster.success(message, 'Success');
    }

}
