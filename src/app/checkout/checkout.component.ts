import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup; // like in html [formGroup] name

  constructor(private formBuilder: FormBuilder) {
    /*
    this.checkoutForm = formBuilder.group({ // building form by FormBuilder
    email: new FormControl(),  // creating a group of form elements, same like in template formControlName = "email"
    status: new FormControl(),
    role: new FormControl(),
    content: new FormControl(),
    terms: new FormControl()
    })*/

    //Validation example
    //in tamplate do deactive post button with: [disabled]="!checkoutForm.valid"
    //if not all elements in form is filled - form is invalid and button not active
    this.checkoutForm = formBuilder.group({ // building form by FormBuilder
      email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(30)]],  
      status: ['', Validators.required],
      role: ['', Validators.required],
      content: ['', Validators.required],
      terms: ['', Validators.requiredTrue] //for checkbox requiredTrue
      })
  }

  ngOnInit(): void {
  }

  postData(){
    console.log(this.checkoutForm);
    console.log(this.checkoutForm.value); // can get values, valides etc...
    console.log('only email ' + this.checkoutForm.value.email);
  }

}
