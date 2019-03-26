import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiketweetComponent } from './liketweet.component';

describe('LiketweetComponent', () => {
  let component: LiketweetComponent;
  let fixture: ComponentFixture<LiketweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiketweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiketweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
