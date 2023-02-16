import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  Route,
  Router,
  NavigationExtras,
  ActivatedRoute,
} from "@angular/router";
import { AlertController } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
  passwordForm: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private formBuilder: FormBuilder
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params["email"]) {
        this.data = params["email"];
      }
    });
  }


  
  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.required
      
      ])],
  });

  }


  Actu() {

    let cre = {
      email: this.email,
       name: this.name,
      last_Name: this.last_Name,
    };
let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };
    this.http.put(`https://bloc-notas-ionic-angular-production-53dc.up.railway.app/signup/${this.data}`, cre).subscribe(
      (res) => {
        localStorage.setItem("blocNotes", JSON.stringify(res));
        this.router.navigate(["home-note"], navigation);
      },
      (error) => {
        console.log(error);
        this.presentAlert("Por favor llenar un dato para actualizar su perfil.", error.error.msg);
      }
    );
  }
  atras() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };

    this.router.navigate(["configuracion"], navigation);
  }

actuPassword(){
  let cre = {
    password: this.password,
  };
  let navigation: NavigationExtras = {
    queryParams: {
      email: this.data,
    },
  };
  this.http.put(`https://bloc-notas-ionic-angular-production-53dc.up.railway.app/signup/password/${this.data}`, cre).subscribe(
    (res) => {
      localStorage.setItem("blocNotes", JSON.stringify(res));
      this.router.navigate(["home-note"], navigation);
    },
    (error) => {
      console.log(error);
      this.presentAlert("Por favor llenar un dato para actualizar su perfil.", error.error.msg);
    }
  );


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

  }

}
