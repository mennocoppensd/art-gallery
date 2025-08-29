import Link from 'next/link'
import { Metadata } from 'next'
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact | Menno',
  description: 'Get in touch ',
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in touch with me.
        </h1>
     
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <FaEnvelope className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Email</h3>
                <p className="mt-5 text-base text-gray-500">
                  <Link href="mailto:menno.coppens@telenet.be" className="text-black hover:text-gray-700">
                    Let&apos;s chat!
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <FaInstagram className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Instagram</h3>
                <p className="mt-5 text-base text-gray-500">
                  <Link href="https://www.instagram.com/mennocoppensd" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                    @mennocoppensd
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <FaFacebook className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Facebook</h3>
                <p className="mt-5 text-base text-gray-500">
                  <Link href="https://www.facebook.com/Mennocoppensd/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                    Menno Coppens d&apos;Eeckenbrugge
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}