import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import mongoose from 'mongoose';

@Component({
  selector: 'app-home-note',
  templateUrl: './home-note.page.html',
  styleUrls: ['./home-note.page.scss'],
})
export class HomeNotePage implements OnInit {


  title!:string;
res!: string;


data: any;
  

constructor(private http: HttpClient, private router: Router,


  private alertController: AlertController, private route:ActivatedRoute) {



this.route.queryParams.subscribe(params =>{

console.log('params ', params)

if(params && params['email']){

this.data = params['email']
  
}

});





   }
  
  ngOnInit() {
  
   
  }
  
verCollect(){
  let navigation: NavigationExtras = {

    queryParams:{
    
      email: this.data,
    
    
    }


      

}

this.router.navigate(['ver-collections'],navigation)




}

  verNotas(){
    let navigation: NavigationExtras = {

      queryParams:{
      
        email: this.data,
      
      
      }


        

}

this.router.navigate(['ver-notas'],navigation)
  
  }


  newNote(){
    let navigation: NavigationExtras = {

      queryParams:{
      
        email: this.data,
      
      
      }


        

}

this.router.navigate(['home-bloc'],navigation)
}
logout(){
  
  this.router.navigateByUrl('/signin')

   

}

edit(){
  let navigation: NavigationExtras = {

    queryParams:{
    
      email: this.data,
    
    
    }


      

}

this.router.navigate(['profile'],navigation)
  
   

}

 
 buscar(){



  this.http.get(( `http://localhost:3000/note/${(this.data)}`)).subscribe(res =>{

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
