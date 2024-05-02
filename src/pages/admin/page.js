import { getSession, useSession, signOut } from "next-auth/react";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AdminPage = () => {
  const { data: session } = useSession(); // Retrieve the session data


  // Function to handle sign out
  function handleSignOut (){
    signOut()
  }

  {/*
  useEffect(() => {
    if (!session) {
      // If the user is not signed in, redirect to the login page
      router.replace('/login/page');
    }
  }, [session, router]);  */}

  // If the user is signed in, render the admin page content
  if (session) {
    return (
      <div className="flex flex-col items-center justify-center p-20">
        <h1 className="text-3xl font-bold">Hey {session.user.name}, I see you made it to this page!</h1>
        <h1 className="text-xl font-medium py-4">We are excited as you are, but Mbegu has not launched yet!</h1>
        <div className="py-20">
          <h1 className="text-lg">Mbegu will register this email as a whitelist, <b className="text-theme">{session.user.email}</b></h1>
        </div>
        <div className="flex items-center justify-center mx-auto">
          <button onClick={handleSignOut} className="bg-theme py-4 px-4 rounded-md text-white font-extrabold text-lg">
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  // If the user is not signed in, display a message prompting them to log in
  return (
    <div className="flex items-center justify-center font-bold text-4xl p-20">
      <p>Hey you! wanna <b className="text-theme"><a href="/login/page"> login</a></b> first?</p>
    </div>
  );
};

export default AdminPage;

