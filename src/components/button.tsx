import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps  {
    children: ReactNode;
    asChild?: boolean;
}

export function Button ({children, asChild}: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp 
        className= {clsx(
            " py-4 px-3 bg-cyan-300 rounded font-semibold text-black w-full transition-color hover:bg-cyan-200 focus:ring-white ring-2  ", 
            {

            }
            )}
            > 
            {children} 
        </Comp>
    )  
    }