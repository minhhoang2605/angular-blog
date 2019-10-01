import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor() { }

  async query(query: string, params?: any): Promise<any> {
    try {
      return await API.graphql(graphqlOperation(query, params));
    } catch (error) {
      return Promise.reject(Error('Failed to send query'));
    }
  }
}
