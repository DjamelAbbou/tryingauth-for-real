import { useState } from "react"

export default function Home() {
  const [username, setUsername] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  
  return (
    <div className="flex justify-between">
      <div className="text-white flex flex-col gap-5 items-start pt-10">
        <label>Username</label>
        <input className="rounded-md" value={username} onChange={e => setUsername(e.target.value)}/>
        <label>Password</label>
        <input className="rounded-md" value={password} onChange={e => setPassword(e.target.value)}/>
        <div className="px-4 py-2 inline-block border-2 border-sky-500 text-lg rounded-lg">Sign Up</div>
      </div>
      <div>
        <div className="text-white border-4 border-sky-700 py-4 px-8 rounded-lg relative top-20">Sign In</div>
      </div>
    </div>
  )
}
