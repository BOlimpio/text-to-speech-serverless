import { Component, OnInit } from '@angular/core';
import { ConvertText } from '../model/convert-text.model';
import { ContentService } from '../services/content.service'

interface Speaker {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  speakers: Speaker[] = [
    {value: 'Joanna', viewValue: 'Joanna [English]'},
    {value: 'Cristiano', viewValue: 'Cristiano [Portuquese]'},
    {value: 'Mizuki', viewValue: 'Mizuki [Japanese]'},
    {value: 'Carla', viewValue: 'Carla [Italian]'},
  ];

  selectedSpeaker = this.speakers[1].value;

  public content:string = ""
  getInput(){
    console.log(this.content);
  }

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
  }

  convertToAudio (convertText:ConvertText){
    this.contentService.postConvertText(convertText)
  }

}
