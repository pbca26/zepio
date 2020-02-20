// @flow

import path from 'path';
import os from 'os';

import { app } from '../electron'; // eslint-disable-line

export const locateZcashConf = () => {
  if (os.platform() === 'darwin') {
    return path.join(app.getPath('appData'), 'Komodo/RICK/', 'RICK.conf');
  }

  if (os.platform() === 'linux') {
    return path.join(app.getPath('home'), '.komodo/RICK/', 'RICK.conf');
  }

  return path.join(app.getPath('appData'), 'Komodo/RICK/', 'RICK.conf');
};
