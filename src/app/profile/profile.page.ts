import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router, NavigationExtras, ActivatedRoute } from '@angular/router';

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

data!:any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { 


    this.route.queryParams.subscribe(params =>{

      console.log('params ', params)
      
      if(params && params['email']){
      
      this.data = params['email']
        
      }
      
      });
    
  }

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
  
    let navigation: NavigationExtras = {

      queryParams:{
      
        email: this.data,
      
      
      }


        

}

this.router.navigate(['home-note'],navigation)
  
     
  
  }
 delete(){
  this.router.navigateByUrl('/deleteprofile')
 
 }

  }



