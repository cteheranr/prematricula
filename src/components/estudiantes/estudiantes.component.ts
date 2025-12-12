import { Component, Input } from '@angular/core';

@Component({
  selector: 'estudiante',
  standalone: true,
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css',
})
export class EstudiantesComponent {
  title = 'prematricula';
  partes: string[] = ["_ _ _ _", "_ _", "_ _"];
  @Input() items: any = null;

  ngOnInit(): void {
    if (typeof this.items.fechaDeNacimiento === 'string') {
      this.partes = this.items.fechaDeNacimiento.split('-');
    }
  }
}
