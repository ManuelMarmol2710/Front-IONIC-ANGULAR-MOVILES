import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-home-bloc",
  templateUrl: "./home-bloc.page.html",
  styleUrls: ["./home-bloc.page.scss"],
})
export class HomeBlocPage implements OnInit {
  notes!: string;
  title!: string;
  owner!: string;
  collections: string;
  data: any;
  Notes: any;
  NotesSEND: any;
  sendNotes: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params["email"]) {
        this.data = params["email"];
      }
    });
  }

  ngOnInit() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };
    this.http
      .get(
        `https://bloc-notas-ionic-angular-production-53dc.up.railway.app/note/${this.data}`
      )
      .subscribe(
        (res) => {
          localStorage.setItem("blocNotes", JSON.stringify(res));
          this.Notes = res;
          if (res != null) {
            console.log(res);
          } else {
          }

          this.router.navigate(["home-bloc"], navigation);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  send() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };
    this.router.navigate(["editar-nota"], navigation);
  }

  save() {
    let cre = {
      notes: this.notes,
      title: this.title,
    };
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };
    this.http
      .post(
        `https://bloc-notas-ionic-angular-production-53dc.up.railway.app/note/${this.data}`,
        cre
      )
      .subscribe(
        (res) => {
          localStorage.setItem("blocNotes", JSON.stringify(res));

          this.router.navigate(["home-bloc"], navigation);
        },
        (error) => {
          console.log(error);
          this.presentAlert("Campo de titulo o nota vacio.", error.error.msg);
        }
      );

    this.title = "";
    this.notes = "";
  }

  show() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };

    this.http
      .get(
        `https://bloc-notas-ionic-angular-production-53dc.up.railway.app/note/${this.data}`
      )
      .subscribe(
        (res) => {
          localStorage.setItem("blocNotes", JSON.stringify(res));
          this.Notes = res;

          if (res != null) {
            console.log(res);
          } else {
          }

          this.router.navigate(["home-bloc"], navigation);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  trackItems(index: number, itemObject: any) {
    return itemObject._id;
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
