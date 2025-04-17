import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderAdminComponent } from './oder-admin.component';

describe('OderAdminComponent', () => {
  let component: OderAdminComponent;
  let fixture: ComponentFixture<OderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OderAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
