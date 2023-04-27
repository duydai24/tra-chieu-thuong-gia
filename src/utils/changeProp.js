
export function changeProp(data, name, value) {
  return {...data, [name]: value};
}
export function changePropWithIsChange(data, name, value) {
  return {...data, [name]: value, isChange: true};
}

