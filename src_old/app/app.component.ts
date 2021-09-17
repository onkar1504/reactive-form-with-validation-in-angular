import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 

{
  constructor(public fobj  :FormBuilder)
  {

  }

  loginform = this.fobj.group
  (
    {
      //add validators
        username :['',Validators.required],
        password : ['',Validators.required],
    }
  );


  
 
}
  