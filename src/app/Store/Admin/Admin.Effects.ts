import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AdminService } from "src/app/service/admin.service";
import { checkadminlogin, getusers, getuserssuccess } from "./Admin.action";
import { catchError, exhaustMap, map, mergeMap, of, switchMap } from "rxjs";
import { Admin, Adminname } from "../Model/admin.model";
import { showalert } from "../Common/App.Action";
import { UserService } from "src/app/service/user.service";
import { Userinfo } from "../Model/user.model";
import { Injectable } from "@angular/core";

@Injectable()
export class AdminEffect{
    AdminService: any;
    constructor(private action$ : Actions, private service: AdminService, private usrservice : UserService, private route: Router){}
    
    _adminlogin = createEffect(()=>
    this.action$.pipe(                
        ofType(checkadminlogin),        
        switchMap((action)=>{
            // console.log("in action effects switch")
            return this.service.AdminLogin(action.admin).pipe(
                switchMap((data : Adminname)=>{
                    if(data){
                        // console.log(data," data from backend")                        
                        var fromback =Object.entries(data).map(([key, value]) => ({ [key]: value }));
                        this.usrservice.SetUserToLocalStorage(fromback[0]);
                        document.cookie=`token=`+fromback[1]["token"];                        
                        this.route.navigate(['adminhome']);
                 
                        return of( showalert({ message: 'Admin Login success.', resulttype: 'pass' }))
                    }
                    else {
                        // console.log("in else")
                        return of(showalert({ message: 'Login Failed: Invalid credentials.', resulttype: 'fail' }))
                    }
                }),
                catchError((_error) => of(showalert({ message: 'Login Failed due to :.' + _error.message, resulttype: 'fail' })))
            )
        })
      )
    )


    // _adminlogin = createEffect(()=>
    // this.action$.pipe(                
    //     ofType(checkadminlogin),        
    //     switchMap((action)=>{
    //         // console.log("in action effects switch")
    //         return this.service.AdminLogin(action.admin).pipe(
    //             mergeMap((data : Adminname)=>{
    //                 if(data){
    //                     // console.log(data," data from backend")                        
    //                     var fromback =Object.entries(data).map(([key, value]) => ({ [key]: value }));
    //                     this.usrservice.SetUserToLocalStorage(fromback[0]);
    //                     var users=this.service.getAllUsers()
    //                     this.usrservice.SetUserToLocalStorage(users);
    //                     document.cookie=`token=`+fromback[1]["token"];                        
    //                     this.route.navigate(['adminhome']);
                 
    //                     return of( showalert({ message: 'Admin Login success.', resulttype: 'pass' }))
    //                 }
    //                 else {
    //                     // console.log("in else")
    //                     return of(showalert({ message: 'Login Failed: Invalid credentials.', resulttype: 'fail' }))
    //                 }
    //             }),
    //             catchError((_error) => of(showalert({ message: 'Login Failed due to :.' + _error.message, resulttype: 'fail' })))
    //         )
    //     })
    //   )
    // )

    //*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    _getallusers = createEffect(() =>
this.action$.pipe(
    
    ofType(getusers),
    
    exhaustMap((action) => {
        console.log("INNNNNNNNN");
        return this.service.GetAllUsers().pipe(
            map((data) => {
                console.log("FFFFFFFfrom backend :", data)
                
                return getuserssuccess({ userlist: data })
            }),
            catchError((_error) => of(showalert({ message: 'Failed to fetch user list', resulttype: 'fail' })))
        )
    })
)
)

}