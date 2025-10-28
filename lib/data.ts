// lib/data.ts
import { Destination } from './types';

export const destinations: Destination[] = [
    {
        slug: 'koh-lipe',
        name: 'เกาะหลีเป๊ะ',
        shortDescription: 'มัลดีฟส์เมืองไทย ทะเลสวยน้ำใส หาดทรายขาวละเอียด.',
        fullDescription: 'เกาะหลีเป๊ะเป็นเกาะเล็กๆ ในทะเลอันดามัน มีชื่อเสียงด้านแนวปะการังที่อุดมสมบูรณ์ และชายหาดที่สวยงามราวกับสวรรค์...',
        imageUrl: '/images/koh-lipe.jpg',
        category: 'Beach',
        rating: 5,
    },
    {
        slug: 'doi-inthanon',
        name: 'ดอยอินทนนท์',
        shortDescription: 'ยอดเขาที่สูงที่สุดในไทย สัมผัสอากาศหนาวเย็นตลอดปี.',
        fullDescription: 'ดอยอินทนนท์ตั้งอยู่ในจังหวัดเชียงใหม่ เป็นที่รู้จักจากจุดชมวิว พระมหาธาตุนภเมทนีดลและพระมหาธาตุนภพลภูมิสิริ รวมถึงเส้นทางศึกษาธรรมชาติที่งดงาม...',
        imageUrl: '/images/doi-inthanon.jpg',
        category: 'Mountain',
        rating: 4,
    },
    // เพิ่มข้อมูลสถานที่อื่นๆ...
];

export function getDestinationBySlug(slug: string): Destination | undefined {
    return destinations.find(d => d.slug === slug);
}