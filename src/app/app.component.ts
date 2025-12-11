import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstudiantesComponent } from '../components/estudiantes/estudiantes.component';
import { EncabezadoComponent } from '../components/encabezado/encabezado.component';
import { AcudientesComponent } from '../components/acudientes/acudientes.component';
import { FirmaComponent } from '../components/firma/firma.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet],
})
export class AppComponent {
  
}
