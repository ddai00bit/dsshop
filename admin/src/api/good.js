import request from '@/utils/request'
import Qs from 'qs'
export function getList(query) {
  return request({
    url: 'good',
    method: 'get',
    params: query
  })
}

export function create(data) {
  data = Qs.parse({
    data
  })
  data = data.data
  return request({
    url: 'good',
    method: 'post',
    data
  })
}

export function edit(data) {
  data = Qs.parse({
    data
  })
  data = data.data
  return request({
    url: 'good/' + data.id,
    method: 'post',
    data
  })
}

export function destroy(id, data) {
  data = Qs.parse({
    data
  })
  return request({
    url: 'good/destroy/' + id,
    method: 'post',
    data
  })
}

export function details(id) {
  return request({
    url: 'good/' + id,
    method: 'get'
  })
}

export function state(id, data) {
  data = Qs.parse({
    data
  })
  data = data.data
  return request({
    url: 'good/state/' + id,
    method: 'post',
    data
  })
}

export function specification(id) {
  return request({
    url: 'good/specification/' + id,
    method: 'get'
  })
}
