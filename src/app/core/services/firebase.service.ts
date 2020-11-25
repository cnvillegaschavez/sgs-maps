import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { IUserInfo } from '../interfaces/userinfo.interface';
import { CommonConstants } from 'src/app/shared/common/constants-common';

@Injectable()
export class FirebaseService {

  constructor(private firestore: AngularFireDatabase){
  }

  public addUser(data: IUserInfo): void {
    const itemRef = this.firestore.object('items');
    const listRef = this.firestore.list('items');
    listRef.valueChanges().subscribe(r => {
      sessionStorage.setItem(CommonConstants.users, JSON.stringify(r));
    });

    const userList = sessionStorage.getItem(CommonConstants.users);
    if (userList) {
      const userArray = JSON.parse(userList) as IUserInfo[];
      const userItem = userArray.find(a => a.userName === data.userName);
      if (!userItem){
        userArray.push(data);
        itemRef.set(userArray);
      }
    } else {
      const list = [data];
      itemRef.set(list);
    }
  }
}
