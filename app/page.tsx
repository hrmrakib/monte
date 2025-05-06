"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='container mx-auto px-4 py-8 md:py-16'>
        <h1 className='mb-8 text-center text-3xl font-bold text-teal-700 md:text-4xl lg:text-5xl'>
          Get DesignDoc Presentations
        </h1>

        <div className='mb-8 flex flex-wrap justify-center gap-2'>
          <Button
            variant='outline'
            className='flex items-center gap-2 rounded-full border border-[#6E7A8A]'
            asChild
          >
            <Link href='/presentation'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H12C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5V15C14 15.5304 14.2107 16.0391 14.5858 16.4142C14.9609 16.7893 15.4696 17 16 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5ZM5 6H11V10H5V6ZM11 12H5V14H11V12Z'
                  fill='#20474E'
                />
                <path
                  d='M15 7H16C16.5304 7 17.0391 7.21071 17.4142 7.58579C17.7893 7.96086 18 8.46957 18 9V14.5C18 14.8978 17.842 15.2794 17.5607 15.5607C17.2794 15.842 16.8978 16 16.5 16C16.1022 16 15.7206 15.842 15.4393 15.5607C15.158 15.2794 15 14.8978 15 14.5V7Z'
                  fill='#20474E'
                />
              </svg>

              <span className='text-[#20474E]'>Presentation</span>
            </Link>
          </Button>
          <Button
            variant='outline'
            className='flex items-center gap-2 rounded-full border border-[#6E7A8A]'
            asChild
          >
            <Link href='/dashboard'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V13C17 13.5304 16.7893 14.0391 16.4142 14.4142C16.0391 14.7893 15.5304 15 15 15H12.78L12.903 15.489L13.707 16.293C13.8468 16.4329 13.942 16.611 13.9806 16.805C14.0192 16.9989 13.9993 17.2 13.9237 17.3827C13.848 17.5654 13.7199 17.7215 13.5555 17.8314C13.391 17.9413 13.1978 18 13 18H7C6.80225 18 6.60895 17.9413 6.44454 17.8314C6.28013 17.7215 6.15199 17.5654 6.07632 17.3827C6.00065 17.2 5.98085 16.9989 6.01942 16.805C6.05798 16.611 6.15319 16.4329 6.293 16.293L7.097 15.489L7.22 15H5C4.46957 15 3.96086 14.7893 3.58579 14.4142C3.21071 14.0391 3 13.5304 3 13V5ZM8.771 12H5V5H15V12H8.771Z'
                  fill='#20474E'
                />
              </svg>

              <span className='text-[#20474E]'>Dashboard</span>
            </Link>
          </Button>
          <Button
            variant='outline'
            className='flex items-center gap-2 rounded-full border border-[#6E7A8A]'
            asChild
          >
            <Link href='/magazine'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 4.80401C7.90971 4.27317 6.71265 3.99819 5.5 4.00001C4.245 4.00001 3.057 4.29001 2 4.80401V14.804C3.0903 14.2732 4.28736 13.9982 5.5 14C7.169 14 8.718 14.51 10 15.385C11.3261 14.4802 12.8947 13.9975 14.5 14C15.755 14 16.943 14.29 18 14.804V4.80401C16.9097 4.27317 15.7126 3.99819 14.5 4.00001C13.245 4.00001 12.057 4.29001 11 4.80401V12C11 12.2652 10.8946 12.5196 10.7071 12.7071C10.5196 12.8947 10.2652 13 10 13C9.73478 13 9.48043 12.8947 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12V4.80401Z'
                  fill='#20474E'
                />
              </svg>

              <span className='text-[#20474E]'>Magazine</span>
            </Link>
          </Button>
        </div>

        <div className='relative mx-auto max-w-[832px] min-h-[150px] rounded-lg p-2 border-2 border-[#6E7A8A] shadow-sm'>
          <div className='flex items-center gap-2'>
            <Input
              placeholder='How Can I Help You...'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className='flex-1 border-0 text-2xl  shadow-none focus-visible:ring-0 placeholder:text-[#20474E]'
            />
            <div className='absolute right-2 bottom-2'>
              <Button variant='ghost' size='icon'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.1725 6.99998L8.58651 13.586C8.39549 13.7705 8.24312 13.9912 8.13831 14.2352C8.03349 14.4792 7.97831 14.7416 7.97601 15.0072C7.9737 15.2727 8.0243 15.5361 8.12486 15.7819C8.22543 16.0277 8.37393 16.251 8.56172 16.4388C8.7495 16.6266 8.97281 16.7751 9.2186 16.8756C9.46439 16.9762 9.72775 17.0268 9.99331 17.0245C10.2589 17.0222 10.5213 16.967 10.7653 16.8622C11.0093 16.7574 11.23 16.605 11.4145 16.414L17.8285 9.82798C18.5571 9.07357 18.9603 8.06316 18.9512 7.01438C18.9421 5.96559 18.5214 4.96234 17.7798 4.22071C17.0381 3.47907 16.0349 3.0584 14.9861 3.04928C13.9373 3.04017 12.9269 3.44335 12.1725 4.17198L5.75751 10.757C4.63219 11.8823 4 13.4085 4 15C4 16.5914 4.63219 18.1177 5.75751 19.243C6.88282 20.3683 8.40907 21.0005 10.0005 21.0005C11.5919 21.0005 13.1182 20.3683 14.2435 19.243L20.5005 13'
                    stroke='#20474E'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </Button>
              <Button variant='ghost' size='icon'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9.24853 3.95162C9.4735 4.17666 9.59988 4.48183 9.59988 4.80002C9.59988 5.11822 9.4735 5.42339 9.24853 5.64842L6.49693 8.40002H13.2001C15.428 8.40002 17.5645 9.28502 19.1398 10.8603C20.7151 12.4356 21.6001 14.5722 21.6001 16.8V19.2C21.6001 19.5183 21.4737 19.8235 21.2487 20.0486C21.0236 20.2736 20.7184 20.4 20.4001 20.4C20.0819 20.4 19.7766 20.2736 19.5516 20.0486C19.3266 19.8235 19.2001 19.5183 19.2001 19.2V16.8C19.2001 15.2087 18.568 13.6826 17.4428 12.5574C16.3176 11.4322 14.7914 10.8 13.2001 10.8H6.49693L9.24853 13.5516C9.36315 13.6623 9.45456 13.7947 9.51746 13.9411C9.58035 14.0875 9.61345 14.245 9.61483 14.4043C9.61622 14.5637 9.58586 14.7217 9.52552 14.8692C9.46518 15.0166 9.37608 15.1506 9.26341 15.2633C9.15074 15.376 9.01675 15.4651 8.86928 15.5254C8.7218 15.5857 8.56379 15.6161 8.40445 15.6147C8.24512 15.6133 8.08765 15.5802 7.94125 15.5173C7.79484 15.4545 7.66243 15.363 7.55173 15.2484L2.75173 10.4484C2.52677 10.2234 2.40039 9.91822 2.40039 9.60002C2.40039 9.28183 2.52677 8.97666 2.75173 8.75163L7.55173 3.95162C7.77677 3.72666 8.08194 3.60028 8.40013 3.60028C8.71833 3.60028 9.0235 3.72666 9.24853 3.95162Z'
                    fill='#20474E'
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { ArrowLeft, Plus, Download, FileText, X, Maximize } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Message } from "@/components/chat/message";
// import { TabbedContent } from "@/components/chat/tabbed-content";
// import { ChatInput } from "@/components/chat/chat-input";
// import { PresentationCard } from "@/components/presentation/presentation-card";

