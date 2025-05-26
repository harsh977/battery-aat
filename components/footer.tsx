import Link from "next/link"
import { Battery } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-green-900/20 bg-black/90 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Battery className="h-6 w-6 text-green-400" />
              <span className="text-lg font-bold text-white">
                Battery<span className="text-green-400">Recycle</span>
              </span>
            </div>
            <p className="text-sm">
              Educating and empowering people to properly recycle batteries and protect our environment.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-green-400">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/battery-types" className="hover:text-green-400 hover:underline">
                  Battery Types
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-green-400 hover:underline">
                  Recycling Guide
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-green-400 hover:underline">
                  Take the Quiz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-green-400">Take Action</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/centers" className="hover:text-green-400 hover:underline">
                  Find Recycling Centers
                </Link>
              </li>
              <li>
                <Link href="/pledge" className="hover:text-green-400 hover:underline">
                  Make a Pledge
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="hover:text-green-400 hover:underline">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-green-400">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400 hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-green-900/20 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Battery Recycling Awareness Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
