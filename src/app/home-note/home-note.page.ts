import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { title } from "process";

@Component({
  selector: "app-home-note",
  templateUrl: "./home-note.page.html",
  styleUrls: ["./home-note.page.scss"],
})
export class HomeNotePage implements OnInit {
  res: any;
  data: any;

  constructor(
    private http: HttpClient,
    private router: Router,

    private alertController: AlertController,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      console.log("params ", params);

      if (params && params["email"]) {
        this.data = params["email"];
      }
    });
  }

  ngOnInit() {}

  openDetailsWithQueryParams() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };

    this.http.get(`http://localhost:3000/note/${this.data}`).subscribe(
      (res) => {
        localStorage.setItem("blocNotes", JSON.stringify(res));
        console.log(res);

        let navigationExtras: NavigationExtras = {
          queryParams: {
            
            
            res: res,
          
          
          },
        };this.router.navigate(["ver-notas"], navigationExtras);
   
      },
      (error) => {
        console.log(error);
        this.presentAlert("Titulo no encontrado.", error.error.msg);
      }
    );


  }

  verCollect() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };

    this.router.navigate(["ver-collections"], navigation);
  }

  newNote() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };

    this.router.navigate(["home-bloc"], navigation);
  }

  config() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };

    this.router.navigate(["configuracion"], navigation);
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
