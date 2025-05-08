// src/app/services/statistics.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StatisticsRequest, StatisticsResult } from '../models/statistics';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({ providedIn: 'root' })
export class StatisticsService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  calculateStats(payload: StatisticsRequest): Observable<StatisticsResult> {
    const apiUrl = `${this.config.apiUrl}/calculate`;
    if (payload.lowerLimit >= payload.upperLimit) {
      return throwError(() => new Error('The upper limit must be greater than the lower limit.'));
    }

    return this.http
      .post<StatisticsResult>(apiUrl, payload)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    const msg = err.error?.message || err.statusText || 'Unknown error';
    return throwError(() => new Error(`API Error: ${msg}`));
  }
}
