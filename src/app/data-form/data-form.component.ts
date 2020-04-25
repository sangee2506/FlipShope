import { Component, OnInit, Input } from '@angular/core';

import { companyData } from '../companyData';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

interface Medicine{
  value:string;
  display:string;
}
interface Country{
  value:string;
  display:string
}
@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

medicine:Medicine[]=[
    {display:'Ecosprin',value:'Ecosprin'},{ display:'Paracetamol',value:'chemistry'},
     {display:'Ranitidine',value:'Ranitidine'}, {display:'Citrizine',value:'Citrizine'},
      {display:'Disprin',value:'Disprin'}
    ];
 country:Country[]=[
      {display:'India',value:'India'},{ display:'Brazil',value:'Brazil'},
       {display:'USA',value:'USA'}, {display:'Australia',value:'Australia'},
        {display:'China',value:'China'}
      ];

constructor(public dataservice:DataService) {
    
   }

  ngOnInit(){}
    
  
onSubmit(form:NgForm) {
  if(!form.valid) return
} 

submit(currentData:companyData){
  console.log(currentData)
  if(currentData.id!=null)
     this.update(currentData)
  else
     this.create(currentData)   
  

}  

create(data:companyData)
{
   this.dataservice.createData(data).subscribe();
}
update(data:companyData)
{
  this.dataservice.editData(data).subscribe();
}

reset(form:NgForm){
  form.resetForm();
}

}



