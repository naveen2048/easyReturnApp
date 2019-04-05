import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLineItemsComponent } from './order-line-items.component';

describe('OrderLineItemsComponent', () => {
  let component: OrderLineItemsComponent;
  let fixture: ComponentFixture<OrderLineItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLineItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLineItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
