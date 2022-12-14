import { Component} from '@angular/core';
import { ContentService } from '../services/content.service'
import { TableContent } from '../model/table-content.model';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public content:string = ""
  getInput(){
    console.log(this.content);
  }

  dataSource : TableContent[] = []
  
  public ELEMENT_DATA: TableContent[] = [
    // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns: string[] = ['id', 'voice', 'content', 'status', 'player'];

  constructor(
    private contentService: ContentService
  ) { }
  // validate what the lambda function returns to populate the table

  getAudio (id:string){
    this.contentService.getAudios(id).subscribe(resultado => {
      console.log(resultado)
      this.ELEMENT_DATA = resultado
      
      this.dataSource = this.ELEMENT_DATA;
    })

  }


}
