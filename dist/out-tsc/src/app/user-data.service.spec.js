import { TestBed } from '@angular/core/testing';
import { UserDataService } from './user-data.service';
describe('UserDataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(UserDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user-data.service.spec.js.map