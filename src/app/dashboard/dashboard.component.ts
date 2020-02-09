import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Designation:string;
  UserName:string;
  NoOfTeamMembers:number;
  TotalCostOfAllProjects:number;
  PendingTasks:number;
  UpcomingProjects:number;
  ProjectCost:number;

  CurrentExpenditure:number;
  AvailableFunds:number;

  ngOnInit(): void {
    this.Designation="Team Leader";
    this.UserName="John Smith";
    this.NoOfTeamMembers=67;
    this.TotalCostOfAllProjects=240;
    this.PendingTasks=15;
    this.UpcomingProjects =2;
    this.ProjectCost=2113507;
    this.CurrentExpenditure=96788;
    this.AvailableFunds=52536;
  }

}
