import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  navigation = [
    {
      title: 'Dashboard',
      icon: 'speedometer',
    },
    {
      title: 'Cases',
      icon: 'briefcase',
      url: '/cases',
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
      icon: 'hotel',
    },
    {
      title: 'Residents',
      icon: 'multiple',
    },
    {
      title: 'Keys',
      icon: 'access-key',
    },
    {
      title: 'Parcels',
      icon: 'box-ribbon',
    },
    {
      title: 'Contractors',
      icon: 'badge',
    },
    {
      title: 'Settings',
      icon: 'setup-preferences',
    },
    {
      title: 'Covide-10 track',
      icon: 'virus',
      color: '#EE9002',
    },
  ];
}
