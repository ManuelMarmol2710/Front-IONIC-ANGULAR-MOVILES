import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import SigninPage from '../signin/signin.page';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  email!: string
  password!: string; 
 name!: string;
last_Name!: string;



  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  
  
  
  
  
  }


  Actu(){

    let cre = {

email: this.email,
password: this.password,
name: this.name,
last_Name: this.last_Name
    
}
    
    this.http.put((`http://localhost:3000/signup/${(this.email)} `),cre).subscribe(res =>{

    localStorage.setItem('blocNotes',JSON.stringify(res))
    this.router.navigateByUrl('/home-note')
    
        },error =>{
    console.log(error)
       
  
  })


console.log(cre)
  }
  atras(){
  
    this.router.navigateByUrl(`home-note/${(SigninPage.email)}`)
  
     
  
  }
 delete(){
  this.router.navigateByUrl('/deleteprofile')
 
 }

  }



