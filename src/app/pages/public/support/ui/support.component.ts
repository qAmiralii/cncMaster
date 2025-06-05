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
      title: 'پشتیبانی چت',
      description: 'با تیم پشتیبانی به‌صورت زنده گفتگو کنید.',
      icon: 'assets/icons/chat-support.svg'
    },
    {
      title: 'ارسال تیکت',
      description: 'تیکت خود را ثبت کرده و پیگیری کنید.',
      icon: 'assets/icons/ticket-support.svg'
    },
    {
      title: 'تماس تلفنی',
      description: 'با شماره تماس ما در ارتباط باشید.',
      icon: 'assets/icons/phone-support.svg'
    }
  ];

  faqs = [
    {
      question: 'چطور می‌تونم تیکت ثبت کنم؟',
      answer: 'از طریق بخش "ارسال تیکت" در همین صفحه، می‌تونید درخواست خودتون رو ثبت کنید.'
    },
    {
      question: 'زمان پاسخ‌دهی چقدره؟',
      answer: 'در اکثر موارد، پاسخ‌گویی در کمتر از ۲۴ ساعت انجام میشه.'
    }
  ];
}

