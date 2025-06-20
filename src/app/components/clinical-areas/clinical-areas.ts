import {Component, OnInit} from '@angular/core';

interface ClinicalArea {
  title: string;
  description: string;
  icon: string;
  image?: string;
  fullDescription: string;
  services?: string[];
  conditions?: string[];
  doctors?: Doctor[];
  featured?: boolean;
}

// Interfaces
interface Doctor {
  name: string;
  title: string;
  experience?: number;
  image?: string;
  specializations?: string[];
}

@Component({
  selector: 'clinical-areas',
  imports: [],
  templateUrl: './clinical-areas.html',
  styleUrl: './clinical-areas.scss'
})
export class ClinicalAreas implements OnInit {

  selectedSpecialty: ClinicalArea | null = null;

  clinicalAreas: ClinicalArea[] = [
    {
      title: 'Cardiologia',
      description: 'Cuidados especializados para o coração e sistema cardiovascular.',
      icon: 'fas fa-heartbeat',
      image: 'assets/images/specialties/placeholder-image.jpg',
      fullDescription: 'Nossa equipe de cardiologia oferece diagnóstico, tratamento e prevenção de doenças cardiovasculares utilizando tecnologia de ponta e abordagem personalizada para cada paciente.',
      services: [
        'Eletrocardiograma (ECG)',
        'Ecocardiograma',
        'Teste de Esforço',
        'Holter 24h',
        'Cateterismo Cardíaco',
        'Angioplastia',
        'Cirurgia Cardíaca',
        'Reabilitação Cardíaca'
      ],
      conditions: [
        'Hipertensão Arterial',
        'Arritmias Cardíacas',
        'Infarto do Miocárdio',
        'Insuficiência Cardíaca',
        'Doença Coronariana',
        'Valvulopatias',
        'Cardiomiopatias'
      ],
      doctors: [
        {
          name: 'Dr. João Silva',
          title: 'Cardiologista Intervencionista',
          experience: 20,
          image: 'assets/images/doctors/dr-joao-silva.jpg',
          specializations: ['Cateterismo', 'Angioplastia']
        },
        {
          name: 'Dra. Ana Costa',
          title: 'Cardiologista Clínica',
          experience: 15,
          specializations: ['Ecocardiografia', 'Holter']
        }
      ],
      featured: true
    },
    {
      title: 'Neurologia',
      description: 'Diagnóstico e tratamento de distúrbios do sistema nervoso.',
      icon: 'fas fa-brain',
      image: 'assets/images/specialties/placeholder-image.jpg',
      fullDescription: 'Especialistas em neurologia dedicados ao diagnóstico e tratamento de doenças que afetam o cérebro, medula espinhal e sistema nervoso periférico.',
      services: [
        'Eletroencefalograma (EEG)',
        'Ressonância Magnética',
        'Tomografia Computadorizada',
        'Punção Lombar',
        'Eletroneuromiografia',
        'Doppler Transcraniano',
        'Tratamento de AVC',
        'Terapia para Epilepsia'
      ],
      conditions: [
        'AVC (Derrame)',
        'Epilepsia',
        'Enxaqueca',
        'Doença de Parkinson',
        'Alzheimer',
        'Esclerose Múltipla',
        'Neuropatias',
        'Distúrbios do Sono'
      ],
      doctors: [
        {
          name: 'Dra. Maria Santos',
          title: 'Neurologista',
          experience: 18,
          specializations: ['AVC', 'Epilepsia']
        },
        {
          name: 'Dr. Carlos Ferreira',
          title: 'Neurocirurgião',
          experience: 22,
          specializations: ['Cirurgia Cerebral', 'Coluna']
        }
      ]
    },
    {
      title: 'Ortopedia',
      description: 'Tratamento de lesões e doenças do sistema musculoesquelético.',
      icon: 'fas fa-bone',
      image: 'assets/images/specialties/placeholder-image.jpg',
      fullDescription: 'Especialistas em ortopedia e traumatologia oferecendo tratamentos conservadores e cirúrgicos para problemas ósseos, articulares e musculares.',
      services: [
        'Radiografia Digital',
        'Ressonância Magnética',
        'Artroscopia',
        'Cirurgia de Coluna',
        'Próteses Articulares',
        'Medicina Esportiva',
        'Fisioterapia',
        'Infiltrações'
      ],
      conditions: [
        'Fraturas',
        'Luxações',
        'Artrose',
        'Hérnia de Disco',
        'Lesões Esportivas',
        'Tendinites',
        'Bursites',
        'Escoliose'
      ],
      doctors: [
        {
          name: 'Dr. Pedro Costa',
          title: 'Ortopedista',
          experience: 16,
          specializations: ['Medicina Esportiva', 'Artroscopia']
        }
      ]
    },
    {
      title: 'Pediatria',
      description: 'Cuidados médicos especializados para bebês, crianças e adolescentes.',
      icon: 'fas fa-baby',
      image: 'assets/images/specialties/placeholder-image.jpg',
      fullDescription: 'Atendimento pediátrico completo desde o nascimento até a adolescência, com foco no desenvolvimento saudável e prevenção de doenças.',
      services: [
        'Consultas de Rotina',
        'Vacinação',
        'Puericultura',
        'Teste do Pezinho',
        'Avaliação do Desenvolvimento',
        'Tratamento de Alergias',
        'Pediatria de Urgência',
        'Orientação Nutricional'
      ],
      conditions: [
        'Infecções Respiratórias',
        'Alergias Alimentares',
        'Asma Infantil',
        'Distúrbios do Crescimento',
        'Problemas Digestivos',
        'Dermatite Atópica',
        'TDAH',
        'Autismo'
      ],
      doctors: [
        {
          name: 'Dra. Ana Oliveira',
          title: 'Pediatra',
          experience: 12,
          specializations: ['Neonatologia', 'Alergologia Pediátrica']
        }
      ]
    },
    {
      title: 'Ginecologia',
      description: 'Saúde da mulher em todas as fases da vida.',
      icon: 'fas fa-female',
      image: 'assets/images/specialties/placeholder-image.jpg',
      fullDescription: 'Cuidados especializados em saúde feminina, desde a adolescência até a menopausa, incluindo prevenção, diagnóstico e tratamento.',
      services: [
        'Consultas Ginecológicas',
        'Papanicolau',
        'Ultrassom Pélvico',
        'Colposcopia',
        'Planejamento Familiar',
        'Pré-natal',
        'Cirurgias Ginecológicas',
        'Tratamento Hormonal'
      ],
      conditions: [
        'Infecções Vaginais',
        'Endometriose',
        'Miomas Uterinos',
        'Cistos Ovarianos',
        'Distúrbios Menstruais',
        'Menopausa',
        'Infertilidade',
        'DSTs'
      ],
      doctors: [
        {
          name: 'Dr. Carlos Ferreira',
          title: 'Ginecologista',
          experience: 19,
          specializations: ['Obstetrícia', 'Reprodução Humana']
        }
      ]
    },
    {
      title: 'Dermatologia',
      description: 'Cuidados com a pele, cabelos e unhas.',
      icon: 'fas fa-hand-paper',
      image: 'assets/images/specialties/placeholder-image.jpg',
      fullDescription: 'Especialistas em dermatologia oferecendo tratamentos clínicos e estéticos para manter a saúde e beleza da pele.',
      services: [
        'Consultas Dermatológicas',
        'Dermatoscopia',
        'Biópsia de Pele',
        'Crioterapia',
        'Laser Terapêutico',
        'Peeling Químico',
        'Botox',
        'Preenchimento'
      ],
      conditions: [
        'Acne',
        'Psoríase',
        'Eczema',
        'Melanoma',
        'Rosácea',
        'Vitiligo',
        'Alopecia',
        'Micoses'
      ],
      doctors: [
        {
          name: 'Dra. Sofia Rodrigues',
          title: 'Dermatologista',
          experience: 14,
          specializations: ['Dermatologia Estética', 'Oncologia Cutânea']
        }
      ]
    },
    {
      title: 'Oftalmologia',
      description: 'Cuidados especializados para a saúde dos olhos e visão.',
      icon: 'fas fa-eye',
      image: 'assets/images/specialties/placeholder-image.jpg',
      fullDescription: 'Diagnóstico, tratamento e cirurgias oftalmológicas para preservar e melhorar a qualidade da visão em todas as idades.',
      services: [
        'Exame de Vista',
        'Tonometria',
        'Fundoscopia',
        'Cirurgia de Catarata',
        'Cirurgia Refrativa',
        'Tratamento de Glaucoma',
        'Retinografia',
        'Lentes de Contato'
      ],
      conditions: [
        'Miopia',
        'Hipermetropia',
        'Astigmatismo',
        'Catarata',
        'Glaucoma',
        'Degeneração Macular',
        'Retinopatia Diabética',
        'Conjuntivite'
      ],
      doctors: [
        {
          name: 'Dr. Miguel Torres',
          title: 'Oftalmologista',
          experience: 17,
          specializations: ['Cirurgia Refrativa', 'Retina']
        }
      ]
    },
    {
      title: 'Psiquiatria',
      description: 'Cuidados com a saúde mental e bem-estar emocional.',
      icon: 'fas fa-head-side-virus',
      image: 'assets/images/specialties/placeholder-image.jpg',
      fullDescription: 'Tratamento especializado em saúde mental, oferecendo suporte psiquiátrico e psicológico para diversos transtornos mentais.',
      services: [
        'Consultas Psiquiátricas',
        'Psicoterapia',
        'Avaliação Neuropsicológica',
        'Tratamento Medicamentoso',
        'Terapia de Grupo',
        'Terapia Familiar',
        'Internamento Psiquiátrico',
        'Reabilitação Psicossocial'
      ],
      conditions: [
        'Depressão',
        'Ansiedade',
        'Transtorno Bipolar',
        'Esquizofrenia',
        'TDAH',
        'Transtornos Alimentares',
        'Dependência Química',
        'Transtorno do Pânico'
      ],
      doctors: [
        {
          name: 'Dra. Isabel Mendes',
          title: 'Psiquiatra',
          experience: 13,
          specializations: ['Psiquiatria Infantil', 'Dependência Química']
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize component
    this.setupAnimations();
  }

  /**
   * Show detailed information about a specialty
   */
  showSpecialtyDetails(specialty: ClinicalArea): void {
    this.selectedSpecialty = specialty;
    // Scroll to details section
    setTimeout(() => {
      const detailsElement = document.querySelector('.specialty-details');
      if (detailsElement) {
        detailsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  closeSpecialtyDetails(): void {
    this.selectedSpecialty = null;
  }

  /**
   * Open WhatsApp chat
   */
  openWhatsApp(): void {
    const message = this.selectedSpecialty
      ? `Olá! Gostaria de agendar uma consulta de ${this.selectedSpecialty.title}.`
      : 'Olá! Gostaria de agendar uma consulta.';

    const whatsappNumber = '+351912345678'; // Replace with actual number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }

  /**
   * Scroll to a specific section
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * Setup scroll animations
   */
  private setupAnimations(): void {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe elements after view init
    setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll('.fade-in-up');
      elementsToAnimate.forEach(el => observer.observe(el));
    }, 100);
  }


}
