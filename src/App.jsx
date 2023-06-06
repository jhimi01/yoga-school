import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleMood from './component/ToggleMood'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Button</button>
<button className="btn btn-secondary">Button</button>
<button className="btn btn-accent">Button</button>
<button className="btn btn-ghost">Button</button>
<button className="btn btn-link">Button</button>
<br />
<br />
<button className="btn btn-outline">Default</button>
<button className="btn btn-outline btn-primary">Primary</button>
<button className="btn btn-outline btn-secondary">Secondary</button>
<button className="btn btn-outline btn-accent">Accent</button>
<br /><br />
<ToggleMood />
    </>
  )
}

export default App
