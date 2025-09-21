"use client";

interface AppWrapperProps {
  children: React.ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}