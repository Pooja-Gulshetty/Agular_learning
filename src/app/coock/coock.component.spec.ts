import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoockComponent } from './coock.component';

describe('CoockComponent', () => {
  let component: CoockComponent;
  let fixture: ComponentFixture<CoockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
