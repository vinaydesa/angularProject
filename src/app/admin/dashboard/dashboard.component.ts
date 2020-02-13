import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

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

  Clients:string[];
  Projects:string[];
  Years:number[]=[];
  TeamMembersSummary=[];
  TeamMembers=[];
  Today:Date;

  constructor(private dashboardService: DashboardService){

  }

  ngOnInit(): void {
    this.Designation="Team Leader";
    this.UserName="John Smith";
    this.NoOfTeamMembers=67;
    this.TotalCostOfAllProjects=240;
    this.PendingTasks=15;
    this.UpcomingProjects =0.2;
    this.ProjectCost=2113507;
    this.CurrentExpenditure=96788;
    this.AvailableFunds=52536;
    this.Today=new Date();

    this.Clients = [
      "ABC Infotech Ltd","DEF Software Solutions","GHI INdustries"
    ];
    this.Projects=[
      "Project A","Project B","Project C","Project D"
    ];
    for(var i=2019; i>=2010; i--)
    {
      this.Years.push(i);
    }
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers =[
      {
        Region:"East",Members:[
          {ID:1, Name:"Ford", Status:"Available" },
          {ID:2, Name:"Miller", Status:"Available"},
          {ID:3, Name:"Jones", Status:"Busy" },
          {ID:4, Name:"james", Status:"Busy" }]
    },
    {
      Region:"West",Members:[
        {ID:1, Name:"Ford", Status:"Available" },
        {ID:2, Name:"Miller", Status:"Available"},
        {ID:3, Name:"Jones", Status:"Busy" },
        {ID:4, Name:"james", Status:"Busy" }]
  },
  {
    Region:"South",Members:[
      {ID:1, Name:"Ford", Status:"Available" },
      {ID:2, Name:"Miller", Status:"Available"},
      {ID:3, Name:"Jones", Status:"Busy" },
      {ID:4, Name:"james", Status:"Busy" }]
},
{
  Region:"North",Members:[
    {ID:1, Name:"Ford", Status:"Available" },
    {ID:2, Name:"Miller", Status:"Available"},
    {ID:3, Name:"Jones", Status:"Busy" },
    {ID:4, Name:"james", Status:"Busy" }]
}
    ];
  }

  onProjectChange($event){
    if($event.target.innerHTML=="Project A")
    {
      this.ProjectCost=12345;
    this.CurrentExpenditure=12345;
    this.AvailableFunds=12345;
    }else if($event.target.innerHTML=="Project B")
    {
      this.ProjectCost=22222;
    this.CurrentExpenditure=22222;
    this.AvailableFunds=22222;
    }
    else if($event.target.innerHTML=="Project C")
    {
      this.ProjectCost=33333;
    this.CurrentExpenditure=33333;
    this.AvailableFunds=33333;
    }
    else if($event.target.innerHTML=="Project D")
    {
      this.ProjectCost=44444;
    this.CurrentExpenditure=44444;
    this.AvailableFunds=44444;
    }
  }

}
