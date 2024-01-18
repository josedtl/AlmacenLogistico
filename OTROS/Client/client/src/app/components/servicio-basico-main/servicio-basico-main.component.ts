import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { ServicioBasicoService } from '../../services/ServicioBasico/servicio-basico.service';
import { ServicioBasicoEntity } from '../../models/ServicoBasico/ServicioBasicoEntity';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ButtonStyles } from '../../models/StylesPrime';
@Component({
  selector: 'app-servicio-basico-main',
  templateUrl: './servicio-basico-main.component.html',
  styleUrls: ['./servicio-basico-main.component.css']
})
export class ServicioBasicoMainComponent {

  buttonStyle = ButtonStyles.primary;
  visibleVentena: boolean = false;
  loading: boolean = true;
  cities: ServicioBasicoEntity[] | undefined;
  selectedCity: ServicioBasicoEntity | undefined;
  ListaMainItems: ServicioBasicoEntity[] = [];
  selectedItems!: ServicioBasicoEntity[] | null;
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private service: ServicioBasicoService) {
  }
  newItem: ServicioBasicoEntity = new ServicioBasicoEntity();

  switchLabel: string = 'desactivado';
  ngOnInit() {
    this.getServicioBasico();
    this.loading = false;
  }
  switchChanged() {
    this.switchLabel = this.newItem.EstadoRegistro ? 'activado' : 'desactivado';
}
  getServicioBasico() {
    this.service.getServicioBasico().subscribe(
      respuesta => {
        this.ListaMainItems = respuesta;
        this.GetlistaOrdenar();
      }
    )

  }

  GetlistaOrdenar() {
    this.ListaMainItems.sort((a, b) => b.ServicioBasicoId - a.ServicioBasicoId);

    this.ListaMainItems.forEach((ServicioBasico, index) => {
      ServicioBasico.Item = index + 1;
    });

  }

  saveItem() {
    this.service.save(this.newItem)
      .subscribe(
        res => {
          if (res.ServicioBasicoId != 0) {
            if (res.Action == 1) {
              this.ListaMainItems.push(res);
              this.GetlistaOrdenar();
            }
            if (res.Action == 3) {
              const index = this.ListaMainItems.findIndex(ServicioBasico => ServicioBasico.ServicioBasicoId === res.ServicioBasicoId);

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

                const index = this.ListaMainItems.findIndex(ServicioBasico => ServicioBasico.ServicioBasicoId === Id);

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
  Update_Metho(data: ServicioBasicoEntity) {
    this.showDialog();
    data.Action = 3
    this.newItem = data;

  }



  showDialog() {
    this.newItem = new ServicioBasicoEntity();
    this.newItem.Action = 1;
    this.visibleVentena = true;
  }



  convertToUpperCase(event: any) {
    this.newItem.Nombre = event.target.value.toUpperCase();
  }


  deleteSelectedProducts() {
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