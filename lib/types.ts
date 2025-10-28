// lib/types.ts

export interface Destination {
    slug: string; // ใช้สำหรับ URL (e.g., 'koh-lipe')
    name: string;
    shortDescription: string;
    fullDescription: string;
    imageUrl: string; // Path ไปยังรูปภาพใน public/images
    category: 'Beach' | 'Mountain' | 'Culture' | 'City';
    rating: number; // 1-5
}