import { Directive, Attribute, forwardRef, Host } from '@angular/core';
import {NG_VALIDATORS, FormControl, NgForm} from '@angular/forms';


// Check two forms
function validateMatch(formDir, matchControl) {
    return (c: FormControl) => {
        var form = formDir.form;
        var control = form.find(matchControl);
        if (control !== undefined && control !== null && control.touched) {
            if (control.value !== c.value) {
                return { 'invalidMatch': true };
            }
        }
        return null;
    };
}

@Directive({
    selector: '[match-field]',
    providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => FormEqual), multi: true }]
})

export class FormEqual {

    validator: Function;

    constructor(
        @Host() public formDir: NgForm,
        @Attribute('match-field') public matchControl: string) {
        this.validator = validateMatch(this.formDir, this.matchControl);
    }

    validate(c: FormControl) {
        return this.validator(c);
    }



};

