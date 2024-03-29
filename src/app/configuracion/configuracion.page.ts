import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  Route,
  Router,
  NavigationExtras,
  ActivatedRoute,
} from "@angular/router";

@Component({
  selector: "app-configuracion",
  templateUrl: "./configuracion.page.html",
  styleUrls: ["./configuracion.page.scss"],
})
export class ConfiguracionPage implements OnInit {
  email!: string;
  password!: string;
  name!: string;
  last_Name!: string;
  data!: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params["email"]) {
        this.data = params["email"];
      }
    });
  }

  ngOnInit() {}

  atras() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };

    this.router.navigate(["home-note"], navigation);
  }

  logout() {
    this.router.navigateByUrl("/signin");
    console.log("Sesion cerrada.");
  }

  edit() {
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };

    this.router.navigate(["profile"], navigation);
  }
}
