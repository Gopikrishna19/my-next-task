import {registerWorker} from './register';

export default {
  registerWorker,
  removeLoader: () => document.getElementById('loader').remove()
};
