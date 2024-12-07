import {bootstrapApplication} from '@angular/platform-browser';
import { AppComponent } from './app/app.component'
import { provideRouter, Routes } from '@angular/router';
import { DynamicFormRendererComponent } from './app/components/dynamic-form-renderer/dynamic-form-renderer.component';

const routes: Routes = [
    { path: 'dynamic-form-renderer', component: DynamicFormRendererComponent }, // Correct the path by removing the leading slash
];
  
  // Bootstrap the application
bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes), // Provide the router configuration
    ]
});