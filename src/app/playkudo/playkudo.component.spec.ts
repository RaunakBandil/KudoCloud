import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaykudoComponent } from './playkudo.component';

describe('PlaykudoComponent', () => {
  let component: PlaykudoComponent;
  let fixture: ComponentFixture<PlaykudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaykudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaykudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
