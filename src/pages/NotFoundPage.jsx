import React from 'react';

function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
      <p className='mt-4 text-lg'>The page you're looking for doesn't exist.</p>
    </div>
  );
}

export default NotFoundPage;
