import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from '../../_model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url: string = 'assets/employees.json';
  constructor(private _httpClient:HttpClient){}

  getEmployeeInfo(){
    return this._httpClient.get<Employee[]>(this.url)
  }
}
