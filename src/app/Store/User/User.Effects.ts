import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/service/user.service";
import { beginRegister, beginLogin, loginSuccess, loginFailure, retrieveProfile } from "./User.action";
import { catchError, exhaustMap, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";
import { showalert } from "../Common/App.Action";
import {  Userinfo, } from "../Model/user.model";
// import { json } from "body-parser";

@Injectable()
export class UserEffect{
    auth_service: any;
    
    constructor(private action$: Actions, 
        private service: UserService, 
        private route: Router){ }

    _userregister=createEffect(()=>
         this.action$.pipe(
            ofType(beginRegister),
            exhaustMap((action) => {
                return this.service.UserRegistration(action.userdata).pipe(
                    map((response) => {     
                        console.log("res : ", response)                                       
                       this.route.navigate(['login'])
                        return showalert({ message: 'Registered Succesfully.', resulttype: 'pass' })
                    }),
                    catchError((_error) => of(showalert({ message: 'Registration Failed.'+ _error.message, resulttype:'fail' })))
                )
            })
        )
    )

//     _userlogin = createEffect(() =>
//     this.action$.pipe(
//         ofType(beginLogin),
//         switchMap((action) => {
//             return this.service.UserLogin(action.usercred).pipe(           
//                 switchMap((data: Userinfo[]) => {
//                     console.log("got asdfgh",data)
//                     const datadisp =Object.entries(data).map(([key, value]) => ({ [key]: value }));
//                     // console.log(datadisp,"and  :::", datadisp[0],":::  and  :::", datadisp[1])
//                     if (data) {
//                         console.log(datadisp.length,'DATTTTTTTT',datadisp[0]);
//                         console.log("token :>>", datadisp[1]["token"])
//                         const _userdata = datadisp[0];
//                         this.service.SetUserToLocalStorage(datadisp[0]);
                        
//                         document.cookie=`token=`+datadisp[1]["token"];                            
//                         this.route.navigate(['home'])
//                         return of( showalert({ message: 'Login success.', resulttype: 'pass' }))
//                     } else {
//                         // console.log("in else")
//                         return of(showalert({ message: 'Login Failed: Invalid credentials.', resulttype: 'fail' }))
//                     }
                    
//                 }),
//                 catchError((_error) => of(showalert({ message: 'Invalid Username / Password' , resulttype: 'fail' })))
//             )
//         })
//     )
// )


//********************************************* */

_userlogin = createEffect(() =>
this.action$.pipe(
    ofType(beginLogin),
    switchMap((action) => {
        // console.log("dcd");
        return this.service.UserLogin(action.usercred).pipe(     
            tap(response => {console.log('UserLogin response:', response)
            console.log("TOKEN : ", JSON.stringify(response)[0])
         } ), 
            map((response) => {
            var frombackend =Object.entries(response).map(([key, value]) => ({ [key]: value }));
                this.service.SetUserToLocalStorage(frombackend[0]);
                document.cookie=`token=`+frombackend[1]["token"];                        
                this.route.navigate(['/home']);
                return loginSuccess({token :String(frombackend[1]["token"])});
              }),            
            catchError(error => of(loginFailure({ error })))
          )
        }
        )
      )
    );
            

//             switchMap((data: Userinfo[]) => {
//                 console.log("got asdfgh",data)
//                 const datadisp =Object.entries(data).map(([key, value]) => ({ [key]: value }));
//                 // console.log(datadisp,"and  :::", datadisp[0],":::  and  :::", datadisp[1])
//                 if (data) {
//                     console.log(datadisp.length,'DATTTTTTTT',datadisp.length)
//                     const _userdata = datadisp[0];
//                         this.service.SetUserToLocalStorage(datadisp[0]);
//                         // console.log(_userdata)
//                         this.route.navigate(['home'])
//                         return of( showalert({ message: 'Login success.', resulttype: 'pass' }))
//                 } else {
//                     // console.log("in else")
//                     return of(showalert({ message: 'Login Failed: Invalid credentials.', resulttype: 'fail' }))
//                 }
                
//             }),
//             catchError((_error) => of(showalert({ message: 'Invalid Username / Password' , resulttype: 'fail' })))
//         )
//     })
// )
// )
/********************************** */




}
