import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {


   public static email: string
  password!: string; 
  email!: string
 

constructor(private http: HttpClient, private router: Router,
  private alertController: AlertController) { }

  ngOnInit() {

  }


  login(){

    let cre = {

email1: SigninPage.email,
password: this.password,
email: this.email
    }
 this.http.post('http://localhost:3000/signin',cre).subscribe(res =>{
  localStorage.setItem('User',JSON.stringify(res))
  //this.router.navigateByUrl(`home-note/${(SigninPage.email)}`)
  
  this.router.navigateByUrl(`home-note`)

    },error =>{
console.log(error)
this.presentAlert('Inicio de sesion fallido.', error.error.msg)
    });




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

Registrar(){
  
  this.router.navigateByUrl('/signup')

   

}



}


