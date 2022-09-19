import React, { useContext } from 'react'

import { Context } from '../context'

import { useRouter } from 'next/router'

import axios from 'axios'
import logo from "../img/EK-logo.png"

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context)

  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault()

    if (username.length === 0 || secret.length === 0) return

    axios.put(
      'https://api.chatengine.io/users/',
      { username, secret },
      { headers: { 'Private-key': '012a584c-a902-4266-bdcc-9052697317d3' } }
    )
    .then(r => router.push('/chats'))
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">
          {/* <img src={logo} /> */}
          缺 Ebook 聊天室</div>
          <div className="input-container">
            <input
              placeholder="輸入使用者名稱："
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="密碼："
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            加入聊天
          </button>
        </form>
      </div>
    </div>
  )
}
