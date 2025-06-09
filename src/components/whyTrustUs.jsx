'use client';
import React from 'react';

const reasonsToTrust = [
  { id: 1, text: 'Honest Appraisals with Full Transparency' },
  { id: 2, text: 'Decades of Experience in Gold & Pawn Industry' },
  { id: 3, text: 'Thousands of Satisfied Customers Across the Region' },
  { id: 4, text: 'Licensed, Bonded & Locally Trusted Shop' },
];

export default function WhyTrustUs() {
  return (
    <section className="text-white py-8 sm:py-6 md:py-8 lg:py-14 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight mb-3">
          Why You Should Trust Us
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-base">
          At National Gold and Pawn, we pride ourselves on trust, transparency, and fair evaluations.
          With decades of experience, our reputation is built on honest practices and customer satisfaction.
        </p>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-8 text-center">
        {reasonsToTrust.map((reason) => (
            <div
            key={reason.id}
            className="relative p-[2px] rounded-lg bg-gradient-to-br from-primary to-approxblack"
            >
            <div className="bg-baseblack p-8 rounded-lg h-full">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-baseblack border border-primary w-10 h-10 flex items-center justify-center rounded text-xl font-bold text-primary">
                {reason.id}
                </div>
                <p className="mt-6 text-[16px] md:text-[17px] 2xl:text-[20px] font-medium text-white">{reason.text}</p>
            </div>
            </div>
        ))}
        </div>

    </section>
  );
}
