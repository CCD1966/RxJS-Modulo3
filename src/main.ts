
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { of, Subscription, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})

export class App implements OnInit, OnDestroy {
  name = 'Angular';

  sub!: Subscription;
  subArray!: Subscription;
  subFrom!: Subscription;
  subString!: Subscription;
  subEvent!: Subscription;
  subKey!: Subscription;

  ngOnInit() {
    /* this.sub = of(2, 4, 6).subscribe(item => console.log('Value from of:', item));
    this.subArray = of([1, 2, 3]).subscribe(item => console.log('Value from of array:', item));
    this.subFrom = from([20, 15, 10, 5]).subscribe({
      next: (apple: any) => console.log('Apple emmited', apple),
      error: (err: any) => console.log('Error occurred', err),
      complete: () => console.log('No more apples,go home')
    })
    this.subString = of('Apple1', 'Apple2', 'Apple3').subscribe({
      next: (apple) => console.log('Apple emmited', apple),
      error: (err) => console.log('Error occurred', err),
      complete: () => console.log('No more apples,go home')
    }); */
    this.subEvent = fromEvent(document, 'click').subscribe({
      next: ev => console.log('Clicked', ev),
      error: err => console.log('Error occurred', err),
      complete: () => console.log('No more clicks,go home'),
    });
    const keys: string[] = [];
    this.subKey = fromEvent(document, 'keydown').subscribe(
      ev => {
        keys.push((ev as KeyboardEvent).key);
        console.log('Key Array:', keys);
      });
  }

    ngOnDestroy() {
      this.sub.unsubscribe();
      this.subArray.unsubscribe();
      this.subFrom.unsubscribe();
      this.subEvent.unsubscribe();
    }
  }

  bootstrapApplication(App);
