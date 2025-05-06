"use client";

import type React from "react";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabbedContentProps {
  thinking: string;
  code: string;
  preview: React.ReactNode;
  index: number;
  total: number;
}

export function TabbedContent({
  thinking,
  code,
  preview,
  index,
  total,
}: TabbedContentProps) {
  const [activeTab, setActiveTab] = useState("thinking");

  return (
    <div className='overflow-hidden'>
      <Tabs
        defaultValue='thinking'
        value={activeTab}
        onValueChange={setActiveTab}
        className='w-full'
      >
        <div className='flex items-center justify-between bg-[#20474E] px-4 rounded-t-3xl'>
          <TabsList className='bg-transparent'>
            <TabsTrigger
              value='thinking'
              className='data-[state=active]:bg-[#F99F04] data-[state=active]:text-white text-orange-100 rounded-full'
            >
              Thinking
            </TabsTrigger>
            <TabsTrigger
              value='code'
              className='data-[state=active]:bg-[#F99F04] data-[state=active]:text-white text-orange-100 rounded-full'
            >
              Code
            </TabsTrigger>
            <TabsTrigger
              value='preview'
              className='data-[state=active]:bg-[#F99F04] data-[state=active]:text-white text-orange-100 rounded-full'
            >
              Preview
            </TabsTrigger>
          </TabsList>
          <div className='text-sm text-white'>
            {index}/{total}
          </div>
        </div>
        <TabsContent value='thinking' className='p-4 bg-white'>
          <pre className='whitespace-pre-wrap text-sm text-[#20474E]'>
            {thinking}
          </pre>
        </TabsContent>
        <TabsContent value='code' className='p-4 bg-white'>
          <pre className='whitespace-pre-wrap text-sm font-mono bg-gray-50 text-[#20474E] p-2 rounded'>
            {code}
          </pre>
        </TabsContent>
        <TabsContent value='preview' className='p-4 bg-white'>
          {preview}
        </TabsContent>
      </Tabs>
    </div>
  );
}
