import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesTopBarComponent } from './cases-top-bar.component';

describe('CasesTopBarComponent', () => {
  let component: CasesTopBarComponent;
  let fixture: ComponentFixture<CasesTopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesTopBarComponent]
    });
    fixture = TestBed.createComponent(CasesTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
