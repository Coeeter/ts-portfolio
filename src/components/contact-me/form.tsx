'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { sendMail } from './send-mail.action';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export const ContactSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(1, {
      message: 'Name is required',
    }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1, {
      message: 'Email is required',
    })
    .email({
      message: 'Email is invalid',
    }),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(1, {
      message: 'Message is required',
    }),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = form.handleSubmit(async data => {
    const { error, success } = await sendMail(data);

    if (error || !success) {
      process.env.NODE_ENV === 'development' && console.error(error);
      toast.error(error, {
        description: 'Please try again later',
      });
      return;
    }

    form.reset({
      name: '',
      email: '',
      message: '',
    });
    toast.success('Message sent successfully!');
  });

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="flex w-full max-w-md flex-col gap-3 rounded-md bg-background p-3 shadow-xl md:flex-1"
      >
        <h1 className="text-2xl font-bold">Contact Me</h1>
        <p className="-mt-3 mb-3 text-muted-foreground">
          If you have any questions or would like to work together, please feel
          free to reach out to me.
        </p>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g. james@gmail.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Enter your message for me" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-3"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            'Submit'
          )}
        </Button>
      </form>
    </Form>
  );
};
