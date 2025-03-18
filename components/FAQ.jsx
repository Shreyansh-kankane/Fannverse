'use client'
import { useState } from 'react'
import { motion } from "framer-motion";

import { fadeInUp } from '@/motionVariants/variants'
const faqs = [
  {
    question: "What is Fantasy Sports?",
    answer: "Fantasy sports is a strategy-based online sports game where you can create a virtual team of real players playing in real life matches. Your team earns points based on how these players perform in actual matches."
  },
  {
    question: "Is it safe to add money to Fannverse?",
    answer: "Yes, Fannverse provides secure payment options and is completely safe. We use industry-standard encryption and security measures to protect your transactions and personal information."
  },
  {
    question: "How are Fannverse points calculated?",
    answer: "Points are calculated based on the actual performance of players in real matches. Different actions (like runs, wickets in cricket) have specific point values. These are updated live during matches."
  },
  {
    question: "When do I get my winnings?",
    answer: "Winnings are credited to your Fannverse account as soon as the match results are declared and points are finalized. You can withdraw your winnings after verification."
  },
  {
    question: "How do I use the Fannverse discount coupon code?",
    answer: "To use a discount coupon, enter the code during the contest joining process. The discount will be automatically applied if the code is valid for that contest."
  },
  {
    question: "How should I download the Fannverse app?",
    answer: "You can download the Fannverse app from the Google Play Store (Android) or App Store (iOS). Alternatively, scan the QR code on our website or enter your mobile number to get the download link."
  },
  {
    question: "Which type of contests can I join?",
    answer: "Fannverse offers various contest types including Mega Contests, Head-to-Head, Small Leagues, and Private Contests. You can choose based on your preference and budget."
  },
  {
    question: "How to Play on Fannverse App?",
    answer: "Select a match, create your team by picking players within the credit limit, join contests, and track your team's performance live. Watch our tutorial video for detailed instructions."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-12 text-purple-700">FAQs</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-white rounded border flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="transform transition-transform duration-200">
                  {openIndex === index ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="p-4 border-x border-b rounded-b bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
} 