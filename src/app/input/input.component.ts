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

  response? : string

  speakers: ConvertText[] = [
    {voice: 'Joanna [English]',text: "Joanna",id: ""},
    {voice: 'Cristiano [Portuquese]',text:"Cristiano",id:""},
    {voice: 'Mizuki [Japanese]',text:"Mizuki",id:""},
    {voice: 'Carla [Italian]',text:"Carla",id:""},
  ];

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
    this.contentService.postConvertText(convertText).subscribe(resultado => this.response = resultado.toString())
    this.content = {voice:convertText.voice,text:"",id:""}
  }

}
