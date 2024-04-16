import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGeneratorComponent } from './icon-generator.component';

describe('IconGeneratorComponent', () => {
  let component: IconGeneratorComponent;
  let fixture: ComponentFixture<IconGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create icon generator component', () => {
    expect(component).toBeTruthy();
  });

  it('should generate icon on button click', () => {
    component.generateIcon();
    fixture.nativeElement.querySelector('button').click();
    expect(component.isLoading).toBe(true);
    setTimeout(() => {
      expect(component.isLoading).toBe(false);
      expect(component.prefix).toBeTruthy();
      expect(component.iconName).toBeTruthy();
    }, 3000);
  });
});