// // Sample data for the chat messages
// const initialMessages = [
//   {
//     id: 1,
//     content: "I want to make",
//     isUser: true,
//   },
//   {
//     id: 2,
//     content:
//       "I am a sales executive I need a presentation for my company vision and sales make a presentation with relevant image and data",
//     isUser: true,
//   },
//   {
//     id: 3,
//     content: (
//       <div>
//         <p>
//           I'd be happy to help you create a presentation for your company vision
//           and sales, to make this presentation visually appealing with relevant
//           images and data. I need to use a tool that can generate slides.
//           However, creating a presentation will take some time and credits.
//           Would you like me to proceed with creating this presentation for your
//           sales vision? To create a more tailored presentation, could you
//           provide me with a bit more information about:
//         </p>
//         <ol className='list-decimal pl-5 mt-2'>
//           <li>what industry your company is in</li>
//           <li>any specific aspects of your vision you want to highlight</li>
//           <li>any key sales metrics or goals you'd like to include</li>
//         </ol>
//         <p className='mt-2'>
//           This will help me create a more relevant and effective presentation
//           for you.
//         </p>
//       </div>
//     ),
//     showCopy: true,
//   },
//   {
//     id: 4,
//     content: "okay update and need more details",
//     isUser: true,
//   },
//   {
//     id: 5,
//     content: (
//       <div>
//         <p>
//           I'd be happy to create a presentation for you, but I need more
//           specific details to make it relevant and effective for your needs as a
//           sales executive. Could you please provide the following information:
//         </p>
//         <ol className='list-decimal pl-5 mt-2'>
//           <li>
//             What industry or sector is your company in? (e.g., technology,
//             healthcare, retail, etc.)
//           </li>
//           <li>
//             What are the key elements of your company's vision you want to
//             emphasize?
//           </li>
//           <li>
//             What type of sales data would you like to include? (e.g., current
//             performance, targets, market trends)
//           </li>
//           <li>
//             Who is the target audience for this presentation? (e.g., team
//             members, potential clients, stakeholders)
//           </li>
//           <li>How many slides would you prefer for this presentation?</li>
//           <li>Are there any specific design preferences you have?</li>
//         </ol>
//         <p className='mt-2'>
//           Once you provide these details, I can create a customized presentation
//           with relevant images and data that effectively communicates your
//           company's vision and sales strategy.
//         </p>
//       </div>
//     ),
//     showCopy: true,
//   },
//   {
//     id: 6,
//     content: "okay create now my presentation",
//     isUser: true,
//   },
//   {
//     id: 7,
//     content: "using tool 1: clarification",
//     isUser: true,
//   },
//   {
//     id: 8,
//     content: (
//       <div>
//         <p>
//           I'd be happy to create your presentation, but I still need some basic
//           information to make it relevant. Could you please tell me at least
//           what industry your company is in and a brief description of your
//           company's vision or sales focus? This would help me create a more
//           tailored and effective presentation for you.
//         </p>
//       </div>
//     ),
//   },
//   {
//     id: 9,
//     content: "create my presentation",
//     isUser: true,
//   },
//   {
//     id: 10,
//     content: (
//       <div>
//         <p>
//           I'll create a general sales executive presentation focused on company
//           vision and sales strategy, since you haven't provided specific details
//           about your industry or company. I'll design a versatile presentation
//           that you can later customize with your specific information. This
//           process will take several minutes and will use credits. I'll proceed
//           with creating this presentation now.
//         </p>
//         <div className='mt-4'>
//           <p className='font-medium mb-2'>Using Tool</p>
//           <div className='flex items-center gap-2'>
//             <FileText className='h-5 w-5 text-teal-700' />
//             <span>Presentation</span>
//             <span className='text-sm text-gray-500'>With 8 Slides</span>
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 11,
//     content: (
//       <div>
//         <PresentationCard
//           title='Sales Executive Vision & Strategy Presentation'
//           slideCount={8}
//         />
//         <div className='mt-4'>
//           <p>
//             I've created a professional sales executive vision & strategy
//             presentation for you, the presentation consists of 8 slides that
//             cover the essential aspects of company vision and sales strategy,
//             you can view and download the complete presentation from the link
//             above.
//           </p>
//           <p className='mt-2 font-medium'>Presentation overview:</p>
//           <p>The presentation includes:</p>
//           <ol className='list-decimal pl-5 mt-2'>
//             <li>
//               Title slide: Introduction to the presentation with a professional
//               business theme
//             </li>
//             <li>
//               Company vision: outlining the core vision and mission of your
//               organization
//             </li>
//             <li>
//               Market analysis: overview of market trends and opportunities
//             </li>
//             <li>
//               Sales strategy: key strategic approaches to achieve sales targets
//             </li>
//             <li>
//               Team structure: organizational framework for the sales department
//             </li>
//             <li>
//               Product/service: specific information about the key sales
//               offerings
//             </li>
//             <li>
//               Success metrics: how performance will be measured and tracked
//             </li>
//             <li>Call to action: next steps and implementation plan</li>
//           </ol>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 12,
//     content:
//       "I am a university student I have a presentation my topics is environment pollution make a perfect presentation for me with relevant information",
//     isUser: true,
//   },
// ];

