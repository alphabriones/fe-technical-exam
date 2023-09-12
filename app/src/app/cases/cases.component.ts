import { Component, OnInit } from '@angular/core';
import { CasesService } from '../services/cases.service';
import { dtCaseColumns } from './case';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],
})
export class CasesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(private casesService: CasesService) {}

  ngOnInit(): void {
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        this.casesService.getCases().subscribe((response) => {
          console.log('cases:', response.data);

          callback({
            recordsTotal: response.data.recordsTotal,
            recordsFiltered: response.data.recordsFiltered,
            data: response.data,
          });
        });
      },
      columns: dtCaseColumns,
      searching: false,
      dom: 'rtiplf',
    };
  }
}
