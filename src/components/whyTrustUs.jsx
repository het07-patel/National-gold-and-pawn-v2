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
    <section className="text-white py-16 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight mb-3">
          Why You Should Trust Us
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-base">
          At National Gold and Pawn, we pride ourselves on trust, transparency, and fair evaluations.
          With decades of experience, our reputation is built on honest practices and customer satisfaction.
        </p>
      </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {reasonsToTrust.map((reason) => (
            <div
            key={reason.id}
            className="relative p-[2px] rounded-md bg-gradient-to-br from-primary to-approxblack"
            >
            <div className="bg-gradient-to-br from-primary to-approxblack p-6 rounded-md h-full">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#01030A] border border-[#C2963A] w-10 h-10 flex items-center justify-center rounded text-xl font-bold text-[#C2963A]">
                {reason.id}
                </div>
                <p className="mt-6 text-sm font-medium text-white">{reason.text}</p>
            </div>
            </div>
        ))}
        </div>

    </section>
  );
}
