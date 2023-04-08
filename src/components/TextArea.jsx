import React, { useState } from 'react'
import { Toaster, toast } from 'sonner'


const TextArea = ({extractKeywords}) => {
  const [ text , setText ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if(text === '') {
      toast.error('Text field is empty')
     return
    }

    extractKeywords(text);
  }
  

   return (
<>
<Toaster richColors  position='bottom-center'/>
<form  className='flex flex-col max-w-md mx-auto my-20 space-y-10' action="" onSubmit={handleSubmit}>
        
<textarea
        className='bg-gray-600 p-5 bg-opacity-30 bg-blur-md w-full h-40 md:w-full'
        onChange={(e) => setText(e.target.value)}
       
        value={text}
        maxLength={1500}
      />
    <button 
    className='hover:bg-white border-white border-2 hover:text-black rounded-sm p-2 bg-transparent text-white' 
    type='submit'
    >Extract keywords</button>
</form>
</>
  )
}

export default TextArea