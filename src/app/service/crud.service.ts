import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private firestore: AngularFirestore) {}

  createStudent(record) {
    return this.firestore.collection('Student').add(record);
  }

  getStudents() {
    return this.firestore.collection('Student').snapshotChanges();
  }
}
