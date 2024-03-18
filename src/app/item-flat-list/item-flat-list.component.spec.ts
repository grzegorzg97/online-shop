import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFlatListComponent } from './item-flat-list.component';

describe('ItemFlatListComponent', () => {
  let component: ItemFlatListComponent;
  let fixture: ComponentFixture<ItemFlatListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemFlatListComponent]
    });
    fixture = TestBed.createComponent(ItemFlatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
