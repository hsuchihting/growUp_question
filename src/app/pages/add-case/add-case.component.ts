import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrls: ['./add-case.component.scss']
})
export class AddCaseComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  save(){
this._router.navigate(['/questionBe'])
  }
}
