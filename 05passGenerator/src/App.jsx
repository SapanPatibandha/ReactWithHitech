import { useState, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(10);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800 text-center">Password Generator</h1>

          <div className="flex flex-col gap-3">
            <label className="flex flex-col text-sm text-gray-700">
              <span className="mb-1">Password Length</span>
              <input
                className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                min="4"
                max="20"
              />
            </label>

            <label className="flex items-center gap-3 text-sm text-gray-700">
              <input
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                type="checkbox"
                checked={numAllowed}
                onChange={(e) => setNumAllowed(e.target.checked)}
              />
              <span>Include Numbers</span>
            </label>

            <label className="flex items-center gap-3 text-sm text-gray-700">
              <input
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                type="checkbox"
                checked={charAllowed}
                onChange={(e) => setCharAllowed(e.target.checked)}
              />
              <span>Include Special Characters</span>
            </label>

            <button
              onClick={generatePassword}
              className="mt-2 w-full rounded-md bg-indigo-600 text-white py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Generate Password
            </button>
          </div>

          {password && (
            <div className="mt-3 rounded-md border border-gray-100 bg-gray-50 p-3">
              <h2 className="text-sm font-medium text-gray-600">Your Generated Password:</h2>
              <p className="mt-2 break-all font-mono text-gray-900">{password}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
