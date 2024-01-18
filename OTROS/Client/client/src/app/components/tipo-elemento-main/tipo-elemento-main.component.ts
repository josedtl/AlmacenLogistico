import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { TipoElementoServiceService } from '../../services/TipoElemento/tipo-elemento.service';
import { TipoElementoEntity } from '../../models/TipoElemento/TipoElementoEntity';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import {ButtonStyles } from '../../models/StylesPrime';

@Component({
  selector: 'app-tipo-elemento-main',
  templateUrl: './tipo-elemento-main.component.html',
  styleUrls: ['./tipo-elemento-main.component.css']
})
export class TipoElementoMainComponent implements OnInit {
  
  buttonStyle = ButtonStyles.primary;
  visibleVentena: boolean = false;
  loading: boolean = true;
  cities: TipoElementoEntity[] | undefined;
  selectedCity: TipoElementoEntity | undefined;
  ListaMainItems: TipoElementoEntity[] = [];
  selectedItems!: TipoElementoEntity[] | null;
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private service: TipoElementoServiceService) {
  }
  newItem: TipoElementoEntity = {
    Item:0,
    TipoElementoId: 0,
    Nombre: '',
    FechaRegistro: new Date(),
    CodUsuario: 'adm ',
    EstadoRegistro: true,
    Action: 0,
    Seleccion: false
  };



  ngOnInit() {
    this.getTipoElemento();
    this.loading = false;
  }

getTipoElemento() {
    this.service.getTipoElemento().subscribe(
       respuesta => {
        console.log();
        this.ListaMainItems = respuesta;
        this.GetlistaOrdenar();
      }
    )

  }

  GetlistaOrdenar() {
    this.ListaMainItems.sort((a, b) => b.TipoElementoId - a.TipoElementoId);

    this.ListaMainItems.forEach((TipoElemento, index) => {
      TipoElemento.Item = index + 1;
    });

  }

  saveItem() {
    this.service.save(this.newItem)
      .subscribe(
        res => {
          if (res.TipoElementoId != 0) {
            if (res.Action == 1) {
              this.ListaMainItems.push(res);
              this.GetlistaOrdenar();
            }
            if (res.Action == 3) {
              const index = this.ListaMainItems.findIndex(TipoElemento => TipoElemento.TipoElementoId === res.TipoElementoId);

              if (index >= 1) {
                this.ListaMainItems[index] = res;
                this.GetlistaOrdenar();
              }
            }
          }
        },
        err => console.error(err)
      )
    this.visibleVentena = false;
  }

  productDialog: boolean = false;
  submitted: boolean = false;
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
    this.visibleVentena = false;
  }

  Delete_Metho(Id: number) {

    this.confirmationService.confirm({
      message: '¿Deseas eliminar el registro?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        this.service.delete(Id)
          .subscribe(
            res => {
              if (res) {

                const index = this.ListaMainItems.findIndex(TipoElemento => TipoElemento.TipoElementoId === Id);

                if (index !== -1) {
                  this.ListaMainItems.splice(index, 1)
                } else {
                  console.log('Elemento no encontrado en la lista.');
                }


                this.GetlistaOrdenar();
              }
            },
            err => console.error(err)
          );
      },

    });




  }
  Update_Metho(data: TipoElementoEntity) {
    this.showDialog();
    data.Action = 3
    this.newItem = data;

  }



  showDialog() {
    this.newItem.Action = 1;
    this.visibleVentena = true;
  }



  convertToUpperCase(event: any) {
    this.newItem.Nombre = event.target.value.toUpperCase();
  }


  deleteselectedItems() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ListaMainItems = this.ListaMainItems.filter((val) => !this.selectedItems?.includes(val));
        this.selectedItems = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }
  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }


 }