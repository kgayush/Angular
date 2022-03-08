import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrls: ['./fetch-api.component.css']
})
export class FetchApiComponent implements OnInit {

  public datas = [] as any;


  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getData()
      .subscribe(data => this.datas = data);
  }

}
