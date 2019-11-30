import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service';
import { ApiServiceMock } from 'src/app/mocks/api-service.mock';
import { MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [{ provide: ApiService, useClass: ApiServiceMock }, { provide: MatDialogRef, useValue: {}}],
      declarations: [ AccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
