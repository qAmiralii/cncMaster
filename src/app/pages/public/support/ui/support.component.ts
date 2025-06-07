import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-support',
  imports: [
    MatCard,
    MatButton,
    MatExpansionModule
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {
  supportItems = [
    {
      title: 'Chat support',
      description: 'Chat live with the support team.',
      icon: '/img/support/chat_support.png'
    },
    {
      title: 'Send ticket',
      description: 'Register and track your ticket.',
      icon: '/img/support/ticket_support.png'
    },
    {
      title: 'Call',
      description: 'Contact us at our contact number.',
      icon: '/img/support/phone_support.png'
    }
  ];

  faqs = [
    {
      question: 'How can I register a ticket?',
      answer: 'You can submit your request through the "Submit Ticket" section on this page.'
    },
    {
      question: 'What is the response time?',
      answer: 'In most cases, a response is received in less than 24 hours.'
    }
  ];
}

