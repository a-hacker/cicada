import { spy, stub } from 'sinon';
import settings from 'electron-settings';
import axios from 'axios';
import * as actions from '../../app/actions/tickets';

beforeAll(() => {
  stub(settings, 'get').returns('testValue');
  stub(axios, 'get').resolves({
    data: {
      issues: [
        {
          id: 'PROJ-1234'
        }
      ]
    }
  });
});

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
    setTimeout(() => {
      expect(dispatch.firstCall.lastArg).toMatchObject({
        type: actions.SET_TICKET
      });
    }, 5);
  });

  it('should initialize by setting ticket with included ticket data', () => {
    const fn = actions.initialize();
    const dispatch = spy();
    fn(dispatch);
    setTimeout(() => {
      expect(dispatch.firstCall.lastArg).toHaveProperty('context');
    }, 5);
  });
});
