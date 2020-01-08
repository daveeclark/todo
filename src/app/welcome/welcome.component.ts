import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { AppComponent } from '../app.component'; 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'A Welcome Message'
  name = ''

  //ActivatedRoute
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name =  this.route.snapshot.params['name']
  }
}

export class Class1 {
  
}

export class Class2 {

}