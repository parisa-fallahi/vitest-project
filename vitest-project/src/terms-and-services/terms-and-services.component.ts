import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'terms-and-services',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HttpClientModule,FormsModule],
  templateUrl: './terms-and-services.component.html',
  styleUrl: './terms-and-services.component.css'
})
export class TermsAndServicesComponent {
  isAccepted: boolean = false;

  submit() {
    if (this.isAccepted) {
      alert('Form submitted successfully!');
    }
  }

}
