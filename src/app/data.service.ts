import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { catchError, map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { companyData } from './companyData';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000"  //port in which JSON SERVER runs
 

  currentData:companyData={
    id:null,
    name:'',
    email:'',
    medicine:'',
    age:null,
    country:''
  }

  getData():Observable<companyData[]>
  {
   return this.http.get<companyData[]>(this.url+"/companyData").pipe(
  retry(3)
  )
  }

  deleteData(id:number):Observable<companyData>
  {
   return this.http.delete<companyData>(this.url+"/companyData"+"/"+id).pipe(
  retry(3)
  )
  }

  createData(compdata:companyData):Observable<companyData>
  {
    return this.http.post<companyData>(this.url+"/companyData",compdata,headerOption).pipe(
      retry(3)
      );
  }
  editData(compdata:companyData):Observable<companyData>
  {
    return this.http.put<companyData>(this.url+"/companyData/"+compdata.id,compdata,headerOption).pipe(
      retry(3)
      );
  }
}
