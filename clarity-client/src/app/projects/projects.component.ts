import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

 project_profile = {
     name:"",
     owner: "",
     image: "",
     description:"",
     team: [],
     max_team_size:5,
     collaboration_tools:[]
 }

  constructor() { }

  ngOnInit() {
  }

}
