import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],


})

export class SigninPage  implements OnInit  {
  password!: string;


  passwordType:string = 'password';
  passwordIcon: string = 'eye-off';

  email!:string;
  static email: string;
 
 

constructor(private http: HttpClient, private router: Router,
  private alertController: AlertController) { }
ngOnInit() {
  

}

hideShowPassword(){

  this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  this.passwordIcon = this.passwordIcon === 'eye=off' ? 'eye' : 'eye-off';


}

login(){

    let cre = {

email: SigninPage.email,
password: this.password,
        
    }
    this.http.post('http://localhost:3000/signin',cre).subscribe(res =>{
  localStorage.setItem('email',JSON.stringify(res))
 this.router.navigateByUrl((`home-note/${(SigninPage.email)}`))

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
export default SigninPage  ;
