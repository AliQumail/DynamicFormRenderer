import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { RouterModule, Routes } from '@angular/router'; 
import { DynamicFormRendererComponent } from './components/dynamic-form-renderer/dynamic-form-renderer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:  [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule 
  ],
  providers: [DataService],
})



export class AppComponent  {}
