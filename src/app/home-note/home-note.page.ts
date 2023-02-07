import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import mongoose from 'mongoose';
import   SigninPage   from '../signin/signin.page';

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
  
  ngOnInit() {
  
   
  }
  
verCollect(){

  this.router.navigateByUrl((`ver-collections/${(SigninPage.email)}`))



}

  verNotas(){

    this.router.navigateByUrl((`ver-notas/${(SigninPage.email)}`))

  }


  newNote(){
  

    this.router.navigateByUrl((`home-bloc/${(SigninPage.email)}`))
        

}

logout(){
  
  this.router.navigateByUrl('/signin')

   

}

edit(){
  
  this.router.navigateByUrl('/profile')
  
   

}

 
 buscar(){



  this.http.get(( `http://localhost:3000/note/${(this.title)}`)).subscribe(res =>{

    localStorage.setItem('blocNotes',JSON.stringify(res))
    console.log(res)

    
        },error =>{

    console.log(error)
    this.presentAlert('Titulo no encontrado.', error.error.msg)
        })


      }
      
      delete(){
        this.http.delete((   `http://localhost:3000/note/${(this.title)}`)).subscribe(res =>{
  
        localStorage.setItem('blocNotes',JSON.stringify(res))
        console.log(res)
    
        
            },error =>{
    
        console.log(error)
        this.presentAlert('Titulo no encontrado.', error.error.msg)
            })  

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
