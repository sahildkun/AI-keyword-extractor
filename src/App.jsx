import { useState } from "react"
import DialogDemo from "./components/Dialog"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TextArea from "./components/TextArea"
function App() {

  const [keywords, setKeywords] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const extractKeywordsHandler = async (text) => {
   setLoading(true);
   setIsOpen(true);

   const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: `Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n${text}`,
      temperature: 0.5,
      max_tokens: 60,
      frequency_penalty: 0.8,
    }),
  };

  const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
  const json = await response.json();
  const data = json.choices[0].text.trim();

  console.log(data);
  setKeywords(data);
  setIsOpen(true);
  
  }
 const closeModal = () => {
  setIsOpen(false);
 }
  return (
    <div className="h-[100vh] pt-28 text-center">
      <DialogDemo isOpen={isOpen} closeModal={closeModal}/>
     <Header/>
     <TextArea extractKeywords={extractKeywordsHandler}/>
     <Footer/>
    </div>
  )
}

export default App