// // Sample data for the tabbed content
// const tabbedContentData = [
//   {
//     thinking: `I need to create an HTML slide for a Sales Executive Presentation. This is Page 1 of 6. Which would typically be a Title/Introduction Slide.

// 1. I'll use Tailwind CSS for styling this CSS.
// 2. The slide should be 1280px wide with a Minimum Height of 720px
// 3. I should follow a Modern Corporate Presentation Style With Blue Color Scheme
// 4. This being a Title Slide, it should include:
//    - Company Name (Generic Since No Specifics Provided)
//    - Presentation Title like "Company Vision & Sales Strategy"
//    - Subtitle With Presenter Role (Sales Executive)
//    - A Professional Background Image
//    - Perhaps A Tagline Or Brief Introduction
//    - Here's How I'll Structure The HTML:
//      - A Container Div With Fixed Width 1280px And Min-Height 720px
//      - A Background With Subtle Gradient Or Pattern
//      - Company Name/Logo Section At The Top
//      - Title In The Center, Made Prominent
//      - Subtitle And Presenter Info Below The Title`,
//     code: `<div class="slide-container" style="width: 1280px; min-height: 720px; background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);">
//   <div class="slide-content p-16 flex flex-col items-center justify-center h-full text-center">
//     <div class="company-info mb-8">
//       <h3 class="text-2xl font-semibold text-blue-800">ACME CORPORATION</h3>
//     </div>
//     <div class="title-section mb-12">
//       <h1 class="text-5xl font-bold text-blue-900 mb-4">Company Vision & Sales Strategy</h1>
//       <h2 class="text-3xl font-medium text-blue-700">Strategic Roadmap 2023-2024</h2>
//     </div>
//     <div class="presenter-info mt-auto">
//       <p class="text-xl text-blue-800">Presented by: John Smith</p>
//       <p class="text-lg text-blue-600">Sales Executive</p>
//     </div>
//   </div>
// </div>`,
//     preview: (
//       <div className='bg-blue-50 p-8 rounded-lg'>
//         <div className='text-center'>
//           <h3 className='text-xl font-semibold text-blue-800 mb-4'>
//             ACME CORPORATION
//           </h3>
//           <h1 className='text-4xl font-bold text-blue-900 mb-2'>
//             Company Vision & Sales Strategy
//           </h1>
//           <h2 className='text-2xl font-medium text-blue-700 mb-8'>
//             Strategic Roadmap 2023-2024
//           </h2>
//           <div className='mt-12'>
//             <p className='text-lg text-blue-800'>Presented by: John Smith</p>
//             <p className='text-md text-blue-600'>Sales Executive</p>
//           </div>
//         </div>
//       </div>
//     ),
//     index: 1,
//     total: 6,
//   },
//   {
//     thinking: `I need to create an HTML slide for a Sales Executive Presentation. This is Page 2 of 6. Which would typically be a Company Vision slide.

