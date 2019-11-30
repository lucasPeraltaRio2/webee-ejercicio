import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MaterialModule } from '../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api-service';
import { ApiServiceMock } from '../mocks/api-service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { appReducers } from '../store/appReducers';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule, RouterTestingModule, StoreModule.forRoot(appReducers), BrowserAnimationsModule],
      providers: [{ provide: ApiService, useClass: ApiServiceMock }],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
