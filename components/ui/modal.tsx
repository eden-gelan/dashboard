"use client";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
interface ModalProps {
    title?: string;
    description?: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    footer?: React.ReactNode,
    className?: string
}

export const Modal: React.FC<ModalProps> = ({
    title,
    isOpen,
    onClose,
    children,
    footer,
    className
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}  >
            <DialogContent className=" overflow-hidden p-0 z-[1000000000000] border-none">
                {title && <DialogHeader className="">
                    <DialogTitle className="f font-normal p-4 text-[18px] text-white">{title}</DialogTitle>
                </DialogHeader>}
                <div className={cn(" px-4 overflow-y-auto h-[450px]  no-scrollbar relative", className)}>
                    <button className="h-0 p-0  absolute"></button>
                    {children}
                </div>
                {footer && <DialogFooter className="">
                    {footer}
                </DialogFooter>}
            </DialogContent>
        </Dialog >
    );
};
