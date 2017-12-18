import config from 'config';
import moment from 'moment';
import * as dynamodb from '../lib/dynamodb';
import {
  generateId,
} from './utils';

export default class User {
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
  remove() {
    return User.removeById(this.data.id);
  }
  static removeById(id) {
    return dynamodb.deleteItem(id, {
      key: 'id',
      tableName: config.get('tables.users.tableName'),
      region: config.get('tables.users.region'),
    });
  }
  static getById(id) {
    const item = dynamodb.getItem(id, {
      key: 'id',
      tableName: config.get('tables.users.tableName'),
      region: config.get('tables.users.region'),
    });
    if (!item) {
      return null;
    }
    return new User(item);
  }
}
