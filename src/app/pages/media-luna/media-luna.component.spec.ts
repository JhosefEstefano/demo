import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLunaComponent } from './media-luna.component';

describe('MediaLunaComponent', () => {
  let component: MediaLunaComponent;
  let fixture: ComponentFixture<MediaLunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaLunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaLunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
