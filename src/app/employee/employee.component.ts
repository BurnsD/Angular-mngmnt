import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {


  employee1 = [
    {
      employeeId: 1001,
      employeeName: 'Dustin Burns',
      employeeSalary: 65000,
      employeeTitle: 'Developer',
      employeeImg: '../../assets/Dustin.jpg',
    },
  ];

  employee2 = [
    {
      employeeId: 1002,
      employeeName: 'David Thomas',
      employeeSalary: 135000,
      employeeTitle: 'Lead Developer',
      employeeImg: 'assets/David.jpg',
    },
  ];
  employee3 = [
    {
      employeeId: 1003,
      employeeName: 'James Gosling',
      employeeSalary: 165000,
      employeeTitle: 'Lead Engineer',
      employeeImg: 'assets/James.jpg',
    },
  ];
  employee4 = [
    {
      employeeId: 1004,
      employeeName: 'Linus Torvalds',
      employeeSalary: 155000,
      employeeTitle: 'Linux Support',
      employeeImg: 'assets/Linus.jpg',
    },
  ];
  employee5 = [
    {
      employeeId: 1005,
      employeeName: 'Bjarne Stroustrup',
      employeeSalary: 95000,
      employeeTitle: 'Engineer',
      employeeImg: 'assets/Bjarne.jpg',
    },
  ];
  employee6 = [
    {
      employeeId: 1006,
      employeeName: 'Rushabh Mehta',
      employeeSalary: 195000,
      employeeTitle: 'Director',
      employeeImg: 'assets/Rushabh.jpg',
    },
  ];
}
