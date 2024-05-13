import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const ThankyouPage = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full '>
            <div className="container min-h-96 flex flex-col justify-center items-center gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 15 15"><path fill="#DCE1DE" stroke="#216869" stroke-linejoin="round" d="M4 7.5L7 10l4-5M7.5.5l-7 4v.72a9.651 9.651 0 0 0 7 9.28a9.651 9.651 0 0 0 7-9.28V4.5z"/></svg>
                <h2 className="text-2xl md:text-4xl font-bold text-center">Thank you for sending us the message.<br/> We'll get back to you shortly</h2>
                <Button onClick={()=>{navigate(-1)}} variant={"destructive"} className='uppercase px-4 py-2 border rounded-md'>Go back</Button>
            </div>
        </div>
    )
}

export default ThankyouPage