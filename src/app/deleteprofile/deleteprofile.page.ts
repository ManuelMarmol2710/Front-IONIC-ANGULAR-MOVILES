import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-deleteprofile',
  templateUrl: './deleteprofile.page.html',
  styleUrls: ['./deleteprofile.page.scss'],
})
export class DeleteprofilePage implements OnInit {
email!: string;

  constructor(private http: HttpClient, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  atras(){
  
    this.router.navigateByUrl('/home-note')
  
     
  
  }


  delete(){



  this.http.delete(( `http://localhost:3000/signup/${(this.email)} `),).subscribe(res =>{

  localStorage.setItem('blocNotes',JSON.stringify(res))
  this.router.navigateByUrl('/signin')

},error =>{
  console.log(error)
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
