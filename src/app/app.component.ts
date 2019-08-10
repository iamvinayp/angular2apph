import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  columnSpan: number = 10;
  firstName: string = 'Tom';
  lastName: string = 'Hanks';
  gender: string = 'Male';
  age: number = 20;
  showDetails: boolean = false;
  name: string = "Vinay";
  employees: any[];

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

  // constructor ()  {
  //   this.employees = [
  //     {
  //       code: 'emp101', name: 'Tom', gender: 'Male',
  //       annualSalary: 5500, dateOfBirth: '6/25/1988'
  //     },
  //     {
  //       code: 'emp102', name: 'Alex', gender: 'Male',
  //       annualSalary: 5700.95, dateOfBirth: '6/9/1982'
  //     },
  //     {
  //       code: 'emp103', name: 'Mike', gender: 'Male',
  //       annualSalary: 5900, dateOfBirth: '8/12/1979'
  //     },
  //     {
  //       code: 'emp104', name: 'Mary', gender: 'Female',
  //       annualSalary: 6500.826, dateOfBirth: '10/14/1980'
  //     }
  //   ];
  // }

  // getEmployees(): void {
  //   this.employees = [
  //       {
  //           code: 'emp101', name: 'Tom', gender: 'Male',
  //           annualSalary: 5500, dateOfBirth: '6/25/1988'
  //       },
  //       {
  //           code: 'emp102', name: 'Alex', gender: 'Male',
  //           annualSalary: 5700.95, dateOfBirth: '6/9/1982'
  //       },
  //       {
  //           code: 'emp103', name: 'Mike', gender: 'Male',
  //           annualSalary: 5900, dateOfBirth: '8/12/1979'
  //       },
  //       {
  //           code: 'emp104', name: 'Mary', gender: 'Female',
  //           annualSalary: 6500.826, dateOfBirth: '10/14/1980'
  //       },
  //       {
  //           code: 'emp105', name: 'Nancy', gender: 'Female',
  //           annualSalary: 6700.826, dateOfBirth: '12/15/1982'
  //       },
  //   ];
  // }

  // getEmpCode(index: number, employee: any): string {
  //   return employee.code;
  // }

  onClick(): void {
    alert('Woot! You clicked me!');
  } 

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

}
