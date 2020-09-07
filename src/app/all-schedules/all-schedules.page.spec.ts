import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllSchedulesPage } from './all-schedules.page';

describe('AllSchedulesPage', () => {
  let component: AllSchedulesPage;
  let fixture: ComponentFixture<AllSchedulesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSchedulesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllSchedulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
