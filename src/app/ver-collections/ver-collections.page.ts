import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-ver-collections",
  templateUrl: "./ver-collections.page.html",
  styleUrls: ["./ver-collections.page.scss"],
})
export class VerCollectionsPage implements OnInit {
  data: any;
  collections!: string;
  collect!: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private alertController: AlertController
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params["email"]) {
        this.data = params["email"];
      }
    });
  }

  ngOnInit() {}


  show() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };
    this.http
      .get(`https://bloc-notas-ionic-angular-production-53dc.up.railway.app/collections/${this.data}/${this.collections}`)
      .subscribe(
        (res) => {
          localStorage.setItem("blocNotes", JSON.stringify(res));
          this.collect = res;
          this.router.navigate(["ver-collections"], navigation);
        },
        (error) => {
          console.log(error);
          this.presentAlert("Titulo no encontrado.", error.error.msg);
        }
      );
      }
  favoritos() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };
    this.http
      .get(`https://bloc-notas-ionic-angular-production-53dc.up.railway.app/collections/${this.data}/Favorito`)
      .subscribe(
        (res) => {
          localStorage.setItem("blocNotes", JSON.stringify(res));
          this.collect = res;
          this.router.navigate(["ver-collections"], navigation);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  trackItems(index: number, itemObject: any) {
    return itemObject._id;
  }


  borrar(){
    this.http.delete(`https://bloc-notas-ionic-angular-production-53dc.up.railway.app/collections/${this.data}/${this.collections}`).subscribe(
      (res) => {
        localStorage.setItem("blocNotes", JSON.stringify(res));
        console.log(res);
      },
      (error) => {
        console.log(error);
        this.presentAlert("Titulo no encontrado.", error.error.msg);
      });

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
