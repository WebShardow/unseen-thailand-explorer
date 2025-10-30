// app/destination/page.tsx
import { DestinationCard } from '@/components/Card';
// ต้องแน่ใจว่าได้สร้างไฟล์ lib/data.ts แล้ว
import { destinations } from '@/lib/data';
import type { Metadata } from 'next';

// 1. Static Metadata สำหรับหน้านี้
export const metadata: Metadata = {
    title: 'สถานที่ท่องเที่ยวทั้งหมด | Unseen Thailand Explorer',
    description: 'รายการสถานที่ท่องเที่ยว Unseen ทั่วประเทศไทย ที่รอให้คุณไปสำรวจ.',
};

// 2. Page Component (Server Component)
export default function AllDestinationsPage() {
    // ดึงข้อมูลสถานที่ท่องเที่ยวทั้งหมดแบบ Synchronous
    const allDestinations = destinations;

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    สถานที่ท่องเที่ยว Unseen
                </h1>
                <p className="text-xl text-gray-600 mb-10">
                    ค้นพบสถานที่ที่ซ่อนเร้นและน่าตื่นตาตื่นใจในประเทศไทย
                </p>

                {/* Grid แสดง Destination Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allDestinations.map(dest => (
                        // ใช้ DestinationCard component ที่เราสร้างไว้แล้ว
                        <DestinationCard key={dest.slug} destination={dest} />
                    ))}
                </div>

                {allDestinations.length === 0 && (
                    <div className="text-center py-16 text-gray-500">
                        <p>ขออภัย, ไม่พบสถานที่ท่องเที่ยวในขณะนี้</p>
                    </div>
                )}
            </div>
        </div>
    );
}