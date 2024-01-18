import { Component } from '@angular/core';
import { InfraestructuraService } from '../../../services/Infraestructura/infraestructura.service';
import {InfraestructuraMainModel} from '../../../models/Infraestructura/InfraestructuraMainModel';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ButtonStyles } from '../../../models/StylesPrime';
import { Router } from '@angular/router';
@Component({
  selector: 'app-infraestructura-main',
  templateUrl: './infraestructura-main.component.html',
  styleUrls: ['./infraestructura-main.component.css']
})
export class InfraestructuraMainComponent {
  buttonStyle = ButtonStyles.primary;
  visibleVentena: boolean = false;
  loading: boolean = true;
  cities: InfraestructuraMainModel[] | undefined;
  selectedCity: InfraestructuraMainModel | undefined;
  ListaMainItems: InfraestructuraMainModel[] = [];
  selectedItems!: InfraestructuraMainModel[] | null;


  constructor(private router: Router,  private InfraestructuralServiceService: InfraestructuraService) {
  }
  ngOnInit() {
   // this.GetAllItems();
    this.loading = false;
  }

  irADestino() {
    const id = 123; // Tu valor de parámetro
    this.router.navigate(['/InfraestructuraMain', id]);
  }

  // GetAllItems() {
  //   this.InfraestructuraServiceService.GetInfraestructuraMainItems().subscribe(
  //     respuesta => {
  //       this.ListaMainItems = respuesta;
  //       this.GetlistaOrdenar();
  //     }
  //   )

  // }
  GetlistaOrdenar() {
    this.ListaMainItems.sort((a, b) => b.InfraestructuraId - a.InfraestructuraId);

    this.ListaMainItems.forEach((cargo, index) => {
      cargo.Item = index + 1;
    });

  }

  showDialog() {
    this.visibleVentena = true;
  }

  navigateToDestino() {
    this.router.navigate(['/InfraestructuraSave', 0]);
  }
  Delete_Metho(Id: number) {
    this.router.navigate(['/InfraestructuraSave', Id]);
   



  }
}

