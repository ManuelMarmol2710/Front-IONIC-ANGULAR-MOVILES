import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Route, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  email!: string;
  password!: string;
  name!: string;
  last_Name!: string;

  passwordForm: FormGroup;
  emailForm: FormGroup;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {

    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.required
      
      ])],
  });

  this.emailForm = this.formBuilder.group({
    email: ['', Validators.compose([
      Validators.email,
      Validators.required
    ])],
  })

  }

  Registrar() {
    let cre = {
      email: this.email,
      password: this.password,
      name: this.name,
      last_Name: this.last_Name,
    };

    let navigation: NavigationExtras = {
      queryParams: {
        email: this.email,
      },
    };

    this.http.post("https://bloc-notas-ionic-angular-production-53dc.up.railway.app/signup", cre).subscribe(
      (res) => {
        localStorage.setItem("User", JSON.stringify(res));
        this.router.navigate(["home-note"], navigation);
      },
      (error) => {
        console.log(error);
        this.presentAlert("Registro fallido.", error.error.msg);
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

  atras() {
    this.router.navigateByUrl("/signin");
  }
}
