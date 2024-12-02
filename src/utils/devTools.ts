export const checkIfServerOrClient = (identifier: string) => {
  if (typeof window == 'undefined') {
    console.log(`${identifier} is on server side`)
  } else {
    console.log(`${identifier} is on client side`)
  }
}
