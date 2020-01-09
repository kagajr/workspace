import { TestBed } from '@angular/core/testing';

import { CanvasStrokeService } from './canvas-stroke.service';

describe('CanvasStrokeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanvasStrokeService = TestBed.get(CanvasStrokeService);
    expect(service).toBeTruthy();
  });
});
