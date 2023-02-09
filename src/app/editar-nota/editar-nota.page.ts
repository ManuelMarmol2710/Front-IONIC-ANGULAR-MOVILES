import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Route, Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.page.html',
  styleUrls: ['./editar-nota.page.scss'],
})
export class EditarNotaPage implements OnInit {

  data:any;

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  save(){

  }

  delete() {
    this.http.delete(`http://localhost:3000/note/${this.data}`).subscribe(
      (res) => {
        localStorage.setItem("blocNotes", JSON.stringify(res));
        console.log(res);
      },
      (error) => {
        console.log(error);
        this.presentAlert("Titulo no encontrado.", error.error.msg);
      }
    );
  }

  atras() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };

    this.router.navigate(["ver-notas"], navigation);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: header,
      message: message,
      buttons: ["OK"],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

}
