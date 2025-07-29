import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { LoaderComponent } from "../../shared/loader/loader.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent, LoaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
