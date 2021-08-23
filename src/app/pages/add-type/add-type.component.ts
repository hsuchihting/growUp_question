import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss'],
})
export class AddTypeComponent implements OnInit {
  addTypeForm!: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}

  createForm() {
    this.addTypeForm = this._fb.group({
      firstgroupname: '',
      secondgroupname: '',
      thirdgroupname: '',
    });
  }
  save() {
    alert('新增成功');
  }
}
