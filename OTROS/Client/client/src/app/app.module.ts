import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoElementoMainComponent } from './components/tipo-elemento-main/tipo-elemento-main.component';
import { SidebarMenuComponent } from './components/Menu/sidebar-menu/sidebar-menu.component';
import { NavigationComponent } from './components/Menu/navigation/navigation.component';
import { CargoMainComponent } from './components/cargo-main/cargo-main.component';
import { ServicioBasicoMainComponent } from './components/servicio-basico-main/servicio-basico-main.component';
import { PersonaNaturalSaveComponent } from './components/PersonaNatural/persona-natural-save/persona-natural-save.component';
import { PersonaNaturalMainComponent } from './components/PersonaNatural/persona-natural-main/persona-natural-main.component';
import { PisoMainComponent } from './components/piso-main/piso-main.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoginComponent } from './components/login/login.component';
import { InfraestructuraMainComponent } from './components/Infraestructura/infraestructura-main/infraestructura-main.component';
import { InfraestructuraSaveComponent } from './components/Infraestructura/infraestructura-save/infraestructura-save.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    AppComponent,
    TipoElementoMainComponent,
    SidebarMenuComponent,
    NavigationComponent,
    CargoMainComponent,
    PisoMainComponent,
    ServicioBasicoMainComponent,
    PersonaNaturalSaveComponent,
    PersonaNaturalMainComponent,
    LoginComponent,
    InfraestructuraSaveComponent,
    InfraestructuraMainComponent
  ],
  imports: [
    InputNumberModule,
    TabViewModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    StyleClassModule,
    CardModule,
    PanelModule, ImageModule, CalendarModule, DropdownModule, AutoCompleteModule, ProgressSpinnerModule,

    ConfirmDialogModule, ConfirmPopupModule, ToolbarModule, ToastModule, PanelMenuModule, SidebarModule, InputSwitchModule],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
