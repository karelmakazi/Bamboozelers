import request from 'superagent'

export function addName(name){
   
  return request.post('/api/v1/name')
    .send(name)
    .then(res => console.log('res:', res))
    .catch(err => console.log(err))
  }