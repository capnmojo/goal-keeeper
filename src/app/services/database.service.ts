import { Injectable } from '@angular/core';
import {
  doc,
  collection,
  collectionData,
  docData,
  Firestore,
  query,
} from '@angular/fire/firestore';
import { where, WhereFilterOp } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private firestore: Firestore) {}

  async getOne(collectionName: string, id: string) {
    const docRef = doc(this.firestore, `${collection}/${id}`);
    return docData(docRef);
  }

  async getAll(collectionName: string) {
    const collectionReference = collection(this.firestore, collectionName);
    return collectionData(collectionReference);
  }

  async queryDb(collectionName: string, dbWhere: DBWhere) {
    const collectionReference = collection(this.firestore, collectionName);
    query(
      collectionReference,
      where(dbWhere.key, dbWhere.operator, dbWhere.value)
    );
  }
}

export interface DBWhere {
  key: string;
  operator: WhereFilterOp;
  value: string;
}
