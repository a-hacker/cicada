// @flow
export const UPDATE_VIEW = 'UPDATE_VIEW';
export const RESET_VIEW = 'RESET_VIEW';

export function updateView(context: Object = {}) {
  return {
    type: UPDATE_VIEW,
    context
  };
}

export function resetView() {
  return {
    type: RESET_VIEW
  };
}
