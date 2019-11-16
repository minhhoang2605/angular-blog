import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { Observable, Subject } from 'rxjs';

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

  getSubscription(subscription: string, params?: any): Observable<any> {
    const observable = new Subject();
    API.graphql(graphqlOperation(subscription, params))
        .subscribe((response: any) => {
      observable.next(response);
    }, error => {
      const newError = Error("GraphQLService failed to subscribe");
      observable.error(newError);
    });
    return observable;
  }
}