// 1. I'll use Tailwind CSS for styling this CSS.
// 2. The slide should be 1280px wide with a Minimum Height of 720px
// 3. I should follow a Modern Corporate Presentation Style With Blue Color Scheme
// 4. This being a Vision Slide, it should include:
//    - A clear section title "Our Vision"
//    - A compelling vision statement
//    - Perhaps 2-3 key pillars or principles that support the vision
//    - Visual elements to enhance understanding
//    - Here's How I'll Structure The HTML:
//      - A Container Div With Fixed Width 1280px And Min-Height 720px
//      - A Background With Subtle Gradient Or Pattern
//      - Section Title At The Top
//      - Vision Statement In A Highlighted Box
//      - Supporting Elements Below In Columns`,
//     code: `<div class="slide-container" style="width: 1280px; min-height: 720px; background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);">
//   <div class="slide-content p-16 h-full">
//     <div class="section-header mb-10">
//       <h2 class="text-3xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2">Our Vision</h2>
//     </div>

//     <div class="vision-statement bg-white p-6 rounded-lg shadow-md mb-10 border-l-4 border-blue-500">
//       <p class="text-2xl font-medium text-blue-800 italic">"To be the industry leader in providing innovative solutions that drive exceptional value for our customers while maintaining the highest standards of excellence and integrity."</p>
//     </div>

