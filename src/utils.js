import { formFiller } from './actions';

export const handleInfo = (key, value, type) => {
  formFiller(key, value, type);
};

export const log = console.log;
