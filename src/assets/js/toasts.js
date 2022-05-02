import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

export function errorToast() {
  return createToast(
    {
      title: 'Error!',
      description: 'There was an error sending your message.\nTry again later.',
    },
    {
      position: 'bottom-right',
      type: 'danger',
      timeout: 3000,
      transition: 'slide',
    }
  );
}

export function successToast() {
  return createToast(
    {
      title: 'Success!',
      description: 'We successfully received your message!',
    },
    {
      position: 'bottom-right',
      type: 'success',
      timeout: 3000,
      transition: 'slide',
    }
  );
}
