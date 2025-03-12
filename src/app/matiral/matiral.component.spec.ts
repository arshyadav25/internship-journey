import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiralComponent } from './matiral.component';

describe('MatiralComponent', () => {
  let component: MatiralComponent;
  let fixture: ComponentFixture<MatiralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatiralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
