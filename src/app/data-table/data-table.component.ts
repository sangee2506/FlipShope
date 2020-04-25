import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { companyData } from '../companyData';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
 displayedColumns: string[] = ['name', 'email', 'age', 'medicine','options'];
  public dataSource = new MatTableDataSource<companyData>();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dataservice:DataService) { }

  ngOnInit() {
   this.getData();
   
 }
 
getData(){ 
  this.dataservice.getData().subscribe(
  res => {
    this.dataSource.data = res as companyData[];
    this.dataSource.sort = this.sort;
  })
 }

 delete(id:number)
 {
 this.dataservice.deleteData(id).subscribe(
   (data:companyData)=>{
     this.getData()
    });
 
  }

  edit(data:companyData)
  {
     this.dataservice.currentData=(Object.assign({},data))
  }
}
