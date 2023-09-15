import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  padding: string = 'py-4';
  @HostListener('window:scroll')
  scrolled() {
    if (window.scrollY > 40) {
      this.padding = 'py-2';
    } else {
      this.padding = 'py-4';
    }
  }
}
