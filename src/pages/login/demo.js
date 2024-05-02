import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import signUp from '@/firebase/auth/signup';
import { useRouter } from 'next/router'; // Import useRouter from 'next/router' instead of 'next/navigation'
import banner from '@/../public/brandkit/banner.webp';
import github from '@/../public/brandkit/github.png';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';

const LoginPage = () => {
  const { data: session } = useSession(); // Retrieve the session data
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push('/admin/page');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [show, setShow] = useState(false);

  // Function to handle GitHub sign-in
  const handleGitHubSignIn = async () => {
    // Trigger GitHub sign-in
    await signIn('github');
    // After successful sign-in, navigate to '/admin/page'
    router.push('/admin/page');
  };

  return (
    <div className="flex flex-row  p-20 xl:p-10 bg-light xl:items-center xl:justify-center">
      <>
        <div className="flex w-1/2  p-0 items-center justify-center xl:hidden">
          <Image src={banner} alt="banner" className="w-full h-screen rounded-lg" />
        </div>
        <div className="flex flex-col w-1/2 xl:w-full border items-center justify-center border-theme lg:p-6 bg-theme/70 rounded-lg">
          {/* Other content omitted for brevity */}

          {/* GitHub sign-in button */}
          <div className="flex p-4 gap-4 flex-row items-center justify-center">
            <button onClick={handleGitHubSignIn}>
              <Image src={github} alt="github" className="h-[60px] w-[60px] tm:w-[50px] tm:h-[50px] ls:w-[40px] ls:h-[40px] zs:w-[30px] zs:h-[30px] rounded-full bg-whiter/80" />
            </button>
          </div>

          {/* Other content omitted for brevity */}
        </div>
      </>
    </div>
  );
};

export default LoginPage;
