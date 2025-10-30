// app/destination/[slug]/page.tsx
import { getDestinationBySlug, destinations } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// กำหนด type ของ props ที่ Next.js ส่งมาให้
interface DestinationPageProps {
    params: {
        slug: string;
    };
}

// 1. สร้าง Static Params สำหรับ Static Site Generation (SSG)
export async function generateStaticParams() {
    return destinations.map(dest => ({
        slug: dest.slug,
    }));
}

// 2. Dynamic Metadata (เป็น async function อยู่แล้ว)
export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
    // การเรียกใช้ getDestinationBySlug(params.slug) ภายใน async function จะปลอดภัย
    const destination = getDestinationBySlug(params.slug);

    if (!destination) {
        return { title: 'ไม่พบสถานที่ | Unseen Thailand Explorer' };
    }

    return {
        title: `${destination.name} | Unseen Thailand Explorer`,
        description: destination.shortDescription,
    };
}

// 3. Page Component
// ✅ FIX CRITICAL ERROR: ต้องเพิ่ม keyword 'async' ที่นี่ เพื่อให้เข้าถึง params.slug ได้อย่างถูกต้อง
export default async function DestinationPage({ params }: DestinationPageProps) {
    // การเรียกใช้ getDestinationBySlug(params.slug) ใน async component จะแก้ไขปัญหา Promise ได้
    const destination = getDestinationBySlug(params.slug);

    if (!destination) {
        // ใช้ Next.js notFound() เพื่อแสดงหน้า 404 (เฉพาะกรณีที่ slug ไม่มีใน generateStaticParams)
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-12">
            {/* ภาพหลัก */}
            <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8 shadow-xl">
                <Image
                    src={destination.imageUrl}
                    alt={destination.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{destination.name}</h1>
            <div className="flex items-center mb-6 space-x-4">
                <span className="text-lg font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                    {destination.category}
                </span>
                <div className="flex items-center text-yellow-500 text-xl">
                    {'★'.repeat(destination.rating)}
                    <span className="text-gray-500 ml-2">({destination.rating} / 5)</span>
                </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {destination.fullDescription}
            </p>

            {/* ส่วนอื่นๆ เช่น ข้อมูลเพิ่มเติม */}
            <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">ข้อมูลเพิ่มเติม</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>เวลาที่เหมาะสมในการเยี่ยมชม: ตลอดปี</li>
                    <li>กิจกรรมเด่น: ชมวิวทะเลหมอก, ตั้งแคมป์, ถ่ายภาพ</li>
                    <li>วิธีเดินทาง: รถยนต์ส่วนตัวหรือรถประจำทาง</li>
                </ul>
            </section>
        </article>
    );
}