import axios from 'axios';
import { errorToast } from './toasts';

/**
 * Function that runs a POST using Axios.
 * @param {string} formUrl
 * @param {FormData} formData
 */
export async function axiosPost(formUrl, formData) {
  await axios.post(formUrl, formData).then((_data) => {
    // for debugging
    //console.log(_data);
  }).catch((_err) => {
    // for debugging
    //console.log(_err)
    errorToast();
  })
}
