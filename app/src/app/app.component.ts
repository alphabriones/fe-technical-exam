import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fe-technical-exam';
  navigation = [
    {
      title: 'Dashboard',
      icon: 'speedometer',
    },
    {
      title: 'Cases',
      icon: 'briefcase',
    },
    {
      title: 'Work Order Sent',
      icon: 'send',
    },
    {
      title: 'Calendar',
      icon: 'calendar',
    },
    {
      title: 'Maintenance Schedule',
      icon: 'recipe',
    },
    {
      title: 'Building',
      icon: 'recipe',
    },
    {
      title: 'Residents',
      icon: 'recipe',
    },
    {
      title: 'Keys',
      icon: 'recipe',
    },
    {
      title: 'Parcels',
      icon: 'recipe',
    },
    {
      title: 'Contractors',
      icon: 'recipe',
    },
    {
      title: 'Settings',
      icon: 'recipe',
    },
    {
      title: 'Covide-10 track',
      icon: 'recipe',
    },
  ];
}
