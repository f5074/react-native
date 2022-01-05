import axios from 'axios';
import {REACT_APP_API_HOST} from '@env';
import {Platform} from 'react-native';

let appMode = 'PROD';
export const setAppMode = v => {
  appMode = v;
  mgApi.defaults.baseURL = getAPIHost() + 'api';
};

export const getAppMode = () => appMode;

export const getAPIHost = () => {
  return REACT_APP_API_HOST;
};

export let restApi = axios.create({
  baseURL: getAPIHost() + 'api',
  headers: {
    platform: Platform.OS.toLowerCase(),
  },
});

export default {
  getAPIHost,
};
