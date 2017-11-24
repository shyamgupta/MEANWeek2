import { Component } from '@angular/core';

@Component({
    selector: 'app-switch',
    templateUrl: 'switch.component.html',
    styleUrls: ['switch.component.css']
})
export class SwitchComponent{
    state: boolean = false;
    value: string = "OFF";
    clickMe(event){
        this.state = !this.state;
        this.value = (this.state) ? "ON":"OFF";
        return this.state;
    }
}