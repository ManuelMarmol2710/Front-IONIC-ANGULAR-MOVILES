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
  title1: any;
  notes1: any;

  cards = [
    {
      title: "Crear Nota",
      notes: "Crear Nota",
      buttonText: "Button",
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
        this.title1 = params.res;
      }
    });

    this.route.queryParams.subscribe((params) => {
      if (params && params.title && params.notes) {
        this.notes1 = params.title && params.notes;
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
    const Notes = [
      {
        title: this.title1,
        notes: this.notes1,
        buttonText: "Button",
      },
    ];
    console.log(Notes);

    this.http.get(`http://localhost:3000/note/${this.data}`).subscribe(
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
  }
}
