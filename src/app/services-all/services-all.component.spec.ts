import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAllComponent } from './services-all.component';

describe('ServicesAllComponent', () => {
  let component: ServicesAllComponent;
  let fixture: ComponentFixture<ServicesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
