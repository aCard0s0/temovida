import { Component, OnInit, OnDestroy, Input } from '@angular/core';

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  link?: string;
}

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  @Input() images: CarouselImage[] = [];
  @Input() autoPlay: boolean = true;
  @Input() autoPlayInterval: number = 5000;
  @Input() showIndicators: boolean = true;
  @Input() showArrows: boolean = true;
  @Input() height: string = '400px';

  currentIndex: number = 0;
  autoPlayTimer: any;
  isTransitioning: boolean = false;

  // Default images if none provided
  defaultImages: CarouselImage[] = [
    {
      src: '/assets/images/carousel/consultorio1.jpeg',
      alt: 'Instalações Modernas',
      title: 'Instalações Modernas',
      description: 'Equipamentos de última geração para seu cuidado'
    },
    {
      src: 'assets/images/carousel/consultorio2.jpeg',
      alt: 'Equipe Especializada',
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e experientes'
    },
    {
      src: 'assets/images/carousel/consultorio3.jpeg',
      alt: 'Tecnologia Avançada',
      title: 'Tecnologia Avançada',
      description: 'Diagnósticos precisos com tecnologia de ponta'
    },
    {
      src: 'assets/images/carousel/consultorio4.jpeg',
      alt: 'Cuidado Personalizado',
      title: 'Cuidado Personalizado',
      description: 'Atendimento humanizado focado em você'
    },
    {
      src: 'assets/images/carousel/consultorio5.jpeg',
      alt: 'Consultas Especializadas',
      title: 'Consultas Especializadas',
      description: 'Especialistas em diversas áreas médicas'
    },
    {
      src: 'assets/images/carousel/consultorio6.jpeg',
      alt: 'Tecnologia Avançada',
      title: 'Tecnologia Avançada',
      description: 'Diagnósticos precisos com tecnologia de ponta'
    },
    {
      src: 'assets/images/carousel/consultorio7.jpeg',
      alt: 'Cuidado Personalizado',
      title: 'Cuidado Personalizado',
      description: 'Atendimento humanizado focado em você'
    },
    {
      src: 'assets/images/carousel/consultorio8.jpeg',
      alt: 'Consultas Especializadas',
      title: 'Consultas Especializadas',
      description: 'Especialistas em diversas áreas médicas'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Use provided images or default ones
    if (this.images.length === 0) {
      this.images = this.defaultImages;
    }

    // Start autoplay if enabled
    if (this.autoPlay && this.images.length > 1) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  /**
   * Go to next slide
   */
  nextSlide(): void {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);

    this.resetAutoPlay();
  }

  /**
   * Go to previous slide
   */
  prevSlide(): void {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);

    this.resetAutoPlay();
  }

  /**
   * Go to specific slide
   */
  goToSlide(index: number): void {
    if (this.isTransitioning || index === this.currentIndex) return;

    this.isTransitioning = true;
    this.currentIndex = index;

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);

    this.resetAutoPlay();
  }

  /**
   * Start autoplay
   */
  private startAutoPlay(): void {
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayInterval);
  }

  /**
   * Stop autoplay
   */
  private stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  /**
   * Reset autoplay timer
   */
  private resetAutoPlay(): void {
    if (this.autoPlay && this.images.length > 1) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  /**
   * Handle image click
   */
  onImageClick(image: CarouselImage): void {
    if (image.link) {
      window.open(image.link, '_blank');
    }
  }

  /**
   * Handle keyboard navigation
   */
  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.prevSlide();
        break;
      case 'ArrowRight':
        this.nextSlide();
        break;
      case 'Escape':
        this.stopAutoPlay();
        break;
    }
  }

  /**
   * Pause autoplay on hover
   */
  onMouseEnter(): void {
    this.stopAutoPlay();
  }

  /**
   * Resume autoplay on mouse leave
   */
  onMouseLeave(): void {
    if (this.autoPlay && this.images.length > 1) {
      this.startAutoPlay();
    }
  }

  /**
   * Track function for performance
   */
  trackByIndex(index: number, item: CarouselImage): number {
    return index;
  }
}
