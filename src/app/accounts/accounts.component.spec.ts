import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AccountsComponent } from './accounts.component';
import { MaterialModule } from '../modules/material.module';
import { ApiService } from '../services/api-service';
import { ApiServiceMock } from '../mocks/api-service.mock';
import { StoreModule, Store } from '@ngrx/store';
import { appReducers, AppState } from '../store/appReducers';
import { RouterTestingModule } from '@angular/router/testing';
import { TestStore } from '../mocks/TestStore';
import { FetchUsersAction } from '../store/actions/users.actions';
import { By } from '@angular/platform-browser';

describe('AccountsComponent', () => {
  let component: AccountsComponent;
  let fixture: ComponentFixture<AccountsComponent>;
  let store: TestStore<AppState>;
  const getUsers = () => fixture.debugElement.queryAll(By.css('mat-card'));
  let dispatchSpy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, StoreModule.forRoot(appReducers)],
      providers: [{ provide: ApiService, useClass: ApiServiceMock }, { provide: Store, useClass: TestStore }],
      declarations: [AccountsComponent]
    })
      .compileComponents();
  }));

  beforeEach((inject([Store], (testStore: TestStore<AppState>) => {
    fixture = TestBed.createComponent(AccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = testStore;
    store.setState({ login: { token: null, loaded: true, loading: false, error: '' }, users: { listaAccounts: [], loaded: true, loading: false, error: '' } });
  })));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch filter todo action', () => {
    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      new FetchUsersAction({})
    );
  });
});
