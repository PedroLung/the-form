import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastradoComponent } from './cadastrado.component';

describe('CadastradoComponent', () => {
  let component: CadastradoComponent;
  let fixture: ComponentFixture<CadastradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
