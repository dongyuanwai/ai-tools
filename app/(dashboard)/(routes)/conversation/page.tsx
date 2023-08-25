import Heading from '@/components/heading'
import {MessageSquare} from 'lucide-react'

const ConversationPage = () => {
    return (
        <div>
            <Heading
                title='Conversation'
                description='Generate text from a given prompt'
                icon={MessageSquare}
                iconColor='text-violet-500'
                bgColor='bg-violet-500/10'
            ></Heading>
            <div className='px-4 lg:px-8'>

            </div>
        </div>
    )
}

export default ConversationPage