import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TregPage } from './treg.page';

describe('TregPage', () => {
  let component: TregPage;
  let fixture: ComponentFixture<TregPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TregPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
