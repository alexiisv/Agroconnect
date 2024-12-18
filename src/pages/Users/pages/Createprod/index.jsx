import Input from '@/components/Input'
import { useState } from 'react'
import toast from 'react-hot-toast'
import useUsersContext from '../../hooks/useUsersContext'

function Create () {
  const { postUser } = useUsersContext()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('USER_ROLE')

  const clearForm = () => {
    setUsername('')
    setEmail('')
    setPassword('')
    setRole('USER_ROLE')
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault()

    if (!username || !email || !password) {
      return toast.error('All fields are required')
    }

    try {
      postUser({
        username,
        email,
        password,
        role
      })

      clearForm()
    } catch (error) {}
  }

  return (
    <div>
      <h2 className='text-3xl font-semibold'>Crear Producto</h2>

      <form className='mt-4' onSubmit={handleOnSubmit}>
        <div className='w-full grid grid-cols gap-4'>
          <Input
            id='username'
            label='Producto'
            placeholder='Ingrese producto'
            value={username}
            setValue={setUsername}
          />

          <Input
            id='email'
            label='Descripción'
            type='text'
            placeholder='Descripcion del producto'
            value={email}
            setValue={setEmail}
          />

          <Input
            id='password'
            label='Id_producto'
            type='password'
            placeholder='Id'
            value={password}
            setValue={setPassword}
          />

          <div>
            <label
              className='mb-1 block text-sm font-semibold'
              htmlFor='role'
            >
             Estado
            </label>
            <select
              id='role'
              value={role}
              onChange={(event) => setRole(event.target.value)}
              className='bg-slate-50 py-1 px-2 border border-slate-300 text-sm rounded-lg hover:bg-slate-50 focus:bg-slate-50 focus:ring-slate-500 focus:border-slate-500 block w-full focus:outline-none transition duration-150 ease-in-out'
            >
              <option value='USER_ROLE'>Agotado</option>
              <option value='ADMIN_ROLE'>Disponible</option>
            </select>
          </div>

        </div>
        <div className='mt-4'>
          <button
            type='submit'
            className='bg-slate-800 flex justify-center items-center text-white font-semibold rounded-lg py-1 px-4 hover:bg-slate-900 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
          >Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default Create
