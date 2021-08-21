import {PropsGet, PropsPost} from '../data/type';
import {BASE_URL} from '../data/url';

export function createRequestGet({link, headers, queryString}: PropsGet) {
  const full_url = BASE_URL + link + queryString;

  return new Promise(async (resolve, reject) => {
    console.log('createRequestGet - ###REQ GET TO#### ', full_url);
    console.log('createRequestGet - ###WITH HEADER### ', headers);

    fetch(full_url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        console.log('createRequestGet - #####RESPONSE SERVER##### ', resJson);
        resolve(resJson);
      })
      .catch(err => {
        console.log('createRequestGet - #####FULL PARAMS##### ', link, headers);
        console.log('createRequestGet - #####SOMETHING WENT WRONG##### ', err);
        reject(err);
      });
  });
}

export async function createRequestPost({link, headers, body}: PropsPost) {
  const full_url_ = BASE_URL + link;

  console.log('createRequestPost - ### REQ POST TO #### ', full_url_);
  console.log('createRequestPost - ### WITH BODY ### ', body);

  return new Promise((resolve, reject) => {
    fetch(full_url_, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        console.log('createRequestPost - #####RESPONSE SERVER##### ', resJson);
        resolve(resJson);
      })
      .catch(err => {
        console.log('createRequestPost - #####SOMETHING WENT WRONG##### ', err);
        reject(err);
      });
  });
}
