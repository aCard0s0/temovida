import { Component } from '@angular/core';

@Component({
  selector: 'simple-header',
  imports: [],
  templateUrl: './simple-header.html',
  styleUrl: './simple-header.scss'
})
export class SimpleHeader {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
