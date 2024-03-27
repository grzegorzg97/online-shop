import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortItemsComponent } from './sort-items.component';

describe('SortItemsComponent', () => {
  let component: SortItemsComponent;
  let fixture: ComponentFixture<SortItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SortItemsComponent]
    });
    fixture = TestBed.createComponent(SortItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