//     <div class="vision-pillars grid grid-cols-3 gap-8">
//       <div class="pillar bg-blue-50 p-6 rounded-lg shadow-sm">
//         <h3 class="text-xl font-semibold text-blue-700 mb-3">Innovation</h3>
//         <p class="text-gray-700">Continuously developing cutting-edge solutions that address evolving market needs.</p>
//       </div>

//       <div class="pillar bg-blue-50 p-6 rounded-lg shadow-sm">
//         <h3 class="text-xl font-semibold text-blue-700 mb-3">Customer Value</h3>
//         <p class="text-gray-700">Delivering exceptional products and services that exceed customer expectations and provide measurable ROI.</p>
//       </div>

//       <div class="pillar bg-blue-50 p-6 rounded-lg shadow-sm">
//         <h3 class="text-xl font-semibold text-blue-700 mb-3">Excellence</h3>
//         <p class="text-gray-700">Upholding the highest standards in all aspects of our operations, from product quality to customer service.</p>
//       </div>
//     </div>
//   </div>
// </div>`,
//     preview: (
//       <div className='bg-blue-50 p-8 rounded-lg'>
//         <h2 className='text-2xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2 mb-6'>
//           Our Vision
//         </h2>

//         <div className='bg-white p-4 rounded-lg shadow-md mb-6 border-l-4 border-blue-500'>
//           <p className='text-xl font-medium text-blue-800 italic'>
//             "To be the industry leader in providing innovative solutions that
//             drive exceptional value for our customers while maintaining the
//             highest standards of excellence and integrity."
//           </p>
//         </div>

//         <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
//           <div className='bg-blue-50 p-4 rounded-lg shadow-sm'>
//             <h3 className='text-lg font-semibold text-blue-700 mb-2'>
//               Innovation
//             </h3>
//             <p className='text-sm text-gray-700'>
//               Continuously developing cutting-edge solutions that address
//               evolving market needs.
//             </p>
//           </div>

//           <div className='bg-blue-50 p-4 rounded-lg shadow-sm'>
//             <h3 className='text-lg font-semibold text-blue-700 mb-2'>
//               Customer Value
//             </h3>
//             <p className='text-sm text-gray-700'>
//               Delivering exceptional products and services that exceed customer
//               expectations and provide measurable ROI.
//             </p>
//           </div>

