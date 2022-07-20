import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../../_model/employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  errorMsg = '';
  employeeName: any;
  title = 'Employee Table';

  headers = ['Name', 'ID', 'Salary', 'Title'];

  employees:Employee [] = [];
  constructor(empService: EmployeeService) {

    empService.getEmployeeInfo().subscribe(
      (res) => (this.employees = res),
      (error) => (this.errorMsg = error)
    );
  }
  ngOnInit(): void {
     
  }
  Search(){
    if(this.employeeName == ""){
      this.ngOnInit();
    } else {
      this.employees = this.employees.filter(res => {
        return res.employeeName.toLocaleLowerCase().match(this.employeeName.toLocaleLowerCase());
      })
    }
   
  }
  
}
