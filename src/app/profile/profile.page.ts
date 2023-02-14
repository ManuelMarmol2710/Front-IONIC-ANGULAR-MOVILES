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
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  email!: string;
  password!: string;
  name!: string;
  last_Name!: string;
  data!: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params["email"]) {
        this.data = params["email"];
      }
    });
  }

  ngOnInit() {}

  Actu() {
    let cre = {
      email: this.email,
      password: this.password,
      name: this.name,
      last_Name: this.last_Name,
    };

    this.http.put(`http://localhost:3000/signup/${this.data}`, cre).subscribe(
      (res) => {
        localStorage.setItem("blocNotes", JSON.stringify(res));
        this.router.navigateByUrl("/home-note");
      },
      (error) => {
        console.log(error);
        this.presentAlert("Por favor llenar un dato para actualizar su perfil.", error.error.msg);
      }
    );

    console.log(cre);
  }
  atras() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };

    this.router.navigate(["configuracion"], navigation);
  }
  delete() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };

    this.router.navigate(["deleteprofile"], navigation);
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
