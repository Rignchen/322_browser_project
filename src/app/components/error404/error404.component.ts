import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon' 
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-error404',
  imports: [MatIconModule, RouterLink, RouterOutlet],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss'
})
export class Error404Component {

}
