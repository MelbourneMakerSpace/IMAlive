import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveChatsComponent } from './active-chats.component';

describe('ActiveChatsComponent', () => {
  let component: ActiveChatsComponent;
  let fixture: ComponentFixture<ActiveChatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveChatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
