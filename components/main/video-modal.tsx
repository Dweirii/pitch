"use client";
import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
}

export function VideoModal({isOpen, onClose}: VideoModalProps) {
    useEffect(() => {
        const handleEscape = (e:KeyboardEvent) => {
            if(e.key === "Escape") {
                onClose
            }
        }

        if(isOpen) {
            document.body.style.overflow = "hidden"
            window.addEventListener("keydown", handleEscape)
        }

        return () => {
            document.body.style.overflow = "auto"
            window.removeEventListener("keydown", handleEscape)
        }
    }, [isOpen, onClose]);

    if(!isOpen) {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}/>
            <div className="relative z-10 w-full max-w-4xl rounded-md bg-black p-2">
                <Button
                    onClick={onClose}
                    className="absolute -right-4 -top-4 rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                    aria-label="Close modal"
                >
                    <X className="w-4 h-4"/>
                </Button>
                <div className="aspect-video w-full overflow-hidden rounded-md bg-black">
                    <div className="flex h-full items-center justify-center">
                        <div className="aspect-video w-full overflow-hidden rounded-md bg-black">
                        <video
                            className="w-full h-full"
                            controls
                            autoPlay
                            muted
                            playsInline
                            src="/demo.mp4"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}