//           <div className='bg-blue-50 p-4 rounded-lg shadow-sm'>
//             <h3 className='text-lg font-semibold text-blue-700 mb-2'>
//               Excellence
//             </h3>
//             <p className='text-sm text-gray-700'>
//               Upholding the highest standards in all aspects of our operations,
//               from product quality to customer service.
//             </p>
//           </div>
//         </div>
//       </div>
//     ),
//     index: 2,
//     total: 6,
//   },
//   {
//     thinking: `I need to create an HTML slide for a Sales Executive Presentation. This is Page 3 of 6. Which would typically be a Sales Strategy slide.

// 1. I'll use Tailwind CSS for styling this CSS.
// 2. The slide should be 1280px wide with a Minimum Height of 720px
// 3. I should follow a Modern Corporate Presentation Style With Blue Color Scheme
// 4. This being a Sales Strategy Slide, it should include:
//    - A clear section title "Sales Strategy"
//    - Key strategic approaches or pillars
//    - Perhaps some metrics or goals
//    - Visual elements to enhance understanding
//    - Here's How I'll Structure The HTML:
//      - A Container Div With Fixed Width 1280px And Min-Height 720px
//      - A Background With Subtle Gradient Or Pattern
//      - Section Title At The Top
//      - Strategy Elements In A Clear Layout
//      - Supporting Visuals Or Icons`,
//     code: `<div class="slide-container" style="width: 1280px; min-height: 720px; background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);">
//   <div class="slide-content p-16 h-full">
//     <div class="section-header mb-10">
//       <h2 class="text-3xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2">Sales Strategy</h2>
//     </div>

//     <div class="grid grid-cols-2 gap-10">
//       <div class="strategy-overview">
//         <h3 class="text-2xl font-semibold text-blue-800 mb-4">Strategic Approach</h3>
//         <ul class="space-y-4">
//           <li class="flex items-start">
//             <div class="bg-blue-600 rounded-full p-1 mt-1 mr-3">
//               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <div>
//               <p class="font-medium text-blue-900">Customer-Centric Selling</p>
//               <p class="text-gray-700">Focus on understanding and addressing specific customer needs</p>
//             </div>
//           </li>
//           <li class="flex items-start">
//             <div class="bg-blue-600 rounded-full p-1 mt-1 mr-3">
//               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <div>
//               <p class="font-medium text-blue-900">Value-Based Positioning</p>
//               <p class="text-gray-700">Emphasize ROI and long-term value over initial cost</p>
//             </div>
//           </li>
//           <li class="flex items-start">
//             <div class="bg-blue-600 rounded-full p-1 mt-1 mr-3">
//               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <div>
//               <p class="font-medium text-blue-900">Consultative Approach</p>
//               <p class="text-gray-700">Position sales team as trusted advisors rather than vendors</p>
//             </div>
//           </li>
//         </ul>
//       </div>

//       <div class="key-metrics">
//         <h3 class="text-2xl font-semibold text-blue-800 mb-4">Key Performance Targets</h3>
//         <div class="space-y-6">
//           <div class="metric">
//             <div class="flex justify-between mb-1">
//               <span class="font-medium text-blue-900">Revenue Growth</span>
//               <span class="font-bold text-blue-700">25%</span>
//             </div>
//             <div class="w-full bg-gray-200 rounded-full h-2.5">
//               <div class="bg-blue-600 h-2.5 rounded-full" style="width: 25%"></div>
//             </div>
//           </div>

//           <div class="metric">
//             <div class="flex justify-between mb-1">
//               <span class="font-medium text-blue-900">Customer Retention</span>
//               <span class="font-bold text-blue-700">90%</span>
//             </div>
//             <div class="w-full bg-gray-200 rounded-full h-2.5">
//               <div class="bg-blue-600 h-2.5 rounded-full" style="width: 90%"></div>
//             </div>
//           </div>

