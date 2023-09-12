import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CasesService } from '../services/cases.service';
import { dtCaseColumns } from './case';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],
})
export class CasesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(private casesService: CasesService, private router: Router) {}

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

        $('#table1 tbody').on('click', 'tr', function () {
          const id = $(this).find('td:first-child').text();
          console.log($(this).find('td:first-child').text());
          window.location.href = `/cases/${id}`;
        });
      },
      columns: dtCaseColumns,
      searching: false,
      dom: 'rtiplf',
    };
  }
}
