import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Smooth scroll to sections
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    this.closeMenu(); // Close mobile menu after clicking
  }
}
