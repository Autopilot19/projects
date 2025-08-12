import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeqderComponent } from './heqder.component';

describe('HeqderComponent', () => {
  let component: HeqderComponent;
  let fixture: ComponentFixture<HeqderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeqderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeqderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
