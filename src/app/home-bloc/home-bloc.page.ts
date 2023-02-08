import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import   {SigninPage}   from '../signin/signin.page';

@Component({
  selector: 'app-home-bloc',
  templateUrl: './home-bloc.page.html',
  styleUrls: ['./home-bloc.page.scss'],
})
export class HomeBlocPage implements OnInit {
  notes!: string;
      title!: string;
      owner!: string;
data!:any;
   
 

  constructor(private http: HttpClient, private router: Router, private alertController: AlertController
    ,private route:ActivatedRoute) { 
      
      this.route.queryParams.subscribe(params =>{
 
      console.log('params ', params)
      
   
      if(params && params['email']){
      
      this.data = params['email']
        
      }
      
     
    
    
    
    }); 

  
              
               
            
  
    
    }

 
    

  ngOnInit() {


  }
  
  Save(){
    let cre = {

      notes: this.notes,
      title: this.title,



          }

          let navigation: NavigationExtras = {

            queryParams:{
            
              email: this.data
            
            
            }
            
            }        
          this.http.post(`http://localhost:3000/note/${(this.data)}`,cre).subscribe(res =>{
            
            
          localStorage.setItem('User',JSON.stringify(res))
          
          this.router.navigate(['home-note'],navigation)
          
              },error =>{
            
          console.log(error)
              })
          

    
}
atras(){
  let navigation: NavigationExtras = {

    queryParams:{
    
      email: this.data
    
    
    }


   

}
this.router.navigate(['home-note'],navigation)

}
}