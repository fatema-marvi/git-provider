"use client";

import { SessionProvider } from "next-auth/react";

interface SessionWrapperProps {
  children: React.ReactNode;
}

export const SessionWrapper: React.FC<SessionWrapperProps> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};
