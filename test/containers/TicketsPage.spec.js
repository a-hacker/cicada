// import React from 'react';
// import Enzyme, { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { Provider } from 'react-redux';
// import { createBrowserHistory } from 'history';
// import { ConnectedRouter } from 'connected-react-router';
// import TicketsPage from '../../app/containers/TicketsPage';
// import { configureStore } from '../../app/store/configureStore';
// import { ElectronHttpExecutor } from 'electron-updater/out/electronHttpExecutor';

Enzyme.configure({ adapter: new Adapter() });

// function setup(initialState) {
//   const store = configureStore(initialState);
//   const history = createBrowserHistory();
//   const provider = (
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <TicketsPage />
//       </ConnectedRouter>
//     </Provider>
//   );
//   const app = mount(provider);
//   return {
//     app
//   };
// }

describe('containers', () => {
  describe('App', () => {
    it('placeholder', () => {
      expect(true).toBe(true);
    });
    // it('should display initial count', () => {
    //   const { p } = setup();
    //   expect(p.text()).toMatch(/^0$/);
    // });

    // it('should display updated count after increment button click', () => {
    //   const { buttons, p } = setup();
    //   buttons.at(0).simulate('click');
    //   expect(p.text()).toMatch(/^1$/);
    // });

    // it('should display updated count after decrement button click', () => {
    //   const { buttons, p } = setup();
    //   buttons.at(1).simulate('click');
    //   expect(p.text()).toMatch(/^-1$/);
    // });

    // it('shouldnt change if even and if odd button clicked', () => {
    //   const { buttons, p } = setup();
    //   buttons.at(2).simulate('click');
    //   expect(p.text()).toMatch(/^0$/);
    // });

    // it('should change if odd and if odd button clicked', () => {
    //   const { buttons, p } = setup({ counter: 1 });
    //   buttons.at(2).simulate('click');
    //   expect(p.text()).toMatch(/^2$/);
    // });
  });
});
