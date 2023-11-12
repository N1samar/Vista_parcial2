import { Component, OnInit } from '@angular/core';
import { SocketClientService } from './core/services/socket-client.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'field-service-frontend';

  constructor(
    private socketService: SocketClientService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.socketService.listenin('operator-position').subscribe((data) => {
      console.log(data);
    });
  }
}
