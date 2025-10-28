// app/page.tsx
import { DestinationCard } from '@/components/Card';
import { destinations } from '@/lib/data';

// เป็น Server Component (Default) ทำให้ดึงข้อมูลและ render ได้เร็ว
export default function HomePage() {
    const featuredDestinations = destinations.slice(0, 3); // แสดง 3 แห่งเด่น

    return (
        <div className="pt-8">
            {/* Hero Section */}
            <section className="bg-teal-700 text-white py-20 mb-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-extrabold mb-4">
                        ค้นพบการผจญภัยครั้งต่อไปของคุณ
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        สถานที่ท่องเที่ยวที่คัดสรรมาอย่างดี เพื่อให้คุณได้ประสบการณ์ที่ดีที่สุด
                    </p>
                    <button className="bg-white text-teal-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-100 transition duration-300">
                        สำรวจตอนนี้
                    </button>
                </div>
            </section>

            {/* Featured Destinations Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-teal-500 pb-2">
                    สถานที่แนะนำ
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredDestinations.map(dest => (
                        <DestinationCard key={dest.slug} destination={dest} />
                    ))}
                </div>
            </section>
        </div>
    );
}