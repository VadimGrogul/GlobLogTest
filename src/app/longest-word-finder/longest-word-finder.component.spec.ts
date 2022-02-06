import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongestWordFinderComponent } from './longest-word-finder.component';

describe('LongestWordFinderComponent', () => {
  let component: LongestWordFinderComponent;
  let fixture: ComponentFixture<LongestWordFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongestWordFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongestWordFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
