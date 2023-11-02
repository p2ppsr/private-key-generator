import React, { useState } from 'react'
import { PrivateKey, PublicKey } from '@bsv/sdk'

const App = () => {
  const [privateKey, setPrivateKey] = useState('Generate a private key!')
  const [publicKey, setPublicKey] = useState('Corresponding to the generated private key.')
  const handleClick = () => {
    const key = PrivateKey.fromRandom()
    setPrivateKey(key.toHex())
    setPublicKey(key.toPublicKey().toDER())
  }

  return (
    <center style={{ margin: '1em' }}>
      <h1>Private Key Generator!</h1>
      <p><b>Private Key</b>: {privateKey}</p>
      <p><b>Public Key</b>: {publicKey}</p>
      <button onClick={handleClick}>New Key</button>
    </center>
  )
}

export default App
