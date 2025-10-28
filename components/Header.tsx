// components/Header.tsx
import Link from 'next/link';

export function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-2xl font-bold text-teal-600">
                        TravelPro
                    </Link>
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-teal-600 transition duration-150">หน้าหลัก</Link>
                        <Link href="/destination" className="text-gray-600 hover:text-teal-600 transition duration-150">สถานที่ท่องเที่ยว</Link>
                        <Link href="/blog" className="text-gray-600 hover:text-teal-600 transition duration-150">บทความ</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}