import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standelone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standelone.component.html',
  styleUrls: ['./standelone.component.css'],
})
export class StandeloneComponent {}
