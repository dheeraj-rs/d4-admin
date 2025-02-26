'use client';

import React, { Suspense } from 'react';

// Content component
const PageContent = () => {
  return (
    <div>
      {/* Your page content here */}
      page
    </div>
  );
};

// Wrapper component with Suspense
const PageWrapper = () => {
  return (
    <Suspense fallback={<div>Loading content...</div>}>
      <PageContent />
    </Suspense>
  );
};

// Main page component with outer Suspense
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageWrapper />
    </Suspense>
  );
}