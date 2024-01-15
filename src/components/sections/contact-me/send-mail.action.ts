'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { EmailTemplate } from './email-template';
import { ContactSchema } from './form';

const resend = new Resend(process.env['RESEND_API_KEY']);

export const sendMail = async ({
  name,
  email,
  message,
}: z.infer<typeof ContactSchema>) => {
  try {
    const result = await resend.emails.send({
      from: `${name} <${process.env['RESEND_FROM_EMAIL']}>`,
      to: process.env['RESEND_TO_EMAIL'] as string,
      subject: 'Contact Form',
      react: EmailTemplate({ email, message }),
    });

    if (result.error) {
      throw result.error;
    }

    return { success: true };
  } catch (e) {
    console.error(e);

    return {
      error:
        process.env['NODE_ENV'] === 'development'
          ? typeof e === 'string'
            ? e
            : typeof e === 'object' && e && 'message' in e
              ? typeof e.message === 'string'
                ? e.message
                : 'Error sending email.'
              : 'Error sending email.'
          : 'Error sending email.',
    };
  }
};
