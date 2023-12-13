
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromFileUploadActions from 'src/app/upload-file-store/actions';
import * as fromFileUploadSelectors from 'src/app/upload-file-store/selectors';
import * as fromFileUploadState from 'src/app/upload-file-store/state';
import { Emitters } from 'src/app/emitters/emitter';
import { UserService } from 'src/app/service/user.service';
import { response } from 'express';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  completed$: Observable<boolean> | undefined;
  progress$: Observable<number> | undefined;
  error$: Observable<string> | undefined;
  isInProgress$: Observable<boolean> | undefined;
  isReady$: Observable<boolean> | undefined;
  hasFailed$: Observable<boolean> | undefined;

  selectfile !: File ;
  http: any;
  

  constructor(private store$: Store<fromFileUploadState.State>, private usrservice: UserService) {}

  ngOnInit() {
    this.completed$ = this.store$.pipe(
      select(fromFileUploadSelectors.selectUploadFileCompleted)
    );

    this.progress$ = this.store$.pipe(
      select(fromFileUploadSelectors.selectUploadFileProgress)
    );

    this.error$ = this.store$.pipe(
      select(fromFileUploadSelectors.selectUploadFileError)
    );

    this.isInProgress$ = this.store$.pipe(
      select(fromFileUploadSelectors.selectUploadFileInProgress)
    );

    this.isReady$ = this.store$.pipe(
      select(fromFileUploadSelectors.selectUploadFileReady)
    );

    this.hasFailed$ = this.store$.pipe(
      select(fromFileUploadSelectors.selectUploadFileFailed)
    );
  }

  uploadFile(event: any) {
    const inputElement = (event.target as HTMLInputElement)?.files;
    console.log("I/P > ", inputElement)
    if (inputElement && inputElement.length > 0) {
      this.selectfile = inputElement[0];
      console.log("selected file", this.selectfile);
    }

   

    console.log("after")
    //  this.store$.dispatch(new fromFileUploadActions.UploadRequestAction({ file: this.selectfile         
    //   })
    //    );

    this.usrservice.uploadFile( this.selectfile).subscribe(
      (response) =>{
        console.log(" Success" , response)
      },
      (error)=>   {
        console.log("ERRRRRor ", error)
      }
    )
      
    console.log("ZZZZ");
  
    // clear the input form
  //   event.srcElement.value = null;
  // }

  // resetUpload() {
  //   this.store$.dispatch(new fromFileUploadActions.UploadResetAction());
  // }

  // cancelUpload() {
  //   this.store$.dispatch(new fromFileUploadActions.UploadCancelAction());
  // }


  
  // onSubmit(){
  //   const formData = new FormData();
  //   formData.append('image',this.selectfile,this.selectfile.name)

  //   this.http.post(`http://localhost:3000/api/user/profile-upload-single`,formData,{ withCredentials: true })
  //   .subscribe(
  //     () => {
  //       Emitters.authEmitter.emit(true);
  //       this.store$.dispatch(retrieveProfile());
  //       Swal.fire('Success','Saved','success')
  //     },
  //     (err: { error: { message: any; }; }) => {
  //       Swal.fire("Error",err.error.message,'error');
  //     }
  //   )
  // }

    }
  
}
