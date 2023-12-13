import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { getusers } from 'src/app/Store/Admin/Admin.action';
import { Users } from 'src/app/Store/Model/user.model';
import { AdminService } from 'src/app/service/admin.service';

import { getuserlist } from 'src/app/Store/Admin/Admin.selector'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

// export class UserListComponent {
//   action$: any;
//   service: any; 

//   constructor(private adminservice : AdminService){}
//   userlist:Users[] | unknown

  
//   ngOnInit(): void{
//     // this.userlist.push(this.adminservice.getAllUsers());
//     console.log("in userlist.ts")
//     // this.userlist=this.adminservice.getAllUsers();
//     // console.log("User list is : ", this.userlist);

//   }

  // getusers() {
  //   console.log("GETUSER");
  //   this.adminservice.getAllUsers().subscribe(
  //     (data) => {
  //       console.log("From back >>", data);
  //       this.userlist =JSON.stringify(data);
  //       console.log("User list is : ", this.userlist);
  //     },
  //     (error) => {
  //       console.error("Error fetching users: ", error);
  //     }
  //   );
  // }

  


// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

export class UserListComponent  implements OnInit{
   
  // userlist: Users[]=[];
  // temp!: Users[];
  display : any;
 constructor(private store:Store, private adservice:AdminService){}

 
 userlist: Users[]=[];
 displayedColums: string[] = ['username', 'name', 'email', 'role', 'status', 'action']
 datasource: any;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
    console.log("in init of user-list")

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// original code
    // this.store.dispatch(getusers());
    // this.store.select(getuserlist).subscribe(item => {
    //   console.log("inside store ..")
    //   this.userlist =item;
    //   console.log("MMMMM ", this.userlist)
    //   this.datasource = new MatTableDataSource<Users>(this.userlist)
    //   this.datasource.paginator = this.paginator
    //   this.datasource.sort = this.sort
    // })

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  //   this.store.dispatch(getusers());

  //   this.store.select(getuserlist).subscribe(item => {
  //     let list =Object.values( item);
  //      console.log(this.userlist,"listuser")
  //      console.log(item,"items")
    
  // })

    
 this.adservice.GetAllUsers().subscribe(item=>{
  console.log("OOOOOOOOO > ",item, item[0],item[1]);
  const list=Object.values(item);
  console.log("MMMMMM>> ",list )
  this.userlist = Object.values(list[0]);
  // this.display = Object.entries(list[0]);
  
  console.log("ABC ///", this.userlist,"????",this.userlist[0],">>>>>",this.userlist[1].name)
  
  this.display=this.userlist
  console.log("AAA ", this.display[0].email, "BBB ", this.display[2].name)

  
    for (const value of this.display) {
      console.log('Value:', value, value.name);
      // this.temp.push(value);
      // console.log('Key:', key, 'Value:', value)
    }
  
  
 })


}
}