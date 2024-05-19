import { z } from "zod";
import { fieldValidators } from "../schema";


export const createMethedologySchema = z.object({
    name: fieldValidators.stringMin1,
    description: fieldValidators.string,
    type: fieldValidators.stringMin1,
    status: fieldValidators.string,
})

