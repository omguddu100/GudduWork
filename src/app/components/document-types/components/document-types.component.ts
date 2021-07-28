import { Component,OnInit} from '@angular/core';


export interface PeriodicElement {
  DocumentType: string;
  position: number;
  Language: string;
  Domain: string;
  Intents:number;
  Entities:number; 
  Documents:number; 
  Assigned:number;
  Tagged:number;
  Trained:number;
  Status:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, DocumentType: 'Cash Reimbursable', Language: "English" , Domain: 'Supplier Contracts', Intents:12, Entities:96, Documents:12, Assigned:3, Tagged:6,Trained:3,Status:'Trained' },
  {position: 1, DocumentType: 'Fixed Price', Language: "English" , Domain: 'Supplier Contracts', Intents:12, Entities:96, Documents:12, Assigned:3, Tagged:6,Trained:3,Status:'Assigned' },
  {position: 1, DocumentType: 'Time and Materials', Language: "English" , Domain: 'Supplier Contracts', Intents:12, Entities:96, Documents:12, Assigned:3, Tagged:6,Trained:3,Status:'Draft' },
  {position: 1, DocumentType: 'Distribution', Language: "English" , Domain: 'Supplier Contracts', Intents:12, Entities:96, Documents:12, Assigned:3, Tagged:6,Trained:3,Status:'Assigned' },
  {position: 1, DocumentType: 'Indefinite Delivery', Language: "English" , Domain: 'Supplier Contracts', Intents:12, Entities:96, Documents:12, Assigned:3, Tagged:6,Trained:3,Status:'Draft' },
  {position: 1, DocumentType: 'Cash Reimbursable', Language: "English" , Domain: 'Supplier Contracts', Intents:12, Entities:96, Documents:12, Assigned:3, Tagged:6,Trained:3,Status:'Tagged' },
  {position: 1, DocumentType: 'Letter Subcontract', Language: "English" , Domain: 'Supplier Contracts', Intents:12, Entities:96, Documents:12, Assigned:3, Tagged:6,Trained:3,Status:'Assigned' },
  {position: 1, DocumentType: 'Cash Reimbursable', Language: "English" , Domain: 'Supplier Contracts', Intents:12, Entities:96, Documents:12, Assigned:3, Tagged:6,Trained:3,Status:'Tagged' },
  {position: 1, DocumentType: 'Time and Materials', Language: "English" , Domain: 'Supplier Contracts', Intents:12, Entities:96, Documents:12, Assigned:3, Tagged:6,Trained:3,Status:'Validated' },
  {position: 1, DocumentType: 'Cash Reimbursable', Language: "English" , Domain: 'Supplier Contracts', Intents:12, Entities:96, Documents:12, Assigned:3, Tagged:6,Trained:3,Status:'Assigned' },
  {position: 1, DocumentType: 'Time and Materials', Language: "English" , Domain: 'Supplier Contracts', Intents:12, Entities:96, Documents:12, Assigned:3, Tagged:6,Trained:3,Status:'Modelled' },

 
];
@Component({
  selector: 'app-document-types',
  templateUrl: './document-types.component.html',
  styleUrls: ['./document-types.component.scss']
})


export class DocumentTypesComponent implements OnInit {

  constructor() { }
  titleData=
  {
    level1:"Document Typess",
    btn1:'Download',
    btn2:'Create New Document Type',
      
  }


  addActive: string ='Assigned'

  findList(key:any){
    this.searchkey=key
    this.addActive = key;
  }

  searchkey:any='Assigned'
  ngOnInit(): void {
  }
  
  data: PeriodicElement[] = ELEMENT_DATA;
 

}

