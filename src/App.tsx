import { Button, DatePicker } from 'antd'
import './App.css'

function App() {

  return (
    <>
      <Button type='primary' >PRESS ME</Button>
      <DatePicker placeholder='select date' />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
