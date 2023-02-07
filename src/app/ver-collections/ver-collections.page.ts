import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SigninPage from '../signin/signin.page';
@Component({
  selector: 'app-ver-collections',
  templateUrl: './ver-collections.page.html',
  styleUrls: ['./ver-collections.page.scss'],
})
export class VerCollectionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  atras(){
  
    this.router.navigateByUrl(`home-note/${(SigninPage.email)}`)
  
     
  
  }

}
