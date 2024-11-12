import { NextResponse } from 'next/server';

export function middleware(req) {
  console.log("Middleware executed"); 

  const userAgent = req.headers.get('user-agent') || '';
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);

  // Check if the user is on a mobile device and trying to access any page
  if (isMobile && req.nextUrl.pathname !== '/restricted') {
    console.log("Mobile device detected. Redirecting..."); // Debugging log
    return NextResponse.redirect(new URL('/restricted', req.url));
  }

  return NextResponse.next(); // Continue to the requested page
}

// Define the paths where this middleware should be applied
export const config = {
  matcher: ['/', '/other-paths/:path*'], // Adjust as needed
};
