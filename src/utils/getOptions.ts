import type { Options } from '../types';

const DEFAULT_OPTIONS = {
  maxHeight: 256,
};

export const getOptions = (userOptions: Options) => {
  return {
    ...DEFAULT_OPTIONS,
    ...userOptions,
  };
};
