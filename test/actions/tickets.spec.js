import { spy } from 'sinon';
import * as actions from '../../app/actions/tickets';

describe('actions', () => {
  it('should add new tickets', () => {
    expect(actions.addTicket()).toMatchObject({ type: actions.SET_TICKET });
  });

  it('should add ticket definition', () => {
    const expected = { id: '123', summary: 'A dummy ticket' };
    expect(actions.addTicket(expected)).toMatchObject({ context: expected });
  });

  it('should initialize by setting tickets', () => {
    const fn = actions.initialize();
    const dispatch = spy();
    fn(dispatch);
    expect(dispatch.called).toBe(true);
    expect(dispatch.firstCall.lastArg).toMatchObject({
      type: actions.SET_TICKET
    });
  });

  it('should initialize by setting ticket with included ticket data', () => {
    const fn = actions.initialize();
    const dispatch = spy();
    fn(dispatch);
    expect(dispatch.called).toBe(true);
    expect(dispatch.firstCall.lastArg).toHaveProperty('context');
  });
});
