import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dynamic-form-renderer',
  templateUrl: './dynamic-form-renderer.component.html',
  styleUrls: ['./dynamic-form-renderer.component.css'],
  standalone: true,
  imports:  [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
})
export class DynamicFormRendererComponent {
   // No initial value since we don't know the controls
   dynamicForm!: FormGroup;
   formsJson: any; 
   DLU_TO_PIXELS_CONVERSION_FACTOR = 10;
 
   constructor(private fb: FormBuilder, private dataService: DataService) {}
 
 
   ngOnInit() {
 
    this.dataService.getFormsJsonData().subscribe((res: any)=>{
     
     this.formsJson = res;
     const group : any  = {};
 
     this.formsJson.forEach((field: any) => {
       if (!field.hidden) {
         field.location.x = this.convertDluToPx(field.location.x, 'x');
         field.location.y = this.convertDluToPx(field.location.y, 'y');
         field.size.height = this.convertDluToPx(field.size.height, 'y');
         field.size.width = this.convertDluToPx(field.size.width, 'x');
         
         group[field.name] = [field.defaultValue ? field.defaultValue : '', field.required ? [Validators.required]: []];  
       }
     });
     
     this.dynamicForm = this.fb.group(group);
    });
   }
 
   convertDluToPx(dlu: number, type: string): number {
     if (type == 'x') return dlu * this.DLU_TO_PIXELS_CONVERSION_FACTOR/4;
     else if (type == 'y') return dlu * this.DLU_TO_PIXELS_CONVERSION_FACTOR/8;
     return 0;
   }
 
   onSubmit() {
     console.log(this.dynamicForm.value);
   }

}
