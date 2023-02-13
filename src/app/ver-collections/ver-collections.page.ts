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
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private alertController: AlertController,) {
    this.route.queryParams.subscribe((params) => {
      if (params && params["email"]) {
        this.data = params["email"];
      }
    });
  }

  ngOnInit() {}

  enviar(){

    let cre = {
      collections: this.collections,
      };
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };
    this.http.post(`http://localhost:3000/collections/${this.data}`,cre ).subscribe(
      
    (res) => {
        localStorage.setItem("blocNotes", JSON.stringify(res));
  
  
  
        console.log(res)
        this.router.navigate(["ver-collections"], navigation);
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
    this.http.get(`http://localhost:3000/collections/${this.data}/${this.collections}` ).subscribe(
      
    (res) => {
        localStorage.setItem("blocNotes", JSON.stringify(res));
  this.collect = res
        this.router.navigate(["ver-collections"], navigation);
      },
      (error) => {
        console.log(error);
      }
    );
  
  
  

   }
   favoritos(){
  
    let navigation: NavigationExtras = {
      queryParams: {
        email: this.data,
      },
    };
    this.http.get(`http://localhost:3000/collections/${this.data}/favoritos` ).subscribe(
      
    (res) => {
        localStorage.setItem("blocNotes", JSON.stringify(res));
  this.collect = res
        this.router.navigate(["ver-collections"], navigation);
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
