import { Component, OnInit } from '@angular/core';
import { ButtonStyles, DropdownStyles } from '../../../models/StylesPrime';
import { TipoDocumentoIdentidadItemModel } from '../..//../models/General/TipoDocumentoIdentidadItemModel'
import { UbigeoItemModel } from '../..//../models/General/UbigeoItemModel'
import { GeneroItemModel } from '../..//../models/General/GeneroItemModel'
import { EstadoCivilItemModel } from '../..//../models/General/EstadoCivilItemModel'
import { GeneralService } from '../..//../services/General/general.service'
import { InfraestructuraService } from '../..//../services/Infraestructura/infraestructura.service'
import { InfraestructuraSaveModel } from '../../../models/Infraestructura/InfraestructuraSaveModel';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-infraestructura-save',
  templateUrl: './infraestructura-save.component.html',
  styleUrls: ['./infraestructura-save.component.css']
})
export class InfraestructuraSaveComponent implements OnInit {
  date: Date = new Date;

  RutaImagen: string = 'https://as1.ftcdn.net/v2/jpg/04/56/58/14/1000_F_456581427_5XpGqNqCwLAGwaFFvxVGvnW2teOfJ0ZL.jpg';

  buttonStyle = ButtonStyles.primary;
  DropdownStyle = DropdownStyles.Data;


  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private serviceGeneral: GeneralService, private InfraestructuraService: InfraestructuraService) {


  }
  newItem: InfraestructuraSaveModel = new InfraestructuraSaveModel;
  activeIndex: number = 0;
  id: number = 0;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Convierte el valor a número

    });


    if (this.id > 0) {

      this.getInfraestructura(this.id);
    }


  }

  getInfraestructura(Id: number) {
    this.InfraestructuraService.GetAllItem(Id).subscribe(
      respuesta => {
        this.newItem = respuesta[0];
        this.date = new Date(this.newItem.FechaRegistro);
        console.log(this.newItem.FechaRegistro);
      }
    )
  }

  saveItem() {

    this.confirmationService.confirm({
      message: '¿Deseas guardar el registro?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });

        this.newItem.Action = this.newItem.InfraestructuraId > 0 ? 3 : 1;
        this.newItem.FechaRegistro=this.date;
        this.InfraestructuraService.save(this.newItem)
          .subscribe(
            res => {
              if (res.InfraestructuraId != 0) {
                console.log(res);
              }
            },
            err => console.error(err)
          )

      },

    });
  }
}
