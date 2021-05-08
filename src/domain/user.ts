import { v4 as uuidv4 } from 'uuid';

export class User {
  id: string;
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    if (!firstName || !lastName || lastName === '' || firstName === '') {
      throw Error('Names cannot be null or empty.');
    }
    this.id = uuidv4();
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
