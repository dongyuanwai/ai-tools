"use client"

import * as z from "zod"

export const formSchema = z.object({
    // 校验 prompt 字段是否存在
    prompt: z.string().min(1,{
        message: "Prompt is required",
    }),
})
