type EmailTemplateProps = {
  email: string;
  message: string;
};

export const EmailTemplate = ({ email, message }: EmailTemplateProps) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '1rem',
        width: '100%',
        height: '100%',
      }}
    >
      <h1>You have a new message!</h1>
      <p
        style={{
          fontWeight: 'bold',
        }}
      >
        {email}
      </p>
      <p
        style={{
          marginTop: '1rem',
        }}
      >
        {message}
      </p>
    </div>
  );
};
