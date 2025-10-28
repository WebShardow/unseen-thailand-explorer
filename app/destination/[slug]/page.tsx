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
// Next.js จะสร้างหน้าเหล่านี้ล่วงหน้าในระหว่างการ build (เร็วมากบน Vercel)
export async function generateStaticParams() {
    return destinations.map(dest => ({
        slug: dest.slug,
    }));
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
    const destination = getDestinationBySlug(params.slug);

    if (!destination) {
        // ถ้าไม่พบข้อมูล แต่หน้านี้ไม่ควรเข้าถึงได้ถ้า generateStaticParams ทำงานถูกต้อง
        return { title: 'ไม่พบสถานที่' };
    }

    return {
        title: destination.name,
        description: destination.shortDescription,
        // สามารถเพิ่ม Open Graph, Twitter Card ได้ที่นี่
    };
}

// 3. Page Component
export default function DestinationPage({ params }: DestinationPageProps) {
    const destination = getDestinationBySlug(params.slug);

    if (!destination) {
        // ใช้ Next.js notFound() เพื่อแสดงหน้า 404
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
                    priority // โหลดรูปภาพนี้ก่อนรูปอื่นๆ
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

            {/* ส่วนอื่นๆ เช่น แผนที่, ที่พักแนะนำ */}
            <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">ข้อมูลเพิ่มเติม</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>เวลาที่เหมาะสมในการเยี่ยมชม: ตลอดปี</li>
                    <li>กิจกรรมเด่น: ดำน้ำ, เดินป่า, พักผ่อนริมหาด</li>
                    <li>วิธีเดินทาง: เครื่องบินไปยังสนามบินใกล้เคียงและต่อเรือ/รถ</li>
                </ul>
            </section>
        </article>
    );
}