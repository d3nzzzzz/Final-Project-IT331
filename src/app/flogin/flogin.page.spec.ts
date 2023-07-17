import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloginPage } from './flogin.page';

describe('FloginPage', () => {
  let component: FloginPage;
  let fixture: ComponentFixture<FloginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
