import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-question-be',
  templateUrl: './question-be.component.html',
  styleUrls: ['./question-be.component.scss'],
})
export class QuestionBeComponent implements OnInit {
  formFe!: FormGroup;
  constructor(private _fb: FormBuilder) {}

  //*上層分類下拉選單
  firstSelectData = [
    {
      key: '1001',
      value: '上層分類01',
    },
    {
      key: '1002',
      value: '上層分類02',
    },
    {
      key: '1003',
      value: '上層分類03',
    },
  ];

  //*母分類下拉選單
  secondSelectData = [
    {
      key: '2001',
      value: '母分類01',
    },
    {
      key: '2002',
      value: '母分類02',
    },
    {
      key: '2003',
      value: '母分類03',
    },
  ];

  //*子分類下拉選單
  thirdSelectData = [
    {
      key: '3001',
      value: '子分類01',
    },
    {
      key: '3002',
      value: '子分類02',
    },
    {
      key: '3003',
      value: '子分類03',
    },
  ];

  //*table fakeData

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formFe = this._fb.group({
      firstSelect: '',
      secondSelect: '',
      thirdSelect: '',
      input: '',
    });
  }

  search() {
    alert('search');
  }

  add() {
    alert('add');
  }
}
