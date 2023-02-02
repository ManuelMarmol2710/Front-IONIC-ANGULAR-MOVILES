import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-home-bloc',
  templateUrl: './home-bloc.page.html',
  styleUrls: ['./home-bloc.page.scss'],
})
export class HomeBlocPage implements OnInit {
  notes!: string;
      title!: string;
      collections!: string;

   
 

  constructor(private http: HttpClient, private router: Router, private alertController: AlertController) { }


  ngOnInit() {


  }
  
  Save(){
    let cre = {

      notes: this.notes,
      title: this.title,
      collections: this.collections,


          }
          
          
          this.http.post('http://localhost:3000/homebloc',cre).subscribe(res =>{

localStorage.setItem('User',JSON.stringify(res))
this.router.navigateByUrl('/home-note')

    },error =>{
console.log(error)
    })
}
atras(){
  
  this.router.navigateByUrl('/home-note')

   

}


}