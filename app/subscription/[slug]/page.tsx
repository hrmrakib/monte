"use client";

import type React from "react";

import { useState } from "react";
import { CreditCard, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { SuccessModal } from "@/components/SuccessModal";

export default function PaymentForm() {
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<"card" | null>("card");
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    country: "United States",
    postalCode: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Format card number with spaces
    if (name === "cardNumber") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
      setFormData({ ...formData, [name]: formatted });
      return;
    }

    // Format expiry date
    if (name === "expiry") {
      const formatted = value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "$1/$2");
      setFormData({ ...formData, [name]: formatted });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (value: string) => {
    setFormData({ ...formData, country: value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Card number validation
    if (!formData.cardNumber.replace(/\s/g, "")) {
      newErrors.cardNumber = "Card number is required";
    } else if (formData.cardNumber.replace(/\s/g, "").length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    // Expiry validation
    if (!formData.expiry) {
      newErrors.expiry = "Expiry date is required";
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = "Expiry date format should be MM/YY";
    }

    // CVC validation
    if (!formData.cvc) {
      newErrors.cvc = "CVC is required";
    } else if (!/^\d{3,4}$/.test(formData.cvc)) {
      newErrors.cvc = "CVC must be 3 or 4 digits";
    }

    // Postal code validation
    if (!formData.postalCode) {
      newErrors.postalCode = "Postal code is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success modal instead of toast
      setShowSuccessModal(true);

      // Reset form
      setFormData({
        email: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
        country: "United States",
        postalCode: "",
      });
    } catch (error) {
      toast({
        title: "Payment failed",
        description:
          "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='w-full flex items-center justify-center h-screen'>
      <div className='max-w-md mx-auto rounded-lg bg-white p-6 shadow-lg'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <Button
            type='button'
            className='w-full bg-teal-800 hover:bg-teal-700 text-white'
          >
            Pay
          </Button>

          <div className='text-center text-sm text-gray-500'>
            Or Pay With Card
          </div>

          <div className='flex gap-2'>
            <div className='flex-1'>
              <div className='relative'>
                <div className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background'>
                  <CreditCard className='mr-2 h-4 w-4 text-gray-500' />
                  <span className='text-gray-700'>Card</span>
                </div>
              </div>
            </div>
            <Button
              type='button'
              variant='outline'
              size='icon'
              className='h-10 w-10'
            >
              <ChevronDown className='h-4 w-4' />
            </Button>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleInputChange}
              className={cn(errors.email && "border-red-500")}
            />
            {errors.email && (
              <p className='text-xs text-red-500'>{errors.email}</p>
            )}
          </div>

          <div className='space-y-2'>
            <Label htmlFor='cardNumber'>Card number</Label>
            <div className='relative'>
              <Input
                id='cardNumber'
                name='cardNumber'
                placeholder='1234 1234 1234 1234'
                value={formData.cardNumber}
                onChange={handleInputChange}
                maxLength={19}
                className={cn(errors.cardNumber && "border-red-500")}
              />
              <div className='absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1'>
                <svg
                  width='24'
                  height='17'
                  viewBox='0 0 24 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_709_158)'>
                    <path
                      d='M21.75 0.75H2.25C1.14543 0.75 0.25 1.64543 0.25 2.75V14.25C0.25 15.3546 1.14543 16.25 2.25 16.25H21.75C22.8546 16.25 23.75 15.3546 23.75 14.25V2.75C23.75 1.64543 22.8546 0.75 21.75 0.75Z'
                      fill='#FAFAFA'
                      stroke='black'
                      stroke-opacity='0.2'
                      stroke-width='0.5'
                    />
                    <path
                      d='M2.78773 6.41444C2.26459 6.12751 1.66754 5.89674 1 5.73659L1.028 5.61188H3.76498C4.13596 5.62489 4.43699 5.73651 4.53495 6.13071L5.12977 8.96659L5.31198 9.82073L6.97797 5.61188H8.77679L6.10288 11.7775H4.30397L2.78773 6.41444ZM10.1 11.7841H8.39883L9.46285 5.61188H11.1639L10.1 11.7841ZM16.2668 5.76277L16.0354 7.09559L15.8816 7.03004C15.5737 6.90525 15.1674 6.78054 14.6144 6.79371C13.9427 6.79371 13.6415 7.06277 13.6345 7.32546C13.6345 7.61441 13.9989 7.80484 14.5939 8.08725C15.574 8.52719 16.0286 9.06557 16.0218 9.76819C16.0081 11.0486 14.846 11.8761 13.0611 11.8761C12.2979 11.8694 11.5628 11.7181 11.1638 11.5476L11.4019 10.162L11.6259 10.2607C12.1789 10.4907 12.5428 10.589 13.222 10.589C13.7118 10.589 14.2369 10.3984 14.2436 9.98488C14.2436 9.71565 14.0199 9.51851 13.3617 9.21646C12.7178 8.92087 11.8568 8.42848 11.8708 7.54198C11.8781 6.34042 13.0611 5.5 14.741 5.5C15.399 5.5 15.9312 5.63789 16.2668 5.76277ZM18.5278 9.59749H19.9417C19.8718 9.28889 19.5496 7.81147 19.5496 7.81147L19.4307 7.27964C19.3467 7.50943 19.1999 7.88373 19.2069 7.87056C19.2069 7.87056 18.6678 9.2429 18.5278 9.59749ZM20.6276 5.61188L22 11.784H20.4249C20.4249 11.784 20.2708 11.0748 20.2219 10.8581H18.0378C17.9746 11.0222 17.6808 11.784 17.6808 11.784H15.8958L18.4226 6.12399C18.5977 5.72342 18.906 5.61188 19.3118 5.61188H20.6276Z'
                      fill='#171E6C'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_709_158'>
                      <rect
                        width='24'
                        height='16'
                        fill='white'
                        transform='translate(0 0.5)'
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width='24'
                  height='17'
                  viewBox='0 0 24 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M22 0.5H2C0.89543 0.5 0 1.39543 0 2.5V14.5C0 15.6046 0.89543 16.5 2 16.5H22C23.1046 16.5 24 15.6046 24 14.5V2.5C24 1.39543 23.1046 0.5 22 0.5Z'
                    fill='#252525'
                  />
                  <path
                    d='M9 13.5C11.7614 13.5 14 11.2614 14 8.5C14 5.73858 11.7614 3.5 9 3.5C6.23858 3.5 4 5.73858 4 8.5C4 11.2614 6.23858 13.5 9 13.5Z'
                    fill='#EB001B'
                  />
                  <path
                    d='M15 13.5C17.7614 13.5 20 11.2614 20 8.5C20 5.73858 17.7614 3.5 15 3.5C12.2386 3.5 10 5.73858 10 8.5C10 11.2614 12.2386 13.5 15 13.5Z'
                    fill='#F79E1B'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M12 4.49963C13.2144 5.41184 14 6.86418 14 8.5C14 10.1358 13.2144 11.5882 12 12.5004C10.7856 11.5882 10 10.1358 10 8.5C10 6.86418 10.7856 5.41184 12 4.49963Z'
                    fill='#FF5F00'
                  />
                </svg>

                <svg
                  width='24'
                  height='17'
                  viewBox='0 0 24 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M22 0.5H2C0.89543 0.5 0 1.39543 0 2.5V14.5C0 15.6046 0.89543 16.5 2 16.5H22C23.1046 16.5 24 15.6046 24 14.5V2.5C24 1.39543 23.1046 0.5 22 0.5Z'
                    fill='#016FD0'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M13.7637 13.8939V8.1925L23.9112 8.20161V9.77651L22.7383 11.0299L23.9112 12.2948V13.9031H22.0386L21.0434 12.8049L20.0553 13.9072L13.7637 13.8939Z'
                    fill='#FFFFFE'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M14.4414 13.2688V8.81995H18.2137V9.84483H15.6628V10.5405H18.1529V11.5483H15.6628V12.2317H18.2137V13.2688H14.4414Z'
                    fill='#016FD0'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M18.1954 13.2687L20.2827 11.0417L18.1953 8.81995H19.811L21.0865 10.23L22.3656 8.81995H23.9117V8.85495L21.8689 11.0417L23.9117 13.2056V13.2687H22.35L21.0519 11.8446L19.7671 13.2687H18.1954Z'
                    fill='#016FD0'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M14.2369 3.13196H16.6829L17.5421 5.08281V3.13196H20.5619L21.0827 4.59353L21.6052 3.13196H23.9111V8.83335H11.7246L14.2369 3.13196Z'
                    fill='#FFFFFE'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M14.7006 3.75134L12.7266 8.19651H14.0805L14.4529 7.30635H16.4708L16.843 8.19651H18.2306L16.2648 3.75134H14.7006ZM14.8702 6.30878L15.4622 4.89371L16.0538 6.30878H14.8702Z'
                    fill='#016FD0'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M18.2129 8.19569V3.75061L20.116 3.75715L21.0953 6.48988L22.0809 3.75061H23.9125V8.19569L22.7339 8.20612V5.15278L21.6213 8.19569H20.5455L19.4099 5.14235V8.19569H18.2129Z'
                    fill='#016FD0'
                  />
                </svg>

                <svg
                  width='24'
                  height='17'
                  viewBox='0 0 24 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.9972 16.2499L21.9994 16.2499C22.9545 16.2581 23.7381 15.4773 23.75 14.5042L23.75 2.5063C23.7462 2.03569 23.5589 1.58617 23.2297 1.2568C22.9014 0.928269 22.4589 0.746149 21.9972 0.750071L2.00064 0.750062C1.54109 0.746149 1.09858 0.928269 0.770279 1.2568C0.441145 1.58617 0.253838 2.03569 0.250008 2.50426L0.25 14.4937C0.253838 14.9643 0.441145 15.4138 0.770279 15.7432C1.09858 16.0717 1.54109 16.2538 2.00277 16.2499H21.9972ZM21.9962 16.7499C21.9958 16.7499 21.9955 16.7499 21.9951 16.7499L21.9972 16.7499H21.9962Z'
                    fill='#FAFAFA'
                    stroke='black'
                    stroke-opacity='0.2'
                    stroke-width='0.5'
                  />
                  <path
                    d='M12.6133 16.4999H21.9981C22.5249 16.5043 23.0318 16.2993 23.4074 15.9299C23.783 15.5605 23.9965 15.057 24.0009 14.5303V12.1716C20.457 14.2059 16.6137 15.6668 12.6133 16.4999Z'
                    fill='#F27712'
                  />
                  <path
                    d='M23.173 9.79643H22.3205L21.3605 8.53023H21.2695V9.79643H20.5743V6.65161H21.6005C22.4033 6.65161 22.8667 6.98264 22.8667 7.5785C22.8667 8.06678 22.5771 8.38126 22.0557 8.48057L23.173 9.79643ZM22.1467 7.60333C22.1467 7.29712 21.915 7.13988 21.4847 7.13988H21.2695V8.09161H21.4681C21.915 8.09161 22.1467 7.92609 22.1467 7.60333ZM18.1412 6.65161H20.1109V7.18126H18.8364V7.88471H20.0612V8.42264H18.8364V9.27505H20.1109V9.80471H18.1412V6.65161ZM15.9067 9.87919L14.4005 6.64333H15.1619L16.1136 8.76195L17.0736 6.64333H17.8185L16.2957 9.87919H15.9233H15.9067ZM9.60881 9.87092C8.5495 9.87092 7.72192 9.15092 7.72192 8.21574C7.72192 7.3054 8.56606 6.56885 9.62537 6.56885C9.9233 6.56885 10.1716 6.62678 10.4778 6.75919V7.48747C10.2459 7.25965 9.93389 7.13187 9.60881 7.13161C8.94674 7.13161 8.44192 7.61161 8.44192 8.21574C8.44192 8.85299 8.93847 9.30816 9.64192 9.30816C9.9564 9.30816 10.1964 9.20885 10.4778 8.96057V9.68885C10.1633 9.82126 9.89847 9.87092 9.60881 9.87092ZM7.50675 8.83643C7.50675 9.44885 7.00192 9.87092 6.27364 9.87092C5.74399 9.87092 5.3633 9.68885 5.04054 9.27505L5.49571 8.88609C5.65295 9.16747 5.91778 9.30816 6.24881 9.30816C6.5633 9.30816 6.78675 9.11781 6.78675 8.86954C6.78675 8.72885 6.72054 8.62126 6.57985 8.5385C6.42559 8.46365 6.26495 8.40271 6.09985 8.35643C5.44606 8.14954 5.22261 7.92609 5.22261 7.48747C5.22261 6.97436 5.70261 6.5854 6.33157 6.5854C6.72882 6.5854 7.08468 6.70954 7.38261 6.94126L7.01847 7.35505C6.87415 7.19683 6.66987 7.10671 6.45571 7.10678C6.15778 7.10678 5.94261 7.25574 5.94261 7.45436C5.94261 7.61988 6.06675 7.71092 6.48054 7.85161C7.27502 8.09988 7.50675 8.33161 7.50675 8.84471V8.83643ZM4.08881 6.65161H4.78399V9.80471H4.08881V6.65161ZM1.85433 9.80471H0.828125V6.65161H1.85433C2.97985 6.65161 3.75778 7.29712 3.75778 8.22402C3.75778 8.69574 3.52606 9.14264 3.12054 9.44057C2.77295 9.68885 2.38399 9.80471 1.84606 9.80471H1.85433ZM2.66537 7.43781C2.43364 7.25574 2.16881 7.18954 1.71364 7.18954H1.5233V9.27505H1.71364C2.16054 9.27505 2.44192 9.1923 2.66537 9.02678C2.90537 8.82816 3.04606 8.53023 3.04606 8.22402C3.04606 7.91781 2.90537 7.62816 2.66537 7.43781Z'
                    fill='#20474E'
                  />
                  <path
                    d='M12.413 6.56885C11.5026 6.56885 10.7578 7.29712 10.7578 8.19919C10.7578 9.15919 11.4695 9.87919 12.413 9.87919C13.3399 9.87919 14.0682 9.15092 14.0682 8.22402C14.0682 7.29712 13.3482 6.56885 12.413 6.56885Z'
                    fill='#F27712'
                  />
                </svg>
              </div>
            </div>
            {errors.cardNumber && (
              <p className='text-xs text-red-500'>{errors.cardNumber}</p>
            )}
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='expiry'>Expiry</Label>
              <Input
                id='expiry'
                name='expiry'
                placeholder='MM / YY'
                value={formData.expiry}
                onChange={handleInputChange}
                maxLength={5}
                className={cn(errors.expiry && "border-red-500")}
              />
              {errors.expiry && (
                <p className='text-xs text-red-500'>{errors.expiry}</p>
              )}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='cvc'>CVC</Label>
              <Input
                id='cvc'
                name='cvc'
                placeholder='CVC'
                value={formData.cvc}
                onChange={handleInputChange}
                maxLength={4}
                className={cn(errors.cvc && "border-red-500")}
              />
              {errors.cvc && (
                <p className='text-xs text-red-500'>{errors.cvc}</p>
              )}
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='country'>Country</Label>
              <Select
                value={formData.country}
                onValueChange={handleCountryChange}
              >
                <SelectTrigger id='country'>
                  <SelectValue placeholder='Select country' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='United States'>United States</SelectItem>
                  <SelectItem value='Canada'>Canada</SelectItem>
                  <SelectItem value='United Kingdom'>United Kingdom</SelectItem>
                  <SelectItem value='Australia'>Australia</SelectItem>
                  <SelectItem value='Germany'>Germany</SelectItem>
                  <SelectItem value='France'>France</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='postalCode'>Postal code</Label>
              <Input
                id='postalCode'
                name='postalCode'
                placeholder='90210'
                value={formData.postalCode}
                onChange={handleInputChange}
                className={cn(errors.postalCode && "border-red-500")}
              />
              {errors.postalCode && (
                <p className='text-xs text-red-500'>{errors.postalCode}</p>
              )}
            </div>
          </div>

          <Button
            type='submit'
            className='w-full bg-orange-400 hover:bg-orange-500 text-white'
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Subscribe"}
          </Button>
        </form>
        <SuccessModal
          open={showSuccessModal}
          onOpenChange={setShowSuccessModal}
        />
      </div>
    </div>
  );
}
