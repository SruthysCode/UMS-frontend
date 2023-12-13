import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Admin } from 'src/app/Store/Model/admin.model';
import { Userinfo } from 'src/app/Store/Model/user.model';
import { UserService } from 'src/app/service/user.service';

interface UserData {
  id: string;
  name: string;
  progress: string;
}

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress'];
  dataSource = new MatTableDataSource<UserData>();


  // displayedColums: string[] = ["code", "name", "email", "phone", "address", "type", "group", "status", "action"]
 datasource: any;
  errormessage='true';
  // displayedColumns=3
  "elements": [
    {
      "username": "admin",
      "password": "admin",
      "name": "Adminuser",
      "email": "ad@in.com",
      "phone": "678888",
      "gender": "male",
      "role": "manager",
      "status": true,
      "id": 1
    },
    {
      "username": "testuser",
      "password": "test",
      "name": "NT User",
      "email": "nt@in.com",
      "phone": "678889999",
      "gender": "female",
      "role": "manager",
      "status": true,
      "id": 2
    },
    {
      "username": "ntuser",
      "password": "test",
      "name": "NT User 2",
      "email": "nt1@in.com",
      "phone": "66888999",
      "gender": "male",
      "role": "admin",
      "status": true,
      "id": 3
    }
  ]

  constructor(private service: UserService){}
 
  admindata: any;
  element:any ;
  
  // element= new MatTableDataSource<Userinfo>() ;
   
  ngOnInit(): void {

    this.dataSource.data = [
      { id: '1', name: 'John', progress: '50%' },
      { id: '2', name: 'Doe', progress: '75%' },
      { id: '3', name: 'Jane', progress: '25%' },
    ];


    console.log('inINIT');
    // const todisp= Object.entries(this.service.Getuserdatafromstorage()).map(([key, value]) => ({ [key]: value }));
    this.element = this.service.Getuserdatafromstorage();
    // console.log(this.element[0].name,"QQQQQ hjkj",this.element)
    // console.log(this.element, "!!!!! >> ", todisp)
    // console.log("adm ", this.admindata)
    // console.log(this.admindata[0].name)
    // this.getuserlist();
  }

  // getuserlist(){
  //   this.service.getusers().subscribe((result)=>{
  //     console.log(result);
  //     this.userlist=result
  //   })
  // }

  FunctionAdd(){
    console.log("in fn ADD");
  }

  FunctionEdit(id:any){
    console.log("ID is ::",id)
  }

  FunctionDelete(id:any){
    console.log("del id is ",id);
    
  }

}
