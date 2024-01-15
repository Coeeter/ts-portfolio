import { Section } from '../../Section';
import { ActionButtonsGrid } from '../../contact-actions';
import { AnimateIn } from '../../animate-in';
import { ContactForm } from './form';

export const ContactMe = () => {
  return (
    <Section
      className="flex min-h-full w-full items-center justify-center pt-[160px] md:pt-0"
      section="contact"
    >
      <AnimateIn
        scroll
        className="flex flex-col-reverse items-center md:flex-row"
      >
        <ActionButtonsGrid
          className="mt-6 w-fit md:mr-6 md:flex-col"
          hideEmail
        />
        <ContactForm />
      </AnimateIn>
    </Section>
  );
};
