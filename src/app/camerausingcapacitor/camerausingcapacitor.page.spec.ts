import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamerausingcapacitorPage } from './camerausingcapacitor.page';

describe('CamerausingcapacitorPage', () => {
  let component: CamerausingcapacitorPage;
  let fixture: ComponentFixture<CamerausingcapacitorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerausingcapacitorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamerausingcapacitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
