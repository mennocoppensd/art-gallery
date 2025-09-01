import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center px-6">
        <div className="mb-8">
          <h1 className="font-poppins text-9xl font-bold text-gray-300 tracking-tight">404</h1>
          <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            Go Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Or try one of these pages:</p>
            <div className="mt-2 space-x-4">
              <Link href="/about" className="text-black hover:text-gray-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/artwork" className="text-black hover:text-gray-600 transition-colors font-medium">
                Artwork
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
