import { Component, Input } from '@angular/core';

@Component({
  selector: 'estudiante',
  standalone: true,
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent {
  title = 'prematricula';
  partes: string[] = []
    @Input() items: any = null;
  
    ngOnInit(): void {
      this.partes = this.items.fechaDeNacimiento.split("-");
    }
}
