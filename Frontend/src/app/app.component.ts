import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:  [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [DataService],
})
export class AppComponent implements OnInit {
  
  // No initial value since we don't know the controls
  dynamicForm!: FormGroup;
  formsJson: any; 

  constructor(private fb: FormBuilder, private dataService: DataService) {}


  ngOnInit() {
   this.dataService.getFormsJsonData().subscribe((res: any)=>{
    
    this.formsJson = res;
    const group : any  = {};

    this.formsJson.forEach((field: any) => {
      if (!field.hidden) {
        group[field.name] = [field.defaultValue ? field.defaultValue : '', field.required ? [Validators.required]: []];  
      }
    });
    
    this.dynamicForm = this.fb.group(group);
   });
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}
