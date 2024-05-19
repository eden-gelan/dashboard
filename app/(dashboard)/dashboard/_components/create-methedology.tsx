"use client"
import FormInput from '@/components/form-field/form-input'
import { FormSelect } from '@/components/form-field/form-select'
import FormTextarea from '@/components/form-field/form-textarea'
import { HeaderText } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Modal } from '@/components/ui/modal'
import { cn } from '@/lib/utils'
import { createMethedologySchema } from '@/lib/validation/methodology'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { FieldPath, useForm } from 'react-hook-form'
import { z } from 'zod'


type FormDataType = z.infer<typeof createMethedologySchema>
type FormFiledType = FieldPath<FormDataType>;

const CreateMethedology = () => {
    const [open, setopen] = useState(false)
    const form = useForm<FormDataType>({
        resolver: zodResolver(createMethedologySchema),
        defaultValues: {
            name: "",
            description: "",
            status: "",
            type: ""
        }
    })
    const onSubmit = (data: FormDataType) => {

    }



    return (
        <div className='flex w-full justify-between items-start h-[50px]'>
            <h3 className='text-sm font-semibold'>All methodology</h3>
            <Button
                onClick={() => setopen(true)}
                className=' rounded-full'
                size={"sm"}
            >
                Create Methodology
            </Button>
            <Modal
                title="Create Methodology"
                isOpen={open}
                onClose={() => setopen(false)}
                className='h-[450px]'
            >
                <div className="">

                    <Form {...form}>
                        <div className={cn("grid gap-6",)} >
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="grid gap-3">
                                    <FormInput<FormFiledType>
                                        control={form.control}
                                        // disabled={isPending}
                                        name="name"
                                        label={"Phone Number"}
                                        autoCapitalize="none"
                                        autoCorrect="off"
                                    />
                                    <FormTextarea<FormFiledType>
                                        control={form.control}
                                        // disabled={isPending}
                                        name="description"
                                        label={"Desscription"}
                                        autoCapitalize="none"
                                        autoCorrect="off"
                                    />

                                    <FormSelect<FormFiledType>
                                        control={form.control}
                                        // disabled={isPending}
                                        name="type"
                                        label={"Type"}

                                    />
                                    <FormSelect<FormFiledType>
                                        control={form.control}
                                        // disabled={isPending}
                                        name="status"
                                        label={"Status"}

                                    />
                                    <div className=" flex gap-2 justify-between">
                                        <Button
                                            variant={"outline"}
                                            className='px-4 rounded-full text-primary bg-transparent hover:bg-white/10 hover:text-primary/80'
                                        >
                                            Cancle
                                        </Button>
                                        <Button
                                            className='px-4 rounded-full bg-primary hover:bg-primary/80 hover:text-white/80'
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </form >
                        </div >
                    </Form >

                </div >
            </Modal >
        </div >
    )
}

export default CreateMethedology