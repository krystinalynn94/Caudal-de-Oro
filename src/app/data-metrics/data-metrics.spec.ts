import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataMetrics } from './data-metrics';

describe('DataMetrics', () => {
  let component: DataMetrics;
  let fixture: ComponentFixture<DataMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataMetrics],
    }).compileComponents();

    fixture = TestBed.createComponent(DataMetrics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
