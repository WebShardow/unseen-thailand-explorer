// components/Card.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '@/lib/types';

interface CardProps {
    destination: Destination;
}

export function DestinationCard({ destination }: CardProps) {
    return (
        <Link href={`/destination/${destination.slug}`} className="block group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
                <div className="relative h-48 w-full">
                    {/* Next.js Image Component เพื่อประสิทธิภาพ */}
                    <Image
                        src={destination.imageUrl}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 truncate">
                        {destination.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {destination.shortDescription}
                    </p>
                    <div className="mt-3 flex justify-between items-center">
                        <span className="text-sm font-medium text-teal-600">
                            {destination.category}
                        </span>
                        <div className="flex items-center text-yellow-500">
                            {/* แสดง Rating (สามารถใช้ Icon แทนได้) */}
                            {'★'.repeat(destination.rating) + '☆'.repeat(5 - destination.rating)}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}