import config from 'config';
import moment from 'moment';
import * as dynamodb from '../lib/dynamodb';
import {
  generateId,
} from './utils';

class User {
  constructor(data) {
    this.data = data;
    if (!this.data.id) {
      this.isNew = true;
      this.data.createdAt = moment().unix();
      this.data.id = generateId();
    }
  }
  save() {
    return dynamodb.putItem(this.data, {
      tableName: config.get('tables.users.tableName'),
      region: config.get('tables.users.region'),
    });
  }
  static getByID(id) {
    return dynamodb.getItem(id, {
      tableName: config.get('tables.users.tableName'),
      region: config.get('tables.users.region'),
    });
  }
}

export default class Beekeeper extends User {

}
