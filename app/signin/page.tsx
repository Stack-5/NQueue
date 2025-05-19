import React from 'react';
import Image from 'next/image';

const Signin = () => {
  const primaryColor = '#E49400';
  const secondaryColor = '#17D076';

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground px-4">
      <div className="bg-card text-card-foreground rounded-2xl shadow-xl p-10 w-full max-w-md border border-border transition-all">
        <div className="flex flex-col items-center mb-8 text-center space-y-4">
          <div className="h-16 w-16 rounded-full overflow-hidden shadow-md ring-2 ring-ring">
            <Image src="/brand.png" alt="NeuQueue Logo" width={64} height={64} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">
            Welcome to{' '}
            <span style={{ color: primaryColor }}>N</span>
            <span style={{ color: secondaryColor }}>Queue</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Ditch the lines, embrace convenience.
          </p>
          <p className="text-sm text-muted-foreground">
            NQueue: Your simple way to smarter queues at New Era University.
          </p>
        </div>

        <button
          className="w-full flex items-center justify-center gap-3 border rounded-lg px-4 py-3 shadow-sm bg-popover hover:bg-muted transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ borderColor: primaryColor }}
        >
          <Image
            src="/google-logo.svg"
            alt="Google Logo"
            width={20}
            height={20}
            className="inline-block"
          />
          <span className="font-medium text-[0.95rem] text-muted-foreground">
            Sign in with your institutional email
          </span>

        </button>
      </div>
    </div>
  );
};

export default Signin;

