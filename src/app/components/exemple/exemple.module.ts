import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ExempleComponent } from './exemple.component';
import { ExempleRoutes } from './exemple.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
     CommonModule,
     RouterModule.forChild(ExempleRoutes),
     FormsModule,
     ReactiveFormsModule
   ],
  declarations: [ExempleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})

export class ExempleModule {}
