import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin, Adminname, Search } from '../Store/Model/admin.model';
import { Userinfo, Users } from '../Store/Model/user.model';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  APIBaseUrlJSON= 'http://localhost:3000/user'
  APIBaseUrl='http://localhost:5000/admin';

  AdminLogin(admin: Admin): Observable<Adminname>{
    console.log("in admin logooin ")
    return this.http.post<Adminname>(this.APIBaseUrl + `/`, admin); 
  }

  getAllUsers(): Observable<Users[]> {
    console.log('getAAll',this.APIBaseUrl+`/dashboard`)
    return this.http.post<Users[]>(this.APIBaseUrl + `/dashboard`,'');
  }


  // GetAllUsers(): Observable<Users[]> {
  //   return this.http.post<Users[]>(this.APIBaseUrl + '/dashboard',"").pipe(
  //     tap(
  //       (data) => {
  //         console.log('Data successfully retrieved:', data);
          
          
  //       },
  //       (error) => {
  //         console.error('Error retrieving data:', error);
  //       }
  //     ),
  //     catchError((error) => {
  //       console.error('Error in catchError:', error);
  //       return throwError(error);
  //     })
  //   );
  // }

  GetAllUsers(): Observable<Users[]> {
    return this.http.post<Users[]>(this.APIBaseUrlJSON,"").pipe(
      tap(
        (data) => {
          console.log('Data successfully retrieved:', data);
          
          
        },
        (error) => {
          console.error('Error retrieving data:', error);
        }
      ),
      catchError((error) => {
        console.error('Error in catchError:', error);
        return throwError(error);
      })
    );
  }


}
