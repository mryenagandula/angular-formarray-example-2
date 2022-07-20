import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-formarray-example';

  public form:FormGroup;

  public skillSet:any[];

  constructor(private fb:FormBuilder){
    this.formInit();
  }

  public formInit(){
    this.form = this.fb.group({
      skills: this.fb.array([
        this.fb.group({
          name:['',Validators.required],
          exp:['',Validators.required]
        })
      ])
    })
  }

  public addRow(){
    this.skills.push(
      this.fb.group({
        name:['',Validators.required],
        exp:['',Validators.required]
      })
    )
  }

  public removeRow(index){
    this.skills.removeAt(index);
  }

  public get skills(){
    return this.form.get('skills') as FormArray;
  }

  public submitForm(){
    this.skillSet = this.skills.getRawValue();
  }
}
