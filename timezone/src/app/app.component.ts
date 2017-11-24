import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTime:string;
  state = {
    'pst': "",
    'mst':"",
    'est':"",
    'cst':""
  }

  clickMe(event): string{
    if(event.target.value ==="PST"){
      this.currentTime = new Date().toLocaleString("en-US",{timeZone: "America/Los_Angeles"});
      this.state.pst = "clicked";
      this.state.mst = "";
      this.state.cst = "";
      this.state.est = "";
      return this.currentTime;
    }
    if(event.target.value ==="MST"){
      this.currentTime = new Date().toLocaleString("en-US",{timeZone: "America/Denver"});
      this.state.pst = "";
      this.state.mst = "clicked";
      this.state.cst = "";
      this.state.est = "";
      return this.currentTime;
    }
    if(event.target.value ==="EST"){
      this.currentTime = new Date().toLocaleString("en-US",{timeZone: "America/New_York"});
      this.state.pst = "";
      this.state.mst = "";
      this.state.cst = "";
      this.state.est = "clicked";
      return this.currentTime;
    }
    if(event.target.value ==="CST"){
      this.currentTime = new Date().toLocaleString("en-US",{timeZone: "America/Chicago"});
      this.state.pst = "";
      this.state.mst = "";
      this.state.cst = "clicked";
      this.state.est = "";
      return this.currentTime;
    }
    if(event.target.value ==="clear"){
      this.currentTime = "";
      for(let key in this.state){
        this.state[key]="";
      }
      return this.currentTime;
    }

  }

  
    
}
