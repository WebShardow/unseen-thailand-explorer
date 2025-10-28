// components/Footer.tsx
import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    {/* คอลัมน์ 1: แบรนด์และคำอธิบาย */}
                    <div>
                        <Link href="/" className="text-2xl font-bold text-teal-400">
                            ThaiGuideline
                        </Link>
                        <p className="mt-3 text-sm text-gray-400">
                            คู่มือแนะนำการท่องเที่ยวไทยที่ดีที่สุด ค้นพบมนต์เสน่ห์แห่งสยาม.
                        </p>
                    </div>

                    {/* คอลัมน์ 2: ลิงก์ด่วน */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white border-b border-teal-500 pb-1">ลิงก์ด่วน</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/" className="hover:text-teal-400 transition duration-150">หน้าหลัก</Link></li>
                            <li><Link href="/destination" className="hover:text-teal-400 transition duration-150">สถานที่ท่องเที่ยว</Link></li>
                            <li><Link href="/blog" className="hover:text-teal-400 transition duration-150">บทความ</Link></li>
                            <li><Link href="/about" className="hover:text-teal-400 transition duration-150">เกี่ยวกับเรา</Link></li>
                        </ul>
                    </div>

                    {/* คอลัมน์ 3: ติดต่อเรา */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white border-b border-teal-500 pb-1">ติดต่อ</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: info@thaiguideline.com</li>
                            <li>โทรศัพท์: +66 8X XXX XXXX</li>
                            <li>ที่อยู่: กรุงเทพมหานคร, ประเทศไทย</li>
                        </ul>
                    </div>

                    {/* คอลัมน์ 4: Social Media (ตัวอย่าง) */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white border-b border-teal-500 pb-1">ติดตามเรา</h3>
                        <div className="flex space-x-4">
                            {/* ใช้ Icon เช่น Lucide หรือ Heroicons แทน (ต้องติดตั้งเพิ่ม) */}
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-teal-400 transition duration-150">
                                [Icon FB]
                            </a>
                            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-teal-400 transition duration-150">
                                [Icon IG]
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-teal-400 transition duration-150">
                                [Icon X]
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-gray-900 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
                    &copy; {currentYear} ThaiGuideline. สงวนลิขสิทธิ์ทั้งหมด. สร้างด้วย Next.js และ Tailwind CSS.
                </div>
            </div>
        </footer>
    );
}