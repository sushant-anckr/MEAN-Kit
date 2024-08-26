import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillPopupComponent } from './quill-popup.component';

describe('QuillPopupComponent', () => {
  let component: QuillPopupComponent;
  let fixture: ComponentFixture<QuillPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuillPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuillPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
