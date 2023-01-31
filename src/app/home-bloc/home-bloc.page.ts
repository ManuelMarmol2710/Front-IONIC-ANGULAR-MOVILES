import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-home-bloc',
  templateUrl: './home-bloc.page.html',
  styleUrls: ['./home-bloc.page.scss'],
})
export class HomeBlocPage implements OnInit {

  email!: string
  password!: string; 

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  
  logout(){

    let cre = {

      email: this.email,
      password: this.password,
      
          }
      
      
          this.http.post('http://localhost:3000/home-bloc',cre).subscribe(res =>{
      
      localStorage.setItem('User',JSON.stringify(res))
      this.router.navigateByUrl('/signin')
      
          },error =>{
      console.log(error)
      
      
      
      
          })
      
      
      
      console.log(cre)
    }
}

