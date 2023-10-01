import { Injectable } from '@angular/core';
import { HubConnectionBuilder, HubConnection } from '@microsoft/signalr';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class PresenceService {
  // hubUrl = environment.hubUrl;
  hubUrl = 'https://localhost:5001/hubs/';
  private hubConnection?: HubConnection;

  constructor(private toastr: ToastrService) {}
  @Injectable({
    providedIn: 'root',
  })
  createHubConnection(user: User): void {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl + 'presence', {
        accessTokenFactory: () => user.token,
      })
      .withAutomaticReconnect()
      .build();

    this.hubConnection.start().catch((error) => console.log(error));

    this.hubConnection.on('UserIsOnline', (username) => {
      this.toastr.info(username + ' has connected');
    });

    this.hubConnection.on('UserIsOffline', (username) => {
      this.toastr.warning(username + ' has disconnected');
    });
  }

  stopHubConnection(): void {
    this.hubConnection?.stop().catch((error) => console.log(error));
  }
}
