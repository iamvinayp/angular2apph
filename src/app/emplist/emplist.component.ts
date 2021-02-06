import { Component, OnInit } from '@angular/core';
import { IEmployee } from './emp.interface';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  providers: [EmpService]
})
export class EmplistComponent implements OnInit {

  columnSpan: number = 10;
  showDetails: boolean = false;
  // employees: any[];
  employees: IEmployee[];
  selected: string = "All";
  // employees: any[] = [
  //   {
  //       code: 'emp101', name: 'Tom', gender: 'Male',
  //       annualSalary: 5500, dateOfBirth: '25/6/1988'
  //   },
  //   {
  //       code: 'emp102', name: 'Alex', gender: 'Male',
  //       annualSalary: 5700.95, dateOfBirth: '9/6/1982'
  //   },
  //   {
  //       code: 'emp103', name: 'Mike', gender: 'Male',
  //       annualSalary: 5900, dateOfBirth: '12/8/1979'
  //   },
  //   {
  //       code: 'emp104', name: 'Mary', gender: 'Female',
  //       annualSalary: 6500.826, dateOfBirth: '14/10/1980'
  //   }
  // ];
  statusMsg: string = "Loading ...";

  constructor (private _empService: EmpService)  {
    // this.employees = [
    //   {
    //     code: 'emp101', name: 'Tom', gender: 'Male',
    //     annualSalary: 5500, dateOfBirth: '6/25/1988'
    //   },
    //   {
    //     code: 'emp102', name: 'Alex', gender: 'Male',
    //     annualSalary: 5700.95, dateOfBirth: '6/9/1982'
    //   },
    //   {
    //     code: 'emp103', name: 'Mike', gender: 'Male',
    //     annualSalary: 5900, dateOfBirth: '8/12/1979'
    //   },
    //   {
    //     code: 'emp104', name: 'Mary', gender: 'Female',
    //     annualSalary: 6500.826, dateOfBirth: '10/14/1980'
    //   }
    // ];
  }

  getEmployees(): void {
    // this.employees = [
    //     {
    //         code: 'emp101', name: 'Tom', gender: 'Male',
    //         annualSalary: 5500, dateOfBirth: '6/25/1988'
    //     },
    //     {
    //         code: 'emp102', name: 'Alex', gender: 'Male',
    //         annualSalary: 5700.95, dateOfBirth: '6/9/1982'
    //     },
    //     {
    //         code: 'emp103', name: 'Mike', gender: 'Male',
    //         annualSalary: 5900, dateOfBirth: '8/12/1979'
    //     },
    //     {
    //         code: 'emp104', name: 'Mary', gender: 'Female',
    //         annualSalary: 6500.826, dateOfBirth: '10/14/1980'
    //     },
    //     {
    //         code: 'emp105', name: 'Nancy', gender: 'Female',
    //         annualSalary: 6700.826, dateOfBirth: '12/15/1982'
    //     },
    // ];
  }

  getEmpCode(index: number, employee: any): string {
    return employee.code;
  }

  getAllEmployees(): number {
    return this.employees.length;
  }

  getMaleEmployees(): number {
    return this.employees.filter(emp => emp.gender.toLowerCase() == 'male').length;
  }

  getFemaleEmployees(): number {
    return this.employees.filter(emp => emp.gender.toLowerCase() == 'female').length;
  }

  onSelectChange(selected: string): void {
    this.selected = selected;
  }

  // ngOnInit() {
  //   this.employees = this._empService.getEmployees();
  // } 

  ngOnInit() {
    this._empService.getEmployees()
    .subscribe(empData => this.employees = empData,
      error => {
        console.log(error);
        this.statusMsg = "We are experiencing some technical difficulties. Please try again later";
      });
  }

}
