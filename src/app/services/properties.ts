import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
// / getProperties(): Observable<any> {
//     return this.http.post(`${this.baseUrl}/search/published_list_view`, {});
//   }

  // getPropertyDetails(auction_id: number): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/published_form`, { auction_id });
  // }
  private baseUrl = 'https://app.boli.ae/api/property';
  // private LIST_URL = 'https://app.boli.ae/api/auction/list'; 

  // constructor(private http: HttpClient) {}

  // // Get all properties
  getProperties(): Observable<any> {
    return this.http.post(`${this.baseUrl}/search/published_list_view`, {});
  }

  // getPropertyDetails(auction_id: number): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/published_form`, { auction_id });
  // }

  // searchProperties(query: string): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/search/published_list_view`, { search: query });
  // }

  // generateList(payload: { auction_id: number }): Observable<any> {
  //   return this.http.post<any>(this.LIST_URL, payload);
  // }
    response: any;
  records: any[] = [];
  constructor(private http: HttpClient) {}

  private ListURL = 'https://app.boli.ae/api/property/search/published_list_view';
  private apiUrl = 'https://app.boli.ae/api/property/published_form';

  generatelist(payload: {
    auction_id: number;
  }) {
    return this.http.post<any>(this.ListURL, payload);
  }

  generateListDetail(payload: {
    auction_id: number;
  }) {
    console.log()
    return this.http.post<any>(this.apiUrl, payload);
  }
}
