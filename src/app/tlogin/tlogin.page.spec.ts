import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TloginPage } from './tlogin.page';

describe('TloginPage', () => {
  let component: TloginPage;
  let fixture: ComponentFixture<TloginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
