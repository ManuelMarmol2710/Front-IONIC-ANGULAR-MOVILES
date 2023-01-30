import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-note',
  templateUrl: './home-note.page.html',
  styleUrls: ['./home-note.page.scss'],
})
export class HomeNotePage implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}
  newNote(){
  
  this.router.navigateByUrl('/home-bloc')

   

}

logout(){
  
  this.router.navigateByUrl('/signin')

   

}
  ngOnInit() {
  }

}
