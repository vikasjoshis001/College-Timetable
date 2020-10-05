import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTTComponent } from './full-tt.component';

describe('FullTTComponent', () => {
  let component: FullTTComponent;
  let fixture: ComponentFixture<FullTTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
