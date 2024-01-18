import { Component, OnInit } from '@angular/core';
import { ButtonStyles, DropdownStyles } from '../../../models/StylesPrime';
import { TipoDocumentoIdentidadItemModel } from '../..//../models/General/TipoDocumentoIdentidadItemModel'
import { UbigeoItemModel } from '../..//../models/General/UbigeoItemModel'
import { GeneroItemModel } from '../..//../models/General/GeneroItemModel'
import { EstadoCivilItemModel } from '../..//../models/General/EstadoCivilItemModel'
import { MedioComunicacionItemModel } from '../..//../models/General/MedioComunicacionItemModel'
import { GeneralService } from '../..//../services/General/general.service'
import { PersonaNaturalService } from '../..//../services/PersonaNatural/persona-natural.service'
import { PersonaNaturalSaveModel } from '../../../models/PersonaNatural/PersonaNaturalSaveModel';
import { PersonaNaturalMedioComunicacionSaveModel } from '../../../models/PersonaNatural/PersonaNaturalMedioComunicacionSaveModel'
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ThisReceiver } from '@angular/compiler';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-persona-natural-save',
  templateUrl: './persona-natural-save.component.html',
  styleUrls: ['./persona-natural-save.component.css']
})
export class PersonaNaturalSaveComponent implements OnInit {

  visibleVentena: boolean = false;
  TipoDocumentoIdentidadItems: TipoDocumentoIdentidadItemModel[] = [];
  SelectTipoDocumentoIdentidadItem: TipoDocumentoIdentidadItemModel = new TipoDocumentoIdentidadItemModel;

  UbigeoItems: UbigeoItemModel[] = [];
  SelectUbigeoItem: UbigeoItemModel = new UbigeoItemModel;

  GeneroItems: GeneroItemModel[] = [];
  SelectGeneroItem: GeneroItemModel = new GeneroItemModel;

  EstadoCivilItems: EstadoCivilItemModel[] = [];
  SelectEstadoCivilItem: EstadoCivilItemModel = new EstadoCivilItemModel;

  MedioComunicacionItems: MedioComunicacionItemModel[] = [];
  SelectMedioComunicacionItem: MedioComunicacionItemModel = new MedioComunicacionItemModel;

  date: Date = new Date;

  buttonStyle = ButtonStyles.primary;
  DropdownStyle = DropdownStyles.Data;
  newItem: PersonaNaturalSaveModel = new PersonaNaturalSaveModel;
  activeIndex: number = 0;
  id: number = 0;

