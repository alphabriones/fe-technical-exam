import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],
})
export class CasesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  data: any;

  ngOnInit(): void {
    fetch('http://localhost:8000/api/cases')
      .then((response) => response.json())
      .then((quotesData) => {
        this.data = quotesData.data;
      });

    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        fetch('http://localhost:8000/api/cases')
          .then((response) => response.json())
          .then((resp) => {
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: resp.data, // <-- see here
            });
          });
      },
      columns: [
        {
          title: 'ID',
          data: 'case_number',
        },
      ],
    };
  }
}
