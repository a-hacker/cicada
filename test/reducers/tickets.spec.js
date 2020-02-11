import tickets from '../../app/reducers/tickets';
import { SET_TICKET } from '../../app/actions/tickets';

describe('reducers', () => {
  describe('tickets', () => {
    it('should handle initial state', () => {
      expect(tickets(undefined, {})).toHaveLength(0);
    });

    it('should handle SET_TICKET with no args', () => {
      expect(tickets([], { type: SET_TICKET })).toHaveLength(1);
    });

    it('should handle SET_TICKET with context', () => {
      const expected = { id: '1234', summary: 'Dummy' };
      expect(tickets([], { type: SET_TICKET, context: expected })).toContain(
        expected
      );
    });

    it('should handle unknown action type', () => {
      expect(tickets([], { type: 'unknown' })).toHaveLength(0);
    });
  });
});
