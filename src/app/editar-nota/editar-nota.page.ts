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
  selector: "app-editar-nota",
  templateUrl: "./editar-nota.page.html",
  styleUrls: ["./editar-nota.page.scss"],
})
export class EditarNotaPage implements OnInit {
  dataNota: any;
  data: any;
  notes: string;
  title: string;
  collections: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {
    this.route.queryParams.subscribe((params) => {

      if (params && params["NotesSEND"]) {
        this.dataNota = params["NotesSEND"];
      }
    });
    console.log(this.dataNota)
  }
  
  

  ngOnInit() {}

  save() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };
    let cre = {
      notes: this.notes,
      title: this.title,
      collections:this.collections
    };
    this.http
      .post(`https://bloc-notas-ionic-angular-production-53dc.up.railway.app/note/${this.title}/${this.collections}`, cre)
      .subscribe(
        (res) => {
          localStorage.setItem("blocNotes", JSON.stringify(res));

          console.log(res);   this.router.navigate(["home-note"], navigation);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  delete() {
    this.http.delete(`https://bloc-notas-ionic-angular-production-53dc.up.railway.app/note/${this.title}`).subscribe(
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


  fav(){
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
      .post(`https://bloc-notas-ionic-angular-production-53dc.up.railway.app/note/${this.title}/Favorito`, cre)
      .subscribe(
        (res) => {
          localStorage.setItem("blocNotes", JSON.stringify(res));
          this.router.navigate(["home-bloc"], navigation);
          console.log(res);
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

    this.router.navigate(["home-bloc"], navigation);
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
