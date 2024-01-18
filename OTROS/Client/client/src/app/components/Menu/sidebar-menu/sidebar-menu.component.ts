import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  items: MenuItem[] = [];
  isSidebarExpanded: boolean = false;
  sidebarVisible: boolean = false;
  constructor() {
    {

    }
  }


  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  // {
  //   separator: true
  // }

  ngOnInit() {
    this.items = [
      {
        label: 'Ingreso',
        icon: 'pi pi-fw pi-arrow-circle-right',
        items: [
          {
            label: 'Reserva',
            icon: 'pi pi-fw pi-plus'
          },
          {
            label: 'Alquiler',
            icon: 'pi pi-fw pi-trash'
          }

        ]
      },
      {
        label: 'Salida',
        icon: 'pi pi-fw pi-arrow-circle-left',
        items: [
          {
            label: 'Liquidación',
            icon: 'pi pi-fw pi-plus'
          }


        ]
      },

      {
        label: 'Catalogo',
        icon: 'pi pi-fw pi-wallet',
        items: [
          {
            label: 'Cargo',
            icon: 'pi pi-fw pi-folder',
            routerLink: '/cargoMain',
            command: () => this.onMenuItemClick()
          },
          {
            label: 'Tipo Elemento',
            icon: 'pi pi-fw pi-folder',
            routerLink: '/TipoElementoMain',
            command: () => this.onMenuItemClick()

          }, {
            label: 'Piso',
            icon: 'pi pi-fw pi-folder',
            routerLink: '/PisoMain',
            command: () => this.onMenuItemClick()

          },
          {
            label: 'Servicio Basico',
            icon: 'pi pi-fw pi-folder',
            routerLink: '/ServicioBasicoMain',
            command: () => this.onMenuItemClick()

          },
          {
            label: 'Infraestructura',
            icon: 'pi pi-fw pi-folder',
            routerLink: '/InfraestructuraMain',
            command: () => this.onMenuItemClick()

          }, {
            label: 'Persona Natural',
            icon: 'pi pi-fw pi-folder',
            routerLink: '/PersonaNaturalMain',
            command: () => this.onMenuItemClick()

          },
        ]
      }
    ];
  }
  onMenuItemClick() {
    // Aquí puedes agregar la lógica que deseas ejecutar cuando se hace clic en un elemento del menú
    this.sidebarVisible = false;
  }
}
