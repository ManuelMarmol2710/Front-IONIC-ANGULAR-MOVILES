import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import SigninPage from '../signin/signin.page';

@Component({
  selector: 'app-ver-notas',
  templateUrl: './ver-notas.page.html',
  styleUrls: ['./ver-notas.page.scss'],
})
export class VerNotasPage implements OnInit {


data: any;

  constructor(private router: Router, private route: ActivatedRoute) { 


    this.route.queryParams.subscribe(params =>{

      console.log('params ', params)
      
      if(params && params['email']){
      
      this.data = params['email']
        
      }
      
      }); }

  ngOnInit() {
  }

  atras(){
  
    let navigation: NavigationExtras = {

      queryParams:{
      
        email: this.data,
      
      
      }


        

}

this.router.navigate(['home-note'],navigation)
    
  
     
  
  }
  
     
  
  }


