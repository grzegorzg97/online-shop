import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFlatComponent } from './item-flat.component';

describe('ItemFlatComponent', () => {
  let component: ItemFlatComponent;
  let fixture: ComponentFixture<ItemFlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemFlatComponent]
    });
    fixture = TestBed.createComponent(ItemFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
