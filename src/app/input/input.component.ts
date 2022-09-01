import { Component, OnInit } from '@angular/core';
import { ConvertText } from '../model/convert-text.model';
import { ContentService } from '../services/content.service'

// interface Speaker {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  speakers: ConvertText[] = [
    {voice: 'Joanna [English]',text: "",id: ""},
    {voice: 'Cristiano [Portuquese]',text:"",id:""},
    {voice: 'Mizuki [Japanese]',text:"",id:""},
    {voice: 'Carla [Italian]',text:"",id:""},
  ];

  // selectedSpeaker = this.speakers[1].voice;

  content = new ConvertText(this.speakers[1].voice,"","");
  getInput(){
    console.log(this.content);
  }

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
  }

  convertToAudio (convertText:ConvertText){
    var response = this.contentService.postConvertText(convertText)
    console.log(response)
  }

}
