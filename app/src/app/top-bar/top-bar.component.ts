import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  topBar = [
    {
      title: 'Community',
      icon: 'b-meeting',
    },
    {
      title: 'Broadcast',
      icon: 'loudspeaker',
    },
    {
      title: 'Shift Log',
      icon: 'connected_tv',
    },
    {
      title: 'Lobby Screen',
      icon: 'agenda-bookmark',
    },
  ];
}
