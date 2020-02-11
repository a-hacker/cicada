// @flow
import settings from 'electron-settings';

export const SET_SETTINGS = 'SET_SETTINGS';
export const GET_SETTINGS = 'GET_SETTINGS';
export const INITIALIZE_SETTINGS = 'INITIALIZE_SETTINGS';

export function saveSettings(name: string, value: string) {
  settings.set(name, value);
  return {
    type: SET_SETTINGS,
    context: {
      name,
      value
    }
  };
}

export function initializeSettings() {
  return {
    type: INITIALIZE_SETTINGS,
    context: {
      host: settings.get('host'),
      username: settings.get('username'),
      token: settings.get('token')
    }
  };
}

export function getSettings(name: string) {
  const value = settings.get(name);
  return {
    type: GET_SETTINGS,
    context: {
      value
    }
  };
}
