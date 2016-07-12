import { Component } from '@angular/core';
@Component({
    templateUrl: 'home.html'
})
export class HomeComponent {

    hero = {};

    constructor()  {

        this.hero.name = "Vincent";

    }



 }