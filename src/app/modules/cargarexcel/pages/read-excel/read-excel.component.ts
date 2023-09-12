import { Component } from '@angular/core';
import { IPaciente } from '@modules/cargarexcel/interface/datos.interface';
import { Servicio } from '@modules/cargarexcel/services/servicio.service';
import * as xls from 'xlsx';

@Component({
  selector: 'app-read-excel',
  templateUrl: './read-excel.component.html',
  styleUrls: ['./read-excel.component.scss'],
})
export class ReadExcelComponent {
  pacientes!: IPaciente[];

  constructor(private servicio: Servicio) {}

  leerFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];

    let filereader = new FileReader();
    filereader.readAsArrayBuffer(file);
    filereader.onload = () => {
      let data = filereader.result;
      let workbook = xls.read(data, { type: 'array' });

      const nameSheet = workbook.SheetNames[0];
      const hoja = workbook.Sheets[nameSheet];
      this.pacientes = xls.utils.sheet_to_json(hoja, { raw: true });
      console.log(this.pacientes);
      this.uploadExcel();
    };
  }

  uploadExcel() {
    this.pacientes.forEach((paciente) => {
      this.servicio.validarInsertarPaciente(paciente).subscribe(
        (response) => {
          console.log('Datos enviados correctamente:', response);
        },
        (error) => {
          console.error('Error al enviar los datos:', error);
        }
      );
    });
  }
}
