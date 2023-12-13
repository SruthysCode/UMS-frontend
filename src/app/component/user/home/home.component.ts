import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Userinfo } from 'src/app/Store/Model/user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
        userData: any;

        img="src/assets/images/done.jpeg"
           
        constructor(private userservice: UserService){}
    ngOnInit(): void {
      console.log("home INIT :::::::::::::::")
        this.userData= this.userservice.Getuserdatafromstorage();
    } 
    
}



