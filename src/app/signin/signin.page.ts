import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {


  email!: string
  password!: string; 
  jwtSecret!: string;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

  }


  login(){

    let cre = {

email: this.email,
password: this.password,

    }
  this.http.post('http://localhost:3000/signin',cre).subscribe(res =>{
  localStorage.setItem('User',JSON.stringify(res))
  this.router.navigateByUrl('/home-note')

    },error =>{
console.log(error)
    });

console.log(cre)


}
Registrar(){
  
  this.router.navigateByUrl('/signup')

   

}



}


