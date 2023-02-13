import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import SigninPage from "../signin/signin.page";
@Component({
  selector: "app-ver-collections",
  templateUrl: "./ver-collections.page.html",
  styleUrls: ["./ver-collections.page.scss"],
})
export class VerCollectionsPage implements OnInit {
  data: any;
  constructor(private router: Router, private route: ActivatedRoute) {
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
}
