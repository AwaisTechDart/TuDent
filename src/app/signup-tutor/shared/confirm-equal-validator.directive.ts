import { Validator,  NG_VALIDATORS, AbstractControl} from '@angular/forms'
import { Directive, Input} from '@angular/core'

@Directive({
    selector : '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting : ConfirmEqualValidatorDirective,
        multi: true,
    }]
})
export class ConfirmEqualValidatorDirective implements Validator {
    @Input() appConfirmEqualValidator :string;
    validate (AC : AbstractControl) : {[key:string] : any} | null{
        const controlToCompare = AC.parent.get(this.appConfirmEqualValidator);  //get value from password field
        if(controlToCompare && controlToCompare.value !== AC.value)             //AC.value having Confirm pass value
        {
            return {'notEqual' : true};
        }
        else if (controlToCompare && controlToCompare.value === AC.value){
            return {'Equal':true};
        }
    }
}