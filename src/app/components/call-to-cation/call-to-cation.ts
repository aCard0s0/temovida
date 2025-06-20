import { Component } from '@angular/core';

interface Stat {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'call-to-cation',
  imports: [],
  templateUrl: './call-to-cation.html',
  styleUrl: './call-to-cation.scss'
})
export class CallToCation {

  stats: Stat[] = [
    {
      number: '15+',
      title: 'Anos de Experiência',
      description: 'Cuidando da saúde da comunidade'
    },
    {
      number: '8',
      title: 'Especialidades',
      description: 'Áreas médicas especializadas'
    },
    {
      number: '1000+',
      title: 'Pacientes Atendidos',
      description: 'Vidas transformadas'
    },
    {
      number: '24/7',
      title: 'Atendimento',
      description: 'Emergências disponível sempre'
    }
  ];

  /**
   * Open WhatsApp chat
   */
  openWhatsApp(): void {
    const message = 'Olá! Gostaria de agendar uma consulta.';

    const whatsappNumber = '+351912345678'; // Replace with actual number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }

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
