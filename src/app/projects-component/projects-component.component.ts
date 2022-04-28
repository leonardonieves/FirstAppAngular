import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['']);
  }

}
