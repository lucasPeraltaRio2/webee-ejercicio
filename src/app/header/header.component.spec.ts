import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MaterialModule } from '../modules/material.module';
import { ApiService } from '../services/api-service';
import { ApiServiceMock } from '../mocks/api-service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../store/appReducers';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, StoreModule.forRoot(appReducers)],
      providers: [{ provide: ApiService, useClass: ApiServiceMock }],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar el nombre de usuario', () => {
    component.ngOnInit();
    expect(component.nombreUsuario).toBeDefined();
  });
});
