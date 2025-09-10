'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Bot, User, Loader2, CornerDownLeft } from 'lucide-react';

// --- Local schema/types (do NOT import from server-only files here)
const chatSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty'),
});
type ChatFormValues = z.infer<typeof chatSchema>;

type RagOutput = {
  answer: string;
  sources: string[];
};

type Message = {
  role: 'user' | 'bot';
  text: string;
  sources?: string[];
};

export function TadeoChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const form = useForm<ChatFormValues>({
    resolver: zodResolver(chatSchema),
    defaultValues: { message: '' },
    mode: 'onSubmit',
  });

  async function askKnowledgeBaseClient(query: string): Promise<RagOutput> {
    const res = await fetch('/api/ai/ask-knowledge-base', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    if (!res.ok) {
      // bubble up readable error for catch block
      const text = await res.text();
      throw new Error(text || `HTTP ${res.status}`);
    }
    return (await res.json()) as RagOutput;
  }

  const onSubmit = async (data: ChatFormValues) => {
    setIsLoading(true);
    const userMessage: Message = { role: 'user', text: data.message };
    setMessages((prev) => [...prev, userMessage]);
    form.reset();

    try {
      const result = await askKnowledgeBaseClient(data.message);
      const botMessage: Message = {
        role: 'bot',
        text: result.answer ?? '',
        sources: result.sources ?? [],
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error asking knowledge base:', error);
      const errorMessage: Message = {
        role: 'bot',
        text: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                message.role === 'user' ? 'justify-end' : ''
              }`}
            >
              {message.role === 'bot' && (
                <Bot className="h-6 w-6 text-primary flex-shrink-0" />
              )}
              <div
                className={`rounded-lg p-3 text-sm max-w-sm ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.text}</p>
                {message.sources && message.sources.length > 0 && (
                  <div className="mt-2 text-xs text-muted-foreground bg-background/50 rounded p-2">
                    <p className="font-semibold mb-1">Sources:</p>
                    <ul className="list-disc pl-4">
                      {message.sources.map((source, i) => (
                        <li key={i}>{source}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {message.role === 'user' && (
                <User className="h-6 w-6 text-muted-foreground flex-shrink-0" />
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <Bot className="h-6 w-6 text-primary flex-shrink-0" />
              <div className="rounded-lg p-3 text-sm bg-muted flex items-center">
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                <span>Tadeo is thinking...</span>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="Ask Tadeo anything about social media marketing..."
                      {...field}
                      disabled={isLoading}
                      autoComplete="off"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} size="icon">
              <CornerDownLeft className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