//           <div class="metric">
//             <div class="flex justify-between mb-1">
//               <span class="font-medium text-blue-900">New Client Acquisition</span>
//               <span class="font-bold text-blue-700">50+</span>
//             </div>
//             <div class="w-full bg-gray-200 rounded-full h-2.5">
//               <div class="bg-blue-600 h-2.5 rounded-full" style="width: 65%"></div>
//             </div>
//           </div>

//           <div class="metric">
//             <div class="flex justify-between mb-1">
//               <span class="font-medium text-blue-900">Sales Cycle Reduction</span>
//               <span class="font-bold text-blue-700">15%</span>
//             </div>
//             <div class="w-full bg-gray-200 rounded-full h-2.5">
//               <div class="bg-blue-600 h-2.5 rounded-full" style="width: 15%"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>`,
//     preview: (
//       <div className='bg-blue-50 p-8 rounded-lg'>
//         <h2 className='text-2xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2 mb-6'>
//           Sales Strategy
//         </h2>

//         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//           <div>
//             <h3 className='text-xl font-semibold text-blue-800 mb-3'>
//               Strategic Approach
//             </h3>
//             <ul className='space-y-3'>
//               <li className='flex items-start'>
//                 <div className='bg-blue-600 rounded-full p-1 mt-1 mr-2 flex-shrink-0'>
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     className='h-3 w-3 text-white'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     stroke='currentColor'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth='2'
//                       d='M5 13l4 4L19 7'
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className='font-medium text-blue-900 text-sm'>
//                     Customer-Centric Selling
//                   </p>
//                   <p className='text-gray-700 text-xs'>
//                     Focus on understanding and addressing specific customer
//                     needs
//                   </p>
//                 </div>
//               </li>
//               <li className='flex items-start'>
//                 <div className='bg-blue-600 rounded-full p-1 mt-1 mr-2 flex-shrink-0'>
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     className='h-3 w-3 text-white'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     stroke='currentColor'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth='2'
//                       d='M5 13l4 4L19 7'
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className='font-medium text-blue-900 text-sm'>
//                     Value-Based Positioning
//                   </p>
//                   <p className='text-gray-700 text-xs'>
//                     Emphasize ROI and long-term value over initial cost
//                   </p>
//                 </div>
//               </li>
//               <li className='flex items-start'>
//                 <div className='bg-blue-600 rounded-full p-1 mt-1 mr-2 flex-shrink-0'>
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     className='h-3 w-3 text-white'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     stroke='currentColor'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth='2'
//                       d='M5 13l4 4L19 7'
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className='font-medium text-blue-900 text-sm'>
//                     Consultative Approach
//                   </p>
//                   <p className='text-gray-700 text-xs'>
//                     Position sales team as trusted advisors rather than vendors
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className='text-xl font-semibold text-blue-800 mb-3'>
//               Key Performance Targets
//             </h3>
//             <div className='space-y-4'>
//               <div>
//                 <div className='flex justify-between mb-1'>
//                   <span className='font-medium text-blue-900 text-sm'>
//                     Revenue Growth
//                   </span>
//                   <span className='font-bold text-blue-700 text-sm'>25%</span>
//                 </div>
//                 <div className='w-full bg-gray-200 rounded-full h-2'>
//                   <div
//                     className='bg-blue-600 h-2 rounded-full'
//                     style={{ width: "25%" }}
//                   ></div>
//                 </div>
//               </div>

//               <div>
//                 <div className='flex justify-between mb-1'>
//                   <span className='font-medium text-blue-900 text-sm'>
//                     Customer Retention
//                   </span>
//                   <span className='font-bold text-blue-700 text-sm'>90%</span>
//                 </div>
//                 <div className='w-full bg-gray-200 rounded-full h-2'>
//                   <div
//                     className='bg-blue-600 h-2 rounded-full'
//                     style={{ width: "90%" }}
//                   ></div>
//                 </div>
//               </div>

