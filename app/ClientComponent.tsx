'use client'

import { useFormState } from 'react-dom'
import testAction from './action'
import { useEffect } from 'react'

export default function ClientComponent() {
  const [state, action] = useFormState(testAction, {
    message: 'server action not called',
  })

  useEffect(() => {
    async function callAction() {
      console.log('calling server action in useEffect')
      const res = await testAction()
      console.log('action response:', res)
    }
    callAction()
  })

  return (
    <div>
      client component
      <form action={action}>
        <button type="submit" className="p-4 bg-blue-400 rounded">
          Run server action
        </button>
        <div>message: {state.message}</div>
      </form>
    </div>
  )
}