  DetalleMedioComunicacion_Item: PersonaNaturalMedioComunicacionSaveModel[] = [];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private serviceGeneral: GeneralService, private personanaturalService: PersonaNaturalService) {

  }
  async ngOnInit() {
    await this.serviceGeneral.GetMedioComunicacionItems().subscribe(
      respuesta => {
        this.MedioComunicacionItems = respuesta;
        console.log(respuesta);
      }, error => {
        console.log(error)
      }
    )

    await this.CargadoInicial();
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    if (this.id > 0) {

      await this.getPersonaNatural(this.id);
    }
  }

  async CargadoInicial() {


    await this.serviceGeneral.GetTipoDocuemntoIdentidadPersonaItems().subscribe(
      respuesta => {
        this.TipoDocumentoIdentidadItems = respuesta;
      }, error => {
        console.log(error)
      }
    )

    await this.serviceGeneral.GetGeneroItems().subscribe(
      respuesta => {
        this.GeneroItems = respuesta;
      }, error => {
        console.log(error)
      }
    )

    await this.serviceGeneral.GetEstadoCivilItems().subscribe(
      respuesta => {
        this.EstadoCivilItems = respuesta;
      }, error => {
        console.log(error)
      }
    )
  }

  async getPersonaNatural(Id: number) {

    const Rest_Cabecera = await this.personanaturalService.GetAllItem(Id);

    this.newItem = Rest_Cabecera[0];

    this.serviceGeneral.GetUbigeoItem(this.newItem.UbigeoId).subscribe(
      respuesta => {
        this.SelectUbigeoItem = respuesta[0];
      }
    )

    this.serviceGeneral.GetGeneroItem(this.newItem.GeneroId).subscribe(
      respuesta => {
        this.SelectGeneroItem = respuesta[0];
      }
    )

    this.serviceGeneral.GetEstadoCivilItem(this.newItem.EstadoCivilId).subscribe(
      respuesta => {
        this.SelectEstadoCivilItem = respuesta[0];
      }
    )
    this.date = new Date(this.newItem.FechaNacimiento);




    const resp_Detalle = await this.personanaturalService.GetMedioComunicacionDetalle(Id);

    this.newItem.DetalleMedioComunicacion = [];
    this.newItem.DetalleMedioComunicacion = resp_Detalle;
    this.ListaDetalle();

  }

  async ListaDetalle() {
    this.DetalleMedioComunicacion_Item = [];
    await this.newItem.DetalleMedioComunicacion.forEach((ItemData, index) => {

      if (ItemData.Action != 2) {
        ItemData.Item = index + 1;
        this.DetalleMedioComunicacion_Item.push(ItemData);
      }
    });

  }
  async GetUbigeoLikeItemEvent(event: AutoCompleteCompleteEvent) {
    let query = event.query;
    await this.serviceGeneral.GetUbigeoLikeItem(query.toLowerCase()).subscribe(
      respuesta => {
        this.UbigeoItems = respuesta;
      }
    )
  }


  async saveItem() {

    await this.confirmationService.confirm({
      message: '¿Deseas guardar el registro?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });

        this.newItem.Action = this.newItem.PersonaNaturalId > 0 ? 3 : 1;
        this.newItem.UbigeoId = this.SelectUbigeoItem.UbigeoId;
        this.newItem.TipoDocumentoIdentidadId = this.SelectTipoDocumentoIdentidadItem.TipoDocumentoIdentidadId;
        this.newItem.GeneroId = this.SelectGeneroItem.GeneroId;
        this.newItem.EstadoCivilId = this.SelectEstadoCivilItem.EstadoCivilId;
        this.newItem.FechaNacimiento = this.date;

        console.log(this.newItem);

        this.personanaturalService.save(this.newItem).then(Respuesta => {
          if (Respuesta.PersonaNaturalId != 0)

            console.log(Respuesta);
        });

       

      },

    });
  }

  productDialog: boolean = false;
  submitted: boolean = false;
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
    this.visibleVentena = false;
  }

  newItemDetalle: PersonaNaturalMedioComunicacionSaveModel = new PersonaNaturalMedioComunicacionSaveModel();

  showDialog() {
    this.newItemDetalle = new PersonaNaturalMedioComunicacionSaveModel();
    this.newItem.Action = 1;
    this.visibleVentena = true;
  }



  saveItemDetalle() {

    this.newItemDetalle.Action = 1;
    this.newItemDetalle.NomMedioComunicacion = this.SelectMedioComunicacionItem.Nombre;
    this.newItemDetalle.MedioComunicacionId = this.SelectMedioComunicacionItem.MedioComunicacionId;
    if (this.newItem.DetalleMedioComunicacion == null) this.newItem.DetalleMedioComunicacion = [];



    const index = this.newItem.DetalleMedioComunicacion.findIndex(Item => Item === this.newItemDetalle);

    // if (index !== -1) {
    //   this.newItem.DetalleMedioComunicacion.splice(index, 1)
    // } else {
    //   console.log('Elemento no encontrado en la lista.');
    // }

    if (index === -1) {
      this.newItem.DetalleMedioComunicacion.push(this.newItemDetalle);
    }

    this.newItem.DetalleMedioComunicacion.forEach((Item, index) => {
      Item.Item = index + 1;
    });
    this.hideDialog();
  }

  Update_Metho(data: PersonaNaturalMedioComunicacionSaveModel) {
    this.showDialog();
    data.Action = 3
    this.newItemDetalle = data;
    this.SelectMedioComunicacionItem.Nombre = this.newItemDetalle.NomMedioComunicacion;
    this.SelectMedioComunicacionItem.MedioComunicacionId = this.newItemDetalle.MedioComunicacionId;
  }
  async DeleteDetalle_Metho(data: PersonaNaturalMedioComunicacionSaveModel) {
    await this.confirmationService.confirm({
      message: '¿Deseas Eliminar el registro?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });

        data.Action = 2

        const index = this.newItem.DetalleMedioComunicacion.findIndex(cargo => cargo.PersonaNaturalMedioComunicacionId == data.PersonaNaturalMedioComunicacionId);
        console.log('bORRANDO');
        if (index !== -1) {
          this.newItem.DetalleMedioComunicacion[index].Action = 2;
          this.ListaDetalle();
        } else {
          console.log('Elemento no encontrado en la lista.');
        }



      },

    });

  }


}