//               <div>
//                 <div className='flex justify-between mb-1'>
//                   <span className='font-medium text-blue-900 text-sm'>
//                     New Client Acquisition
//                   </span>
//                   <span className='font-bold text-blue-700 text-sm'>50+</span>
//                 </div>
//                 <div className='w-full bg-gray-200 rounded-full h-2'>
//                   <div
//                     className='bg-blue-600 h-2 rounded-full'
//                     style={{ width: "65%" }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ),
//     index: 3,
//     total: 6,
//   },
// ];

// export default function Home() {
//   const [messages, setMessages] = useState(initialMessages);
//   const [inputValue, setInputValue] = useState("");

//   const handleSendMessage = (message: string) => {
//     // Add user message
//     const newUserMessage = {
//       id: messages.length + 1,
//       content: message,
//       isUser: true,
//     };

//     // Add a placeholder response
//     const newAIMessage = {
//       id: messages.length + 2,
//       content: <p>I'm processing your request...</p>,
//       isUser: undefined,
//     };

//     setMessages([...messages, newUserMessage, newAIMessage]);
//   };

//   return (
//     <div className='flex flex-col h-screen'>
//       {/* Header */}
//       <header className='flex items-center justify-between border-b p-4'>
//         <div className='flex items-center gap-2'>
//           <Button variant='ghost' size='icon' className='md:hidden'>
//             <ArrowLeft className='h-5 w-5' />
//           </Button>
//           <h1 className='text-xl font-bold text-teal-700 md:text-2xl'>
//             Get DesignDoc Presentations
//           </h1>
//         </div>
//         <div className='flex items-center gap-2'>
//           <Button variant='ghost' size='icon'>
//             <Plus className='h-5 w-5' />
//           </Button>
//           <Button variant='ghost' size='icon'>
//             <Download className='h-5 w-5' />
//           </Button>
//         </div>
//       </header>

//       {/* Two-column layout for large screens, single column for mobile */}
//       <div className='flex flex-1 overflow-hidden'>
//         {/* Chat column */}
//         <div className='flex flex-col w-full lg:w-1/2 border-r'>
//           {/* Chat messages */}
//           <div className='flex-1 overflow-y-auto p-4'>
//             <div className='mx-auto max-w-3xl'>
//               {messages.map((message) => (
//                 <Message
//                   key={message.id}
//                   content={message.content}
//                   isUser={message.isUser}
//                   showCopy={message.showCopy}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Input area */}
//           <div className='border-t p-4'>
//             <div className='mx-auto max-w-3xl'>
//               <ChatInput onSend={handleSendMessage} />
//             </div>
//           </div>
//         </div>

//         {/* Preview column - hidden on mobile, visible on large screens */}
//         <div className='hidden lg:flex lg:w-1/2 flex-col overflow-y-auto bg-gray-50'>
//           <div className='p-4 overflow-y-auto'>
//             {/* Tabbed content examples */}
//             <div className='space-y-6'>
//               {tabbedContentData.map((content, index) => (
//                 <div
//                   key={`tabbed-${index}`}
//                   className='bg-white rounded-lg shadow-sm overflow-hidden'
//                 >
//                   <div className='flex items-center justify-between bg-white p-3 border-b'>
//                     <div className='flex items-center gap-2'>
//                       <FileText className='h-5 w-5 text-teal-700' />
//                       <span className='font-medium'>
//                         Sales Executive Presentation
//                       </span>
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <Button
//                         size='sm'
//                         className='bg-orange-500 hover:bg-orange-600 text-white'
//                       >
//                         Add Animations
//                       </Button>
//                       <Button variant='ghost' size='icon' className='h-6 w-6'>
//                         <Maximize className='h-4 w-4' />
//                       </Button>
//                       <Button variant='ghost' size='icon' className='h-6 w-6'>
//                         <X className='h-4 w-4' />
//                       </Button>
//                     </div>
//                   </div>
//                   <TabbedContent
//                     thinking={content.thinking}
//                     code={content.code}
//                     preview={content.preview}
//                     index={content.index}
//                     total={content.total}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
