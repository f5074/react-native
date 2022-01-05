import {restApi} from '../Api';

export async function getReviews() {
  const {data, status} = await restApi.get('/review');
  //   console.log(data, status);
  return data;
}

export async function postReview(params) {
  const {data, status} = await restApi.post('/review', params);
  //   console.log(data, status);
  return data;
}
