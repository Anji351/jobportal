import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurloginComponent } from './recurlogin.component';

describe('RecurloginComponent', () => {
  let component: RecurloginComponent;
  let fixture: ComponentFixture<RecurloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
