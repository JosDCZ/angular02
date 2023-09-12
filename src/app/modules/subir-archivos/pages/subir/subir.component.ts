import { UploadService } from './../../services/upload.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.scss'],
})
export class SubirComponent implements OnInit {


  file!: File;
  myFiles: string[] = [];

  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {}

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
  }

  subir() {
    this.uploadService.upload(this.file).subscribe((resp) => {
      console.log('respusta', resp);
    });
  }

  onFileChange(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i]);
    }
  }

  multiple() {
    this.uploadService.multiple(this.myFiles).subscribe((resp) => {
      console.log('res mult', resp);
    });
  }

}
