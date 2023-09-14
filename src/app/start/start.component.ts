import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  @Input() title!: string;
  @Input() customLineBgColor!: string;
}
