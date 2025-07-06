// import css from './Form.module.css';

interface FormProps {
  onSubmit: (username: string) => void;
}

export default function Form({ onSubmit }:FormProps) {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get('username') as string;
    onSubmit(username)
  };

  return (
    <>
      <form action={handleSubmit}>
        <input type="text" name="username" defaultValue={'Hello'} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
