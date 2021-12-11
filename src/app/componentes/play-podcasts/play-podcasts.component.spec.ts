import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayPodcastsComponent } from './play-podcasts.component';

describe('PlayPodcastsComponent', () => {
  let component: PlayPodcastsComponent;
  let fixture: ComponentFixture<PlayPodcastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayPodcastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayPodcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
