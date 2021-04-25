import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor() {}

  successMessage(message: string): any {
    toastr.success(message);
  }
  warningMessage(message: string) {
    toastr.warning(message);
  }
  errorMessage(message: string) {
    toastr.error(message);
  }
  cancel() {
    toastr.remove();
  }

  clear() {
    toastr.clear();
  }

  // Display a success toast, with a title

  // Display an error toast, with a title

  // Immediately remove current toasts without using animation

  // Remove current toasts using animation

  // Override global options
  // toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {timeOut: 5000})
}
