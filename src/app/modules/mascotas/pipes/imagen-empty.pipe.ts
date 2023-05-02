import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenEmpty'
})
export class ImagenEmptyPipe implements PipeTransform {

  transform(img: any, tipo: 'mascotas'): string {
   return (img?.includes('https'))? img : `assets/images/no-image.jpg`;
  }

}
