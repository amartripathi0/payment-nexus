"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "@repo/ui/components/navbar";
export default function Appbar() {
  const {data} = useSession();

  return (
    <>
      <Navbar handleSignin={signIn} handleSignout={signOut} user={data?.user}/>
    </>
  );
}
