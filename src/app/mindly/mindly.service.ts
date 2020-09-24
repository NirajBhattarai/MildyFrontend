import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from './portfolio';

@Injectable({
  providedIn: 'root'
})
export class MindlyService {

  private portfolioUrl: string;


  constructor(private http: HttpClient) {
    this.portfolioUrl = 'http://localhost:8080/mindly';
  }

  public findAll(): Observable<Portfolio[]> {

    return this.http.get<Portfolio[]>(this.portfolioUrl);
  }

  public save(portfolio: Portfolio) {
    return this.http.post<Portfolio>(this.portfolioUrl, portfolio);
  }

  public deletePortfolio(portfolio) {
    return this.http.delete(this.portfolioUrl + "/" + portfolio.id);
  }
}
