import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../projects.service'
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

 projects:Project[];
 newProject:Project = new Project();
 editProject:Project= new Project();
 editIndex:number;
 
  constructor(private projectService:ProjectsService) { }

  ngOnInit(): void {

    this.projectService.getAllProjects().subscribe(
      (response:Project[])=>{
        this.projects=response;
      }
    );
  }
  onSaveClick()
  {
    this.projectService.updateProject(this.newProject).subscribe(
      (response:Project)=>{
        var p:Project=new Project();
        p.projectID=response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;

        this.projects.push(p);
        this.newProject.projectID=null;
        this.newProject.projectName=null;
        this.newProject.dateOfStart=null;
        this.newProject.teamSize=null;

      },
      (error)=>{
        console.log(error.message);
      }
    )
  }

  onEditClick(event,index:number)
  {
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }
  onUpdateClick(){
    this.projectService.updateProject(this.editProject).subscribe(
      (response:Project)=>{
        var p = new Project();
        p.projectID=  response.projectID;
        p.projectName=response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects[this.editIndex] =p;
        this.editProject.projectID = null;
        this.editProject.projectName=null;
        this.editProject.dateOfStart=null;
        this.editProject.teamSize=null; 
      }
    )
  }

}
