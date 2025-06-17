import React from 'react';
import CustomImage from '@/components/CustomImage';
import { GradientText } from './dynamiComponents';

const AuthenticationRestoration = ({ 
  gemologistImage, 
  inspectionImage 
}) => {
  return (
    <section className="py-8 sm:py-10 md:py-10 lg:py-12 xl:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <CustomImage
                  srcAttr={gemologistImage}
                  altAttr="Professional gemologist examining jewelry with magnifying equipment"
                  titleAttr="Expert gemologist examining antique jewelry"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
              
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mt-8 sm:mt-12">
                <CustomImage
                  srcAttr={inspectionImage}
                  altAttr="Close-up of jewelry authentication and inspection process"
                  titleAttr="Professional jewelry authentication and restoration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-15 blur-2xl"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-basewhite leading-tight">
                Authentication &<GradientText text=" Restoration"/>
              </h2>
              
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-basewhite leading-relaxed max-w-xl">
              Every collectible and antique we handle is carefully authenticated by experienced specialists and, when needed, thoughtfully restored to preserve its original charm and historical value.
            </p>

            <div className="pt-6 lg:pt-8">
              <div className="grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-basewhite mb-1">15+</div>
                  <div className="text-xs sm:text-sm text-basewhite uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center md:border-l md:border-r border-gray-200 px-4">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-basewhite mb-1">1000+</div>
                  <div className="text-xs sm:text-sm text-basewhite uppercase tracking-wide">Items Authenticated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-basewhite mb-1">100%</div>
                  <div className="text-xs sm:text-sm text-basewhite uppercase tracking-wide">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticationRestoration;