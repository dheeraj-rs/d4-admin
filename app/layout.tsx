'use client';
import { LayoutProvider } from '@/layout/context/LayoutContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/core/core.scss';
import '../styles/demo/demo.scss';
import '../styles/icons/icons.css';
import '../styles/layout/layout.scss';

interface RootLayoutProps {
    children: React.ReactNode;
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
        },
    },
});

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link id="theme-css" href={`/themes/md-dark-indigo/theme.css`} rel="stylesheet"></link>
            </head>
            <body>
                <QueryClientProvider client={queryClient}>
                    <LayoutProvider>{children}</LayoutProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
