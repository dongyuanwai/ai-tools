"use client";
import {useState} from 'react'
import Heading from '@/components/heading'
import {MessageSquare} from 'lucide-react'
import { useForm } from 'react-hook-form'

import * as z from "zod"
import {formSchema} from './constants'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form,FormField, FormItem ,FormControl} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import axios from "axios"

const ConversationPage = () => {
    const router = useRouter()
    const [messages, setMessages] = useState<any>([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: '',
        }
    })
    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
        try{
            const userMessage = {
                role: "user",
                content: values.prompt,
            }
            const newMessages = [...messages,userMessage]
            const response = await axios.post("/api/conversation",{
                messages: newMessages,
            })
            setMessages((current:any) => [...current,userMessage,response.data])
            
            // form.reset()

        }catch(error:any){
            console.log("error",error)
        } finally {
            router.refresh()
        }
    }
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
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='rounded-lg border w-full p-4 px-3 md:px-6
                            focus-within:shadow-sm grid grid-cols-12 gap-2'
                        >
                            <FormField 
                                name="prompt"
                                render={({field})=>(
                                    <FormItem className='col-span-12 lg:col-span-10'>
                                        <FormControl className='m-0 p-0'>
                                            <Input
                                                className='border-0 outline-none focus-visible:ring-0
                                                focus-visible:ring-transparent'
                                                disabled={isLoading}
                                                placeholder='请输入你的问题'
                                                {...field}
                                            ></Input>
                                        </FormControl>
                                    </FormItem>
                                )}
                            ></FormField>
                            <Button className='col-span-12 lg:col-span-2 w-full'disabled={isLoading}>
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className='space-y-4 mt-4'>
                    content
                </div>
            </div>
        </div>
    )
}

export default ConversationPage