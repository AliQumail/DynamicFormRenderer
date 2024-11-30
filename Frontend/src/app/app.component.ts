import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
