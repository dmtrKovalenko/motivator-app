import sha256 from 'crypto-js/sha256'

const DEFAULT_ENCRYPTION_KEY = 'SuperPassword27'

export function encrypt(value: string, key = DEFAULT_ENCRYPTION_KEY) {
  return sha256(value, key).toString()
}
