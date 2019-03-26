import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ChangePasswordValidators {
    static isOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
                if (control.value !== '1234') {
                    resolve({ isOldPassword: true });
                } else {
                    resolve(null);
                }
        });
    }

    static isConfirmedPassword(control: AbstractControl) {
        const newPassword = control.get('newpassword');
        const confirmPassword = control.get('confirmpassword');
        console.log(newPassword);
        if (newPassword.value !== confirmPassword.value) {
            return {isConfirmedPassword: true};
        }
        return null;
    }
}
