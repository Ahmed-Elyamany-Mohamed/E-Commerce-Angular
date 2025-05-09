import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHomeComponent } from './dashboard.component';

describe('SellerHomeComponent', () => {
  let component: SellerHomeComponent;
  let fixture: ComponentFixture<SellerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SellerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
