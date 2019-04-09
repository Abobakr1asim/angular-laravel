import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  AppTitle: string = 'FORK PLAY';

  constructor(
    private loginService:AuthenticationService
  ) { }

  ngOnInit() {
    
  }

}