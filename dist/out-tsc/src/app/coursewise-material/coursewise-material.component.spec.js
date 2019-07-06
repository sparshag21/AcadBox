import { async, TestBed } from '@angular/core/testing';
import { CoursewiseMaterialComponent } from './coursewise-material.component';
describe('CoursewiseMaterialComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoursewiseMaterialComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CoursewiseMaterialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=coursewise-material.component.spec.js.map