import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUpperComponent } from './footer-upper.component';

describe('FooterUpperComponent', () => {
  let component: FooterUpperComponent;
  let fixture: ComponentFixture<FooterUpperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterUpperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
