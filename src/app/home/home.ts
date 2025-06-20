import { Component } from '@angular/core';
import {CallToCation} from "../components/call-to-cation/call-to-cation";
import {CarouselComponent} from "../components/carousel/carousel.component";
import {ClinicalAreas} from "../components/clinical-areas/clinical-areas";
import {ContactComponent} from "../components/contact/contact.component";
import {MenuHeaderComponent} from "../components/menu-header/header.component";
import {SimpleHeader} from "../components/simple-header/simple-header";
import {Team} from "../components/team/team";

@Component({
  selector: 'home',
    imports: [
        CallToCation,
        CarouselComponent,
        ClinicalAreas,
        ContactComponent,
        MenuHeaderComponent,
        SimpleHeader,
        Team
    ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
