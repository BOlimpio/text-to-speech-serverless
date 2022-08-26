import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public content:string = ""
  getInput(){
    console.log(this.content);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
