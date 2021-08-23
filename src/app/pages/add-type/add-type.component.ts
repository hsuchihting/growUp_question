import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreateGroupRequest } from 'src/app/model/createGroup-model';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss'],
})
export class AddTypeComponent implements OnInit {
  addTypeForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _http: HttpService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addTypeForm = this._fb.group({
      firstgroupname: '',
      secondgroupname: '',
      thirdgroupname: '',
    });
  }

  save() {
    let param = this.addTypeForm.getRawValue();
    alert('新增成功');

    let req: CreateGroupRequest = {
      id: 'string',
      secondID: 'string',
      thirdID: 'string',
      ...param,
    };
    this._http.createGroup(req).subscribe(
      (res) => {
        alert('新增成功');
        this._router.navigate(['/questionFe']);
      },
      (err) => {
        alert('傳送失敗');
      }
    );
  }
}
