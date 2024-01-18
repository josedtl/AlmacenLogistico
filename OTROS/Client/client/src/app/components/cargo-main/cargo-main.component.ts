import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { CargoService } from '../../services/cargo/cargo.service';
import { CargoEntity } from '../../models/Cargo/CargoEntity';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ButtonStyles } from '../../models/StylesPrime';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cargo-main',
  templateUrl: './cargo-main.component.html',
  styleUrls: ['./cargo-main.component.css']
})
export class CargoMainComponent {

  buttonStyle = ButtonStyles.primary;
  visibleVentena: boolean = false;
  loading: boolean = true;
  cities: CargoEntity[] | undefined;
  selectedCity: CargoEntity | undefined;
  ListaMainItems: CargoEntity[] = [];
  selectedItems!: CargoEntity[] | null;
  constructor(private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService, private service: CargoService) {
  }
  newItem: CargoEntity = new CargoEntity();

  ngOnInit() {
    this.getCargo();
    this.loading = false;
  }

  getCargo() {
    this.service.getCargo().subscribe(
      respuesta => {
        this.ListaMainItems = respuesta;
        this.GetlistaOrdenar();
      }
    )

  }

  GetlistaOrdenar() {
    this.ListaMainItems.sort((a, b) => b.CargoId - a.CargoId);

    this.ListaMainItems.forEach((cargo, index) => {
      cargo.Item = index + 1;
    });

  }

  saveItem() {
    this.service.save(this.newItem)
      .subscribe(
        res => {
          if (res.CargoId != 0) {
            if (res.Action == 1) {
              this.ListaMainItems.push(res);
              this.GetlistaOrdenar();
            }
            if (res.Action == 3) {
              const index = this.ListaMainItems.findIndex(cargo => cargo.CargoId === res.CargoId);

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

                const index = this.ListaMainItems.findIndex(cargo => cargo.CargoId === Id);

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
  
  Update_Metho(data: CargoEntity) {
    this.showDialog();
    data.Action = 3
    this.newItem = data;

  }



  showDialog() {
    this.newItem = new CargoEntity();
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
