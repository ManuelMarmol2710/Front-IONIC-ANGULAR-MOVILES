import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home-note',
  templateUrl: './home-note.page.html',
  styleUrls: ['./home-note.page.scss'],
})
export class HomeNotePage implements OnInit {
title!:string;
res!: string;
constructor(private http: HttpClient, private router: Router,
  private alertController: AlertController) { }
  newNote(){
  
  this.router.navigateByUrl('/home-bloc')

   

}

logout(){
  
  this.router.navigateByUrl('/signin')

   

}

edit(){
  
  this.router.navigateByUrl('/profile')

   

}
  ngOnInit() {
  }
 
 buscar(){


if(this.title !==  this.res){
  this.http.get((   `http://localhost:3000/homeblocT/${(this.title)}`)).subscribe(res =>{

    localStorage.setItem('blocNotes',JSON.stringify(res))
    console.log(res)

    
        },error =>{

    console.log(error)

        })



        this.http.get((   `http://localhost:3000/homeblocC/${(this.title)} `)).subscribe(res =>{

        localStorage.setItem('blocNotes',JSON.stringify(res))
        console.log(res)
        
        
            },error =>{

        console.log(error)
            })
     
           
      } else if(this.title !==  this.res){
console.log('no existe')
      } 
      
      else {
        console.log('Coloque informacion')
      }

    }

    async presentAlert(header:string, message:string) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header:header,
        message:message,
        buttons: ['OK'],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }

      }
