import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';

@Injectable()
export class GithubServiceProvider {

  private baseURL: string = "https://api.github.com/users";
  private reposURL: string = "repos";

  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User>{
    return this.http.get(`${this.baseURL}/${username}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError)
  }

  getRepositoryInformation(username: string): Observable<Repository[]>{
    return this.http.get(`${this.baseURL}/${username}/${this.reposURL}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError)
  }
  /**
   * Finding user from the REPOSITORY_LIST based on the user name passed to the function.
   * Returns result as an observable
   */

  mockGetRepositoryInformation(username: string): Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username))
  }
  /**
   * Finding user from the USER_LIST based on the user name passed to the function.
   * Returns result as an observable
   */
  mockGetUserInformation(username: string): Observable<User>{
    return Observable.of(USER_LIST.filter(user=> user.name === username)[0]);
  }

  private handleError(error: Response | any){
    return Observable.throw(error.json().error || "Server error.")
  }

  private extractData(response: Response){
    return response.json();
  }

  private logData(response: Response){
    console.log(response);
  }
}
