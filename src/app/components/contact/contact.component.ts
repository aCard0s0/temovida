import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

declare var google: any;

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  contactInfo = {
    address: 'Rua da Feira, Edifício São Pedro Loja C 4905-341 Barroselas e Carvoeiro',
    phone: '+351 21 123 4567',
    whatsapp: '+351912345678',
    email: 'geral@temovida.pt',
    hours: {
      weekdays: '08:00 - 18:00',
      saturday: '08:00 - 14:00',
      sunday: 'Fechado'
    }
  };

  socialMedia = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://facebook.com/temovida',
      color: '#1877f2'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/temovida',
      color: '#e4405f'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://linkedin.com/company/temovida',
      color: '#0077b5'
    },
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      url: 'https://youtube.com/temovida',
      color: '#ff0000'
    }
  ];

  contactForm = {
    name: '',
    email: '',
    phone: '',
    specialty: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  };

  specialties = [
    'Cardiologia',
    'Neurologia',
    'Ortopedia',
    'Pediatria',
    'Ginecologia',
    'Dermatologia',
    'Oftalmologia',
    'Psiquiatria'
  ];

  timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  isFormSubmitting = false;
  showWhatsAppChat = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    // Initialize Google Maps
    const mapOptions = {
      center: { lat: 38.7223, lng: -9.1393 }, // Lisboa coordinates
      zoom: 15,
      styles: [
        {
          "featureType": "all",
          "elementType": "geometry.fill",
          "stylers": [{ "weight": "2.00" }]
        },
        {
          "featureType": "all",
          "elementType": "geometry.stroke",
          "stylers": [{ "color": "#8faa8b" }]
        },
        {
          "featureType": "all",
          "elementType": "labels.text",
          "stylers": [{ "visibility": "on" }]
        }
      ]
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Add marker
    const marker = new google.maps.Marker({
      position: { lat: 38.7223, lng: -9.1393 },
      map: map,
      title: 'TEMOVIDA - Clínica Médica',
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#8faa8b">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        `),
        scaledSize: new google.maps.Size(40, 40)
      }
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 10px; font-family: Arial, sans-serif;">
          <h3 style="color: #8faa8b; margin: 0 0 10px 0;">TEMOVIDA</h3>
          <p style="margin: 5px 0; color: #666;">📍 ${this.contactInfo.address}</p>
          <p style="margin: 5px 0; color: #666;">📞 ${this.contactInfo.phone}</p>
          <p style="margin: 5px 0; color: #666;">✉️ ${this.contactInfo.email}</p>
        </div>
      `
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  }

  onSubmitForm(): void {
    if (this.isFormValid()) {
      this.isFormSubmitting = true;

      // Simulate form submission
      setTimeout(() => {
        this.isFormSubmitting = false;
        alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
        this.resetForm();
      }, 2000);
    }
  }

  isFormValid(): boolean {
    return !!(this.contactForm.name &&
      this.contactForm.email &&
      this.contactForm.phone &&
      this.contactForm.message);
  }

  resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      specialty: '',
      message: '',
      preferredDate: '',
      preferredTime: ''
    };
  }

  openWhatsApp(): void {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta na TEMOVIDA.');
    const whatsappUrl = `https://wa.me/${this.contactInfo.whatsapp.replace(/\s+/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  toggleWhatsAppChat(): void {
    this.showWhatsAppChat = !this.showWhatsAppChat;
  }

  sendWhatsAppMessage(message: string): void {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${this.contactInfo.whatsapp.replace(/\s+/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    this.showWhatsAppChat = false;
  }

  openSocialMedia(url: string): void {
    window.open(url, '_blank');
  }

  callPhone(): void {
    window.location.href = `tel:${this.contactInfo.phone}`;
  }

  sendEmail(): void {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }

  openGoogleMaps(): void {
    const encodedAddress = encodeURIComponent(this.contactInfo.address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank');
  }
}
