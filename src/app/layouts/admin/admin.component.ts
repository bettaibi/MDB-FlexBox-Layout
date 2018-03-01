import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  @Component({
    moduleId: module.id,
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
  })

  export class AdminComponent implements OnInit {
    action: number= 1;
    constructor(private router: Router){

    }

    ngOnInit(){
      document.onkeydown= (e) =>{
        if (e.keyCode == 37) {
          if(this.action > 1){
            this.action--;
            this.goto();
          }
          else if(this.action === 1){
            this.action= 4;
            this.goto();
          }
        }
        else if (e.keyCode == 39) {
           if(this.action < 4){
             this.action++;
             this.goto();
           }
           else if(this.action == 4){
             this.action=1;
             this.goto();
           }

        }
      }
    }


    // Navigate to
    goto(){
      switch(this.action){
        case  1 : this.router.navigate(['/']); break;
        case  2 : this.router.navigate(['/facturation']); break;
        case  3 : this.router.navigate(['/exemple']); break;
        case  4 : this.router.navigate(['/stock']); break ;
        default: console.log("done");
      }
    }


  }
