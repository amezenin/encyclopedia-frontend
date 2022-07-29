import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'

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
      terms: ['', Validators.requiredTrue], //for checkbox requiredTrue
      items: this.formBuilder.array([]), // many items
      /*item: [{   //one item
        name: [''],
        desc: ['']
      }]*/
    })

  }


  //many items, dynamical
  get items() : FormArray {
    return this.checkoutForm.get("items") as FormArray
  }
 
  newItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      desc: '',
    })
  }
 
  addItem() {
    this.items.push(this.newItem());
  }
 
  removeItem(i:number) {
    this.items.removeAt(i);
  }




  ngOnInit(): void {

    /*formArray*/
 
    /*statusChanges - observable. Need to subscribe.
    important for controll form, easy find errors */
    //by element
    this.checkoutForm.get('email')?.statusChanges.subscribe({
      next: (data:any) => {
        this.valueChangedTracked = data;
      }
    });

    //all form
    this.checkoutForm.statusChanges.subscribe({
      next: formState => {
        console.log(formState);
      }
    });

    /* ValueChanges. Need to subscribe. */
    //can show all changes.  
    this.checkoutForm.valueChanges.subscribe({
      next: data => {
        console.log(data);
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
    console.log(this.checkoutForm.get('items')?.value); //get all items
    const values = this.checkoutForm.get('items')?.value;
    console.log(values[0].desc); //first item description
    this.checkoutForm.reset();
  }

  resetForm(){
    this.checkoutForm.reset();// can use after post form data
  }

  

}
