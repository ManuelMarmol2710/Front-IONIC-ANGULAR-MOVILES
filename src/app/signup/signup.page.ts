import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email!: string
  password!: string; 
 name!: string;
last_Name!: string;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  
  
  
  
  
  }


  Registrar(){

    let cre = {

email: this.email,
password: this.password,
name: this.name,
last_Name: this.last_Name
    }


    this.http.post('http://localhost:3000/signup',cre).subscribe(res =>{

localStorage.setItem('User',JSON.stringify(res))
this.router.navigateByUrl('/home-bloc')

    },error =>{
console.log(error)
    })



console.log(cre)
  }
 
  atras(){
  
    this.router.navigateByUrl('/signin')
  
     
  
  }
}
