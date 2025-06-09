import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateNavComponent } from './private-nav.component';

describe('PrivateNavComponent', () => {
  let component: PrivateNavComponent;
  let fixture: ComponentFixture<PrivateNavComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
