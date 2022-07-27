import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup; // like in html [formGroup] name

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = formBuilder.group({ // building form by FormBuilder
    email: new FormControl(),  // creating a group of form elements, same like in template formControlName = "email"
    status: new FormControl(),
    role: new FormControl(),
    content: new FormControl(),
    terms: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  postData(){
    console.log('FormGroup object ' + this.checkoutForm);
    console.log('values ' + this.checkoutForm.value); // can get values, valides etc...
    console.log('only email ' + this.checkoutForm.value.email);
  }

}
