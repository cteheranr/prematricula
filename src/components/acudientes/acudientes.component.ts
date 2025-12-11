import { Component, Input } from '@angular/core';

@Component({
  selector: 'acudientes',
  standalone: true,
  templateUrl: './acudientes.component.html',
  styleUrl: './acudientes.component.css'
})
export class AcudientesComponent {
  partes: string[] = []
  @Input() items: any = null;
  acudiente: any = null

  ngOnInit(): void {
    console.log("Hola", this.items)
    this.obtenerAcudiente()
  }

  obtenerAcudiente(){
    if(this.items.quienSerElAcudienteDelEstudiante === "Madre"){
        this.items.nombreDelAcudiente = this.items.nombreDeLaMadre;
        this.items.apellidosDelAcudiente = this.items.apellidosDeLaMadre;
        this.items.numeroDeDocumentoDeIdentidadDelAcudiente = this.items.numeroDeDocumentoDeIdentidadDeLaMadre;
        this.items.lugarDeExpediciNDelDocumentoDelAcudiente = this.items.lugarDeExpediciNDelDocumentoDeLaMadre;
        this.items.edadDelAcudiente = this.items.edadDeLaMadre;
        this.items.direcciNDelAcudiente = this.items.direcciNDeLaMadre;
        this.items.telFonoDelAcudiente = this.items.telFonoDeLaMadre;
        this.items.nivelDeEstudioDelAcudiente = this.items.nivelDeEstudioDeLaMadre;
        this.items.ocupaciNActualDelAcudiente = this.items.ocupaciNActualDeLaMadre;
        this.items.cargoQueOcupaElAcudiente = this.items.empresaDondeLaboraLaMadre;
        this.items.empresaDondeLaboraElAcudiente = this.items.telFonoDeLaMadre;
    }
    else if (this.items.quienSerElAcudienteDelEstudiante === "Padre") {
      this.items.nombreDelAcudiente = this.items.nombreDelPadre;
        this.items.apellidosDelAcudiente = this.items.apellidosDelPadre;
        this.items.numeroDeDocumentoDeIdentidadDelAcudiente = this.items.numeroDeDocumentoDeIdentidadDelPadre;
        this.items.lugarDeExpediciNDelDocumentoDelAcudiente = this.items.lugarDeExpediciNDelDocumentoDelPadre;
        this.items.edadDelAcudiente = this.items.edadDelPadre;
        this.items.direcciNDelAcudiente = this.items.direcciNDelPadre;
        this.items.telFonoDelAcudiente = this.items.telFonoDelPadre;
        this.items.nivelDeEstudioDelAcudiente = this.items.nivelDeEstudioDelPadre;
        this.items.ocupaciNActualDelAcudiente = this.items.ocupaciNActualDelPadre;
        this.items.cargoQueOcupaElAcudiente = this.items.cargoQueOcupaElPadre;
        this.items.empresaDondeLaboraElAcudiente = this.items.empresaDondeLaboraElPadre;
    }
  }
}
