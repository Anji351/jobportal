import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruregisterComponent } from './recruregister.component';

describe('RecruregisterComponent', () => {
  let component: RecruregisterComponent;
  let fixture: ComponentFixture<RecruregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
