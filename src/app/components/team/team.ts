import { Component } from '@angular/core';

interface TeamMember {
  id: number;
  name: string;
  specialty: string;
  description: string;
  image: string;
}

@Component({
  selector: 'team',
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class Team {

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Tania Loureiro',
      specialty: 'Diretora Médica',
      description: 'Especialista com mais de 20 anos de experiência.',
      image: 'assets/images/team/user-placeholder-female.png'
    },
    {
      id: 2,
      name: 'Marco Loureiro',
      specialty: 'Neurologista',
      description: 'Referência em neurologia com formação internacional.',
      image: 'assets/images/team/user-placeholder-male.jpg'
    }
  ];
}
