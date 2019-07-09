import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';
describe('MessageService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(MessageService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=message.service.spec.js.map