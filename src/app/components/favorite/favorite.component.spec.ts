import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteImgComponent } from './favorite.component';

describe('FavoriteImgComponent', () => {
  let component: FavoriteImgComponent;
  let fixture: ComponentFixture<FavoriteImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
