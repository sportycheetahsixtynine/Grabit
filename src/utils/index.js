export function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/
  return !regex.test(email)
}

export function validatePhone(phone) {
  const regex = /(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/g
  return !regex.test(phone)
}
