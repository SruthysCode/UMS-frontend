import { Component } from '@angular/core';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Users } from 'src/app/Store/Model/user.model';
import { beginRegister } from 'src/app/Store/User/User.action';
import { showalert } from 'src/app/Store/Common/App.Action';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder: FormBuilder, private store: Store ) {
    
  }

  registerform= this.builder.group({
    username : this.builder.control('', Validators.compose([Validators.required,Validators.minLength(5)])),
    password : this.builder.control('', Validators.required),
    confirmpassword : this.builder.control('', Validators.required),
    name : this.builder.control('', Validators.required),
    email : this.builder.control('', Validators.compose([Validators.required,Validators.email])),
    phone : this.builder.control('', Validators.required),
    gender : this.builder.control('MALE'),
    
  })

  Proceedregister(){
     if(this.registerform.valid){
      
        if(this.registerform.value.password===this.registerform.value.confirmpassword){        
           const _userobj:Users={
            username : this.registerform.value.username as string,
            password : this.registerform.value.password as string,
            name : this.registerform.value.name as string,
            email : this.registerform.value.email as string,
            mobile : this.registerform.value.phone as string,
            gender : this.registerform.value.gender as string,
            status : true
          }
          console.log('USER : ');
          console.log(_userobj);                
          this.store.dispatch(beginRegister({userdata:_userobj}))
        }
        else
        {
          this.store.dispatch(showalert({message: 'Password Mismatch', resulttype: 'fail'}))
        }
      }
    }
   }

