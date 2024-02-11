import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  
  constructor(private router: Router) {}
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  eventCards: any[] = [
    {
      imageUrl: '../../assets/Event1.jpg',
      title: 'Agenda for the week- Tools/Platforms/ Methodologies in Data',
      subheader: 'Hosted By : Vishwa',
      dateTime: 'Mon, FEB 12 - 10.00 AM',
      mode: 'ONLINE',
      attending: 99,
      ticket: 'FREE',
    },
    {
      imageUrl: '../../assets/event2.jpg',
      title: 'Webinar on "Generative AI using AWS Bedrock" on 13 FEB 2024',
      subheader: 'Hosted By : Viraj',
      dateTime: 'Tue, FEB 13 - 11.00 AM',
      mode: 'ONLINE',
      attending: 99,
      ticket: 'FREE',
    },
    {
      imageUrl: '../../assets/event3.jpg',
      title:
        'Finance Professional Networking Forum - Meet and Greet 28 Jan 2024, 07:00 PM',
      subheader: 'Hosted By : Ram',
      dateTime: 'Thu, FEB 15 - 07.00 PM',
      mode: 'IN-PERSON',
      attending: 150,
      ticket: '500₹',
    },
    {
      imageUrl: '../../assets/Banner.jpg',
      title: 'Agenda for the week- Tools/Platforms/ Methodologies in Data',
      subheader: 'Hosted By : Vishwa',
      dateTime: 'Mon, FEB 12 - 10.00 AM',
      mode: 'HYBRID',
      attending: 75,
      ticket: 'FREE',
    },
    {
      imageUrl: '../../assets/Event1.jpg',
      title: 'Agenda for the week- Tools/Platforms/ Methodologies in Data',
      subheader: 'Hosted By : Vishwa',
      dateTime: 'Mon, FEB 12 - 10.00 AM',
      mode: 'ONLINE',
      attending: 99,
      ticket: '1000₹',
    },
    {
      imageUrl: '../../assets/event2.jpg',
      title: 'Webinar on "Generative AI using AWS Bedrock" on 13 FEB 2024',
      subheader: 'Hosted By : Viraj',
      dateTime: 'Tue, FEB 13 - 11.00 AM',
      mode: 'ONLINE',
      attending: 99,
      ticket: 'FREE',
    },
    {
      imageUrl: '../../assets/event3.jpg',
      title:
        'Finance Professional Networking Forum - Meet and Greet 28 Jan 2024, 07:00 PM',
      subheader: 'Hosted By : Ram',
      dateTime: 'Thu, FEB 15 - 07.00 PM',
      mode: 'IN-PERSON',
      attending: 150,
      ticket: '600₹',
    },
    {
      imageUrl: '../../assets/Banner.jpg',
      title: 'Agenda for the week- Tools/Platforms/ Methodologies in Data',
      subheader: 'Hosted By : Vishwa',
      dateTime: 'Mon, FEB 12 - 10.00 AM',
      mode: 'HYBRID',
      attending: 75,
      ticket: 'FREE',
    },
  ];
navToEvent() {
      this.router.navigate(['/event-details']);
  }
  navToHostEvent(){
    this.router.navigate(['/host-event']);
  }
}
