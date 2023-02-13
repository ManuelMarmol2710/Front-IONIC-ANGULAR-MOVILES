import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  Route,
  Router,
  NavigationExtras,
  ActivatedRoute,
} from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-deleteprofile",
  templateUrl: "./deleteprofile.page.html",
  styleUrls: ["./deleteprofile.page.scss"],
})
export class DeleteprofilePage implements OnInit {
  email!: string;
  data!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  atras() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };

    this.router.navigate(["profile"], navigation);
  }

  delete() {

      this.http.delete(`http://localhost:3000/signup/${this.email} `).subscribe(
        (res) => {
          localStorage.setItem("blocNotes", JSON.stringify(res));
          this.router.navigateByUrl("/signin");
        },
        (error) => {
          console.log(error);
          this.presentAlert("Usuario incorrecto.", error.error.msg);
        }
      );
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: header,
      message: message,
      buttons: ["OK"],
    });

    await alert.present();
  }
}
