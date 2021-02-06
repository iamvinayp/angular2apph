import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  empCode: string = this._activatedRoute.snapshot.params['code'];

  ngOnInit() {
    //let empCode: string = this._activatedRoute.snapshot.params['code'];
    // console.log(empCode);
  }

}
