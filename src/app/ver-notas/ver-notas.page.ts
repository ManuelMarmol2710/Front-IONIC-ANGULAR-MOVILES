import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-ver-notas",
  templateUrl: "./ver-notas.page.html",
  styleUrls: ["./ver-notas.page.scss"],
})
export class VerNotasPage implements OnInit {
  data: any;
  data1: any;
  res: any;
  title: any;
  notes: any;

  title1: any;

  cards = [
    {
      title: "Card Title 1",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
    },
    {
      title: "Card Title 2",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
    },
    {
      title: "Card Title 3",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private http: HttpClient
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.res) {
        this.data1 = params.res;
      }
    });

    this.route.queryParams.subscribe((params) => {
      if (params && params["email"]) {
        this.data = params["email"];
      }
    });
  }

  ngOnInit() {}

  buscar() {
    this.http.get(`http://localhost:3000/note/${this.data}`).subscribe(
      (res) => {
        localStorage.setItem("blocNotes", JSON.stringify(res));
        console.log(res);

        let navigationExtras: NavigationExtras = {
          queryParams: {
            res: JSON.stringify(res),
          },
        };
      },
      (error) => {
        console.log(error);
        this.presentAlert("Titulo no encontrado.", error.error.msg);
      }
    );
  }

  delete() {
    this.http.delete(`http://localhost:3000/note/${this.title1}`).subscribe(
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

    this.router.navigate(["home-note"], navigation);
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
