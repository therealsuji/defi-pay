import { Button } from 'components/Button';
import { TextInput } from 'components/Input/TextInput';
import { useState } from 'react';

const Login = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className='mx-auto flex h-full max-w-xs flex-col items-center justify-center gap-4'>
      <TextInput
        value={inputValue}
        onChange={setInputValue}
        type='text'
        label='Email Address'
      />
      <div>OR</div>
      <Button size={'large'}>Connect Wallet</Button>
    </div>
  );
};

export default Login;
