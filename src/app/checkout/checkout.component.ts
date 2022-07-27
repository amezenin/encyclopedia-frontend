import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup; // like in html [formGroup] name
  valueChangedTracked = '';

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
      email: ['',  [  Validators.required, 
                      Validators.email, 
                      Validators.minLength(5), 
                      Validators.maxLength(30)]],  
      status: ['', Validators.required],
      role: ['', Validators.required],
      content: ['', Validators.required],
      terms: ['', Validators.requiredTrue] //for checkbox requiredTrue
      })
  }

  ngOnInit(): void {

    /* ValueChanges. Need to subscribe. */
    //can show all changes
    this.checkoutForm.valueChanges.subscribe({
      next: data => {
        console.log(data);
        this.valueChangedTracked = data;
      }
    });

    /*//Show changes in one element of form
    this.checkoutForm.get('content')?.valueChanges.subscribe({
      next: data => {
        this.valueChangedTracked = data;
      },
      error: error => console.log(error)
    });*/


    /*setValue() - we need fill all elements of form (using in edit part)
      patchValue() - we can leave some element of form empty
    */
    //have to set all elements of form
    /*
    this.checkoutForm.setValue({
      email: 'test@test.com',
      status: true,
      role: 'ROLE_USER',
      content: 'example text',
      terms: true
    });
    */
    //some fields can be empty
    /*
    this.checkoutForm.patchValue({
      email: 'test@test.com',
      status: true,
      content: 'example text'
    });*/
  }

  postData(){
    console.log(this.checkoutForm);
    console.log(this.checkoutForm.value); // can get values, valides etc...
    console.log('only email ' + this.checkoutForm.value.email);
    this.checkoutForm.reset();
  }

  resetForm(){
    this.checkoutForm.reset();// can use after post form data
  }

}
