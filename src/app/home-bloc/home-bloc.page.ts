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
  data: any;
Notes: any;
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

  ngOnInit() {
  

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
    this.http.post(`http://localhost:3000/note/${this.data}`,cre ).subscribe(
      (res) => {
        localStorage.setItem("blocNotes", JSON.stringify(res));

        this.router.navigate(["home-bloc"], navigation);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  show(){
  
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };
    this.http.get(`http://localhost:3000/note/${this.data}`, ).subscribe(
      (res) => {
        localStorage.setItem("blocNotes", JSON.stringify(res));
this.Notes = res
console.log(res)

        this.router.navigate(["home-bloc"], navigation);
      },
      (error) => {
        console.log(error);
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
}
