import { Component } from '@angular/core';
import { PAGE_NOT_FOUND } from 'src/app/constants/constants';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component {

  errorIMG:string = PAGE_NOT_FOUND;

}
