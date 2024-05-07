'use client';

import { NextUIProvider } from '@nextui-org/react';

export function UIProvider({ children, className }: { children: React.ReactNode; className?: string }) {
    return <NextUIProvider className={className}>{children}</NextUIProvider>;
}
