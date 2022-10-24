import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEventComponent } from './top-event.component';

describe('TopEventComponent', () => {
  let component: TopEventComponent;
  let fixture: ComponentFixture<TopEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
