import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortRepoInfoComponent } from './short-repo-info.component';

describe('RepoBriefInfoComponent', () => {
  let component: ShortRepoInfoComponent;
  let fixture: ComponentFixture<ShortRepoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortRepoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortRepoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
