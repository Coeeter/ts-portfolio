'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Section } from '../Section';
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
import { ActionButtonsGrid } from '../contact-actions';

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

export const ContactMe = () => {
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

    form.reset();
    toast.success('Message sent successfully!');
  });

  return (
    <Section
      className="flex w-full flex-col-reverse items-center justify-center pt-[160px] md:flex-row md:pt-0"
      section="contact"
    >
      <ActionButtonsGrid className="mt-6 w-fit md:mr-6 md:flex-col" hideEmail />
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className="flex w-full max-w-md flex-col gap-3 rounded-md bg-background p-3 shadow-xl md:flex-1"
        >
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
                  <Textarea {...field} placeholder="Message" />
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
    </Section>
  );
};
