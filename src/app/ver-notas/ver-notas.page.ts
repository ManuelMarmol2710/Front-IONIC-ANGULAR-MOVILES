import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SigninPage from '../signin/signin.page';

@Component({
  selector: 'app-ver-notas',
  templateUrl: './ver-notas.page.html',
  styleUrls: ['./ver-notas.page.scss'],
})
export class VerNotasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  atras(){
  
    this.router.navigateByUrl(`home-note/${(SigninPage.email)}`)
  
     
  
  }

}
