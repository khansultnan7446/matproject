import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface Employee {
  name: string;
  age: number;
  department: string;
  role: string;
}

@Component({
  selector: 'app-wrapper-mattable',
  templateUrl: './wrapper-mattable.component.html',
  styleUrls: ['./wrapper-mattable.component.css']
})
export class WrapperMattableComponent {
  dataSource: Employee[] = [
    { name: 'Alice', age: 28, department: 'Engineering', role: 'Developer' },
    { name: 'Bob', age: 35, department: 'Marketing', role: 'Manager' },
    { name: 'Charlie', age: 42, department: 'HR', role: 'Recruiter' },
    { name: 'Dave', age: 30, department: 'Engineering', role: 'Tester' }
  ];

  selectedColumns: (keyof Employee)[] = [];

  dropColumn(column: keyof Employee) {
    if (!this.selectedColumns.includes(column)) {
      this.selectedColumns.push(column);
      this.groupBy(column);
    }
  }

  groupBy(column?: keyof Employee) {
    if (column) {
      this.dataSource = this.dataSource.sort((a, b) => (a[column] > b[column] ? 1 : -1));
    } else {
      this.dataSource = [
        { name: 'Alice', age: 28, department: 'Engineering', role: 'Developer' },
        { name: 'Bob', age: 35, department: 'Marketing', role: 'Manager' },
        { name: 'Charlie', age: 42, department: 'HR', role: 'Recruiter' },
        { name: 'Dave', age: 30, department: 'Engineering', role: 'Tester' }
      ];
    }
  }

  removeGrouping(column: keyof Employee) {
    const index = this.selectedColumns.indexOf(column);
    if (index >= 0) {
      this.selectedColumns.splice(index, 1);
      this.groupBy(this.selectedColumns.length ? this.selectedColumns[0] : undefined);
    }
  }

  drop(event: CdkDragDrop<Employee[]>) {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
  }
}
