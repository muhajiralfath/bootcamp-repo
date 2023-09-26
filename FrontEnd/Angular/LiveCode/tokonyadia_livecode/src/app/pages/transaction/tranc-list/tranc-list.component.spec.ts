import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrancListComponent } from './tranc-list.component';

describe('TrancListComponent', () => {
  let component: TrancListComponent;
  let fixture: ComponentFixture<TrancListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrancListComponent]
    });
    fixture = TestBed.createComponent(TrancListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
