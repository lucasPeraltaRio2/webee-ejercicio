import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './modules/material.module';
import { ApiServiceMock } from './mocks/api-service.mock';
import { ApiService } from './services/api-service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, MaterialModule
      ],
      providers: [{ provide: ApiService, useClass: ApiServiceMock }],
      declarations: [
        AppComponent, HeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'webee-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('webee-challenge');
  });

});
