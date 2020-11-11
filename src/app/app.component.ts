import { Component, OnInit } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  students: any;
  name: string;
  age: number;
  address: string;

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.getStudents().subscribe((data) => {
      this.students = data.map((e) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'],
          age: e.payload.doc.data()['age'],
          address: e.payload.doc.data()['address'],
        };
      });
    });
  }

  createRecord() {
    let record = {};

    record['name'] = this.name;
    record['age'] = this.age;
    record['address'] = this.address;

    this.crudService
      .createStudent(record)
      .then((resp) => {
        this.name = '';
        this.age = undefined;
        this.address = '';
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
