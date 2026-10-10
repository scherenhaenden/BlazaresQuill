import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBlazaresQuillComponent } from './lib-blazares-quill.component';

describe('LibBlazaresQuillComponent', () => {
  let component: LibBlazaresQuillComponent;
  let fixture: ComponentFixture<LibBlazaresQuillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibBlazaresQuillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibBlazaresQuillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default theme of light', () => {
    expect(component.theme).toBe('light');
  });

  it('should update theme and emit themeChange when onThemeChange is called', () => {
    spyOn(component.themeChange, 'emit');
    component.onThemeChange('dark');
    expect(component.theme).toBe('dark');
    expect(component.themeChange.emit).toHaveBeenCalledWith('dark');
  });

  it('should apply the correct theme class to the host element', () => {
    component.theme = 'dark';
    fixture.detectChanges();
    const hostEl = fixture.nativeElement;
    expect(hostEl.className).toContain('theme-dark');

    component.theme = 'custom';
    fixture.detectChanges();
    expect(hostEl.className).toContain('theme-custom');
  });
});
