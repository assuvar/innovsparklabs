"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initTracking, trackPageVisit } from "@/lib/tracking";

function TrackingLogic() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Initialize tracking on mount (if consent already given)
        initTracking();
    }, []);

    useEffect(() => {
        // Track page views on route change
        if (pathname) {
            trackPageVisit(pathname);
        }
    }, [pathname, searchParams]);

    return null;
}

export default function TrackingWrapper() {
    return (
        <Suspense fallback={null}>
            <TrackingLogic />
        </Suspense>
    );
}
