import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [MatExpansionModule, ReactiveFormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  public panelOpenState: boolean = false;
  public studentForm: FormGroup<any> = this.fb.group({
    registerNo: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    dob: [],
    fatherName: ['', Validators.required],
    motherName: ['', Validators.required],
    address: [''],
    mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  public get allControls(): { [key: string]: FormControl } {
    // Consider limiting access if necessary
    if (!this.studentForm) {
      throw new Error('Form not initialized yet'); // Or return an empty object or throw a more suitable error
    }
    return this.studentForm.controls as { [key: string]: FormControl };
  }

  public onStudentFormSubmit() {
    console.log(this.studentForm);

  }

}
