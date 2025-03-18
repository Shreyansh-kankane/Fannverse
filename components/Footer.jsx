import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#16074a] to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          {/* Logo Column */}
          <div>
            <Image 
              src="/logo.png"
              alt="Fannverse"
              width={100}
              height={100}
              className="mb-6"
            />
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-gray-300">Fantasy Cricket</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Fantasy Football</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Fantasy Sports</Link></li>
              <li><Link href="#" className="hover:text-gray-300">How to play</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Fantasy Cricket App Download</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Fannverse Team Today</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Security Vulnerability Disclosure Program</Link></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-gray-300">Fannverse winners</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Private Contest</Link></li>
              <li><Link href="#" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Jobs</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Help & Support</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Community Guidelines</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Fannverse Tech</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Sitemap</Link></li>
            </ul>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-sm mb-4">FOUNDING MEMBER</h3>
            {/* <Image 
              src="/fifs-logo.png"
              alt="FIFS Logo"
              width={80}
              height={80}
              className="mb-8"
            />
             */}
            <h3 className="text-sm mb-4">FAIRPLAY POLICY</h3>
            {/* <Image 
              src="/fairplay-logo.png"
              alt="Fairplay Logo"
              width={80}
              height={80}
            /> */}
          </div>
        </div>


        {/* Legal Links */}
        <div className="flex justify-center gap-8 border-t border-gray-600 py-6">
          <Link href="#" className="text-sm hover:text-gray-300">Privacy Policy</Link>
          <Link href="#" className="text-sm hover:text-gray-300">Terms & Conditions</Link>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-400">
          <p>This game may be habit-forming or financially risky. Play responsibly.</p>
        </div>
       
      </div>
    </footer>
  )
} 