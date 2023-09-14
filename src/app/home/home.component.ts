import { Component } from "@angular/core";

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent{
    name:string='hamada';
    imgwidth:number=200
    welcome(){
        alert("Welcome"+this.name)
    }
    title = 'my-Home';
}