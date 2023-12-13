import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { checkadminlogin } from 'src/app/Store/Admin/Admin.action';
import { Admin } from 'src/app/Store/Model/admin.model';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  
  constructor(private builder : FormBuilder, private store: Store){}

  adminloginform=this.builder.group({    
      usernameAdmin :this.builder.control('', Validators.compose([Validators.required])),
      passwordAdmin : this.builder.control('', Validators.required),  
  })

  Adminlogin(){
    console.log("From Admin login");
    if(this.adminloginform.valid)
    {     
      console.log("Admin form valid")
      const adminobj: Admin={
        username: this.adminloginform.value.usernameAdmin as string,
        password: this.adminloginform.value.passwordAdmin as string,

      };
      console.log('cred:  ', adminobj.username, adminobj.password)
      this.store.dispatch(checkadminlogin({admin : adminobj}))
    }    
  }
  
  resetlog(){
    console.log("REser or cancel logging in");
    this.adminloginform.reset();
    
  }
}
