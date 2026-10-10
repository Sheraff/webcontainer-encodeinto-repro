const a = new TextEncoder()
const b = new TextEncoder()

const first = a.encodeInto('abc', new Uint8Array(9))
const sameEncoder = a.encodeInto('', new Uint8Array(4))
const otherEncoder = b.encodeInto('', new Uint8Array(4))

console.log("a.encodeInto('abc') ", first)
console.log("a.encodeInto('')    ", sameEncoder, '<- expected { read: 0, written: 0 }')
console.log("b.encodeInto('')    ", otherEncoder, '<- expected { read: 0, written: 0 }')

console.log(
  sameEncoder.written === 0 && otherEncoder.written === 0
    ? '\nOK: encodeInto("") reports 0 bytes'
    : "\nBUG: encodeInto(\"\") returns the previous call's { read, written }",
)
