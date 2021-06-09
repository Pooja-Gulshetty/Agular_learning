import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhattaComponent } from './bhatta.component';

describe('BhattaComponent', () => {
  let component: BhattaComponent;
  let fixture: ComponentFixture<BhattaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhattaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhattaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
