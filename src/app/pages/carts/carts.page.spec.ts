import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartsPage } from './carts.page';

describe('CartsPage', () => {
  let component: CartsPage;
  let fixture: ComponentFixture<CartsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
