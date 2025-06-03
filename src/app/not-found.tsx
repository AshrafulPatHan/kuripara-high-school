'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
    <div className="text-center py-20">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 mb-4 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <Link href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ">
            Go back home
        </Link>
    </div>
);
}
