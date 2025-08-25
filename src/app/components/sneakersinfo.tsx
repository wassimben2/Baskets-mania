import react from "react";
import Image from "next/image";

export default function SneakersInfo() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Image
                            src="/11.webp"
                            alt="Sneakers"
                            width={400}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <Image
                            src="/13.webp"
                            alt="Sneakers"
                            width={400}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <Image
                            src="/13.webp"
                            alt="Sneakers"
                            width={400}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <Image
                            src="/13.webp"
                            alt="Sneakers"
                            width={400}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    
            </div>
        </div>
        </div>
    );
}