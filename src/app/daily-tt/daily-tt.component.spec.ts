import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTTComponent } from './daily-tt.component';

describe('DailyTTComponent', () => {
  let component: DailyTTComponent;
  let fixture: ComponentFixture<DailyTTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
