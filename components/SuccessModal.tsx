import { Check } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SuccessModal({ open, onOpenChange }: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md p-0 border-none'>
        <div className='flex flex-col items-center justify-center p-8 text-center'>
          <div className='rounded-full border-4 border-orange-400 p-3 mb-6'>
            <Check className='h-10 w-10 text-orange-400' />
          </div>
          <h2 className='text-2xl font-semibold text-teal-800 mb-2'>
            Successfully Subscribe!
          </h2>
        </div>
      </DialogContent>
    </Dialog>
  );
}
