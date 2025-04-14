"use client";
import { cn } from "@/lib/utils";

import video1 from "@/app/public/gymvideo1.gif";
import video2 from "@/app/public/gymvideo2.gif";
import video3 from "@/app/public/gymvideo3.gif";
import video4 from "@/app/public/gymvideo4.gif";
import Image from "next/image";
export function CardDemo() {
  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "transition-all duration-500"
        )}
      >
        {/* Static background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/482349741_122172187718280990_2739300049283754482_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEUHCaEnAkFM8i9opy-G4KmpXAqA8RUMHalcCoDxFQwdm2AjS8Mh4jWuwgGRm444L47T5x_cBxW7wkRqIYzFyoi&_nc_ohc=fLBmZS5kzOwQ7kNvwHCXAzy&_nc_oc=AdlEi_cKFXBi6y2WXVJUMifmQr1gMrY_MRZZ1WP8wWNwneeBvTCqXBN5g_mpFc1wgQwmhzsMP6mmqpXwbhpqGgvT&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=d8VZfs_-p_XzsKHInPy7hw&oh=00_AfFfnRIqfCjsYQNIM3Io73EXaX3-dpCsfsiiflh0pg05DQ&oe=6802EE03"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Hover video overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
          <Image src={video4} alt="Hover video" fill className="object-cover" />
        </div>

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-20" />

        {/* Content */}
        <div className="text relative z-30">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Modern Equipment
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            State-of-the-art machines and free weights for every fitness level.
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "transition-all duration-500"
        )}
      >
        {/* Static background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/468407764_122156554784280990_4140094538254649673_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGT0qN9pOPbQLhvbERqiLXaxaIneNZ9MLzFoid41n0wvEdmcbc8VJAowiAXuNm7Q2bYJSd57eVYOauXa01WCwF8&_nc_ohc=kUIhylowN88Q7kNvwHgTarg&_nc_oc=AdmA-eZstsAt4EcDmSmz7WIr0jKH5gLwOR1OB_m1CUFj71xPT2rjmCxcdbbr5JNuDnNE7sVG6HDq2nFvlMglKkIr&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=64i9d-AL9JULfplosGKQxw&oh=00_AfGNRppJtgMR8S0sKikK2MQWioPzlo-hOTd0j0blr71WHg&oe=6802BDE2"
            alt="Background"
            fill
            className="object-cover "
          />
        </div>

        {/* Hover video overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
          <Image src={video2} alt="Hover video" fill className="object-cover" />
        </div>

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-20" />

        {/* Content */}
        <div className="text relative z-30">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Expert Trainers
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            Certified professionals to guide and motivate you on your fitness
            journey.
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "transition-all duration-500"
        )}
      >
        {/* Static background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/468429368_122156101940280990_1035048673532004955_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFbPZ6cxs0llILDGCp_-TYyyOvmP5vpJKLI6-Y_m-kkokqHS8_UroKz3nHYL1a77oFYL09znJ7gsLqjmiAMDSoB&_nc_ohc=d4LUr5Lvia0Q7kNvwGj0c6G&_nc_oc=Adlw0NF_3QH5U1gNOoW67fbfAvvOS88KSP8RdlWXicatQIz49zXUdmYJlsZOzzdobZgvD-YiAIXZSjN7RYB3dKml&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=QFk93PhsFcLzx8CQJ54Rgg&oh=00_AfEq-iDsE5YLxHVkz1IJd1KCyNyfSIxdNSug6oyuC-aPCQ&oe=6802E37B"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Hover video overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
          <Image src={video1} alt="Hover video" fill className="object-cover" />
        </div>

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-20" />

        {/* Content */}
        <div className="text relative z-30">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Free Wifi and air-conditioned
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            This gym have free wifi and air-conditioned for your comfort.
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "transition-all duration-500"
        )}
      >
        {/* Static background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/488205200_122175878174280990_4035379363771585297_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGpb0k6vUtidhQOEQLsRR8JzT_sqmD5QGTNP-yqYPlAZHN22jJNxvqMhFW5hxo1Xv5ilJOr-0KQCWjW6qgCONy8&_nc_ohc=_2W57Q-2JJAQ7kNvwFJxt26&_nc_oc=Admc33RH_w9bxPqnkHw6V_JjLWu9YgH22EUL7YuzHjTZ15EzrF4vczwOjT4geq4I8hR0H6abqYQgc0D4f0LtsXwG&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=MzIMohfqZZA_NywASc6N-A&oh=00_AfFhpJv1ZzouOyI53lrXBPzwFp4VC5Y1SWR6Ve1QeK0tIg&oe=6802E0F7"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Hover video overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
          <Image src={video3} alt="Hover video" fill className="object-cover" />
        </div>

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-20" />

        {/* Content */}
        <div className="text relative z-30">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Good gym community
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            GOod gym community and friendly staff to help you with your fitness
          </p>
        </div>
      </div>
    </div>
  );
}
