import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  publicUrl: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  public getAllPlayers() {
    return this.http.get(`${this.publicUrl}/players`);
  }

  public updatePlayer(id: any, body: any) {
    return this.http.patch(`${this.publicUrl}/players/update/${id}`, body);
  }
}
