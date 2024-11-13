import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperMattableComponent } from './wrapper-mattable.component';

describe('WrapperMattableComponent', () => {
  let component: WrapperMattableComponent;
  let fixture: ComponentFixture<WrapperMattableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperMattableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperMattableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
