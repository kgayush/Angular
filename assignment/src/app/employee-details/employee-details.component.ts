import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 
  employeeModel=new Employee('Harry Potter','Hogwarts', 9876543210, new Date('09/12/2000'), 'harry@gmail.com');
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employeeModel);
  }

}
