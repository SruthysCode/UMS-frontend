import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usercred, Userinfo, Users } from '../Store/Model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    loadProfile() {
        throw new Error("Method not implemented.");
    }
    userLogin(userdata: Usercred) {
        throw new Error("Method not implemented.");
    } 
  constructor(private http:HttpClient) { }


  APIBaseUrlJSON= 'http://localhost:3000/user'
  APIBaseUrl='http://localhost:5000/'

UserRegistration(userdata: Users) {
  console.log("userreg : ", userdata);
  
  return this.http.post(this.APIBaseUrl +`register`, userdata);
}


   UserLogin(userdata: Usercred): Observable<Userinfo[]> {
  console.log("In userlogin", userdata)
  return this.http.post<Userinfo[]>(this.APIBaseUrl + `login`,userdata);

  // return this.http.get<Userinfo[]>(this.APIBaseUrl + `/?username=` + userdata.username + `&password=` + userdata.password);

}

SetUserToLocalStorage(userdata: any) {
  localStorage.setItem('userdata', JSON.stringify(userdata))
}

getusers(): Observable<any> {
  return this.http.get(
    `${this.APIBaseUrlJSON}`);
}

// getusers(): Observable<any> {
//   return this.http.get(
//     `${this.APIBaseUrl}/home`);
// }

Getuserdatafromstorage() {
  let _obj: Userinfo = {
    // id: 0,
     username: '',
    email: '',
    name: '',
    mobile:'',
    image:'',
    // role: '',
    // status: false
  }
  if (localStorage.getItem('userdata') != null) {
    let jsonstring = localStorage.getItem('userdata') as string;
    console.log(jsonstring, "JSON SRING is : ", jsonstring)
    _obj = JSON.parse(jsonstring);
    // Object.entries(jsonstring()).map(([key, value]) => ({ [key]: value }));
    console.log("OBJ >>>",_obj,">>>",_obj.email)
    
    const values = Object.values(_obj);
//     console.log("values : values");
//   for (const value of values) {
//     console.log('Value:', value);
//     // console.log('Key:', key, 'Value:', value)
//   }

//   console.log("key : values");
//   const entries = Object.entries(_obj);
// for (const [key, value] of entries) {
//   console.log('Key:', key, 'Value:', value);
// }

// console.log("key : key");
// const keys = Object.keys(_obj);
// for (const key of keys) {
//   console.log('Key:', key);
// }
    return values;
  } else {
    console.log("return : >", _obj)
    return _obj;
  }

}


// file upload
public uploadFile(file: File): Observable<HttpEvent<{}>> {
  const formData = new FormData();
  // console.log(formData)
  // console.log(file)
  formData.append('image', file, file.name);
  // console.log("in form data details", formData)  
  const user= Object.values( this.Getuserdatafromstorage());
  // console.log(")))))))))))))",user, user[0].username);
  const username = user[0].username;  
  const params = new HttpParams().set('username', username);
  const req = new HttpRequest(
    'POST',
    `${this.APIBaseUrl}image`,
    formData,
    {params}
  );
  // console.log("inside file upload, after post")
  return this.http.request(req);
}




}

