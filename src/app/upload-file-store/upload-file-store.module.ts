import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { UploadFileEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('uploadFile', featureReducer),
    EffectsModule.forFeature([UploadFileEffects])
  ]
})
export class UploadFileStoreModule { }
