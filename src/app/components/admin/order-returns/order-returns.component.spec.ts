import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReturnsComponent } from './order-returns.component';

describe('OrderReturnsComponent', () => {
  let component: OrderReturnsComponent;
  let fixture: ComponentFixture<OrderReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
