'use client'
import Image from 'next/image'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import SportsCarousel from '@/components/SportsCarousel'
import RegistrationForm from '@/components/RegisterationForm'

import { useState } from 'react'


import { motion } from "framer-motion";

import { fadeInUp, containerVariants } from '@/motionVariants/variants'

export default function Home() {
  
  return (
    <main className="min-h-screen bg-black">

      {/* Header */}
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="fixed w-full top-0 z-50 p-4 flex justify-between items-center bg-gradient-to-b from-[#16074a] backdrop-blur-sm border-0"
      >
        <div className="flex items-center gap-4">
          
          <Image 
            src="/logo.png" 
            alt="Fannverse" 
            width={140} 
            height={140}
            className="h-16 w-auto z-100"
          />
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section className="relative pt-16 min-h-screen bg-gradient-to-b from-[#16074a] to-black"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
       

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <Image 
              src="/player2.png" 
              alt="Fannverse Players" 
              width={600} 
              height={600}
              className="mx-auto"
            />
        </div>

        <div>
          <h1 className="text-center text-white text-4xl md:text-6xl font-bold mt-16">
            India's first sports Rmg platform
          </h1>
          <p className="text-center text-white text-lg mt-4">
            Casino Of DFS
          </p>
        </div>
    
      </motion.section>

      
      <motion.section className="bg-white"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 bg-purple-100/80 py-12">

          <h2 className="text-center text-3xl font-bold mb-6">
           Fantasy Games on <span className="text-purple-700">Fannverse</span>
          </h2>
          
          <div className="flex justify-center items-center gap-4 flex-wrap">

          <div className="bg-white rounded-xl shadow-md p-2 flex items-center justify-center">
              <Image 
                src="/cricket.webp" 
                alt="BCCI" 
                width={150} 
                height={150}
                className="object-contain hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
              <Image 
                src="/football.png" 
                alt="WPL" 
                width={150} 
                height={150}
                className="object-contain hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
              <Image 
                src="/F1.webp" 
                alt="WPL" 
                width={150} 
                height={150}
                className="object-contain hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
              <Image 
                src="/kabaddi.webp" 
                alt="WPL" 
                width={150} 
                height={150}
                className="object-contain hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
              <Image 
                src="/MMA.webp" 
                alt="WPL" 
                width={150} 
                height={150}
                className="object-contain hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
              <Image 
                src="/NBA.webp" 
                alt="WPL" 
                width={150} 
                height={150}
                className="object-contain hover:scale-110 transition-all duration-300"
              />
            </div>

            <div className="bg-white rounded-xl shadow-md p-2 flex items-center justify-center">
              <Image 
                src="/basketball.webp" 
                alt="BCCI" 
                width={150} 
                height={150}
                className="object-contain hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md p-2 flex items-center justify-center">
              <Image 
                src="/tennis.webp" 
                alt="BCCI" 
                width={150} 
                height={150}
                className="object-contain hover:scale-110 transition-all duration-300"
              />
            </div>
           

          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h2 className="text-center text-3xl font-bold mb-2">
            It's easy to start playing <span className="text-purple-700">on Fannverse</span>
          </h2>
          <p className="text-center text-purple-500 mb-8">
            Play Fantasy Cricket on Fannverse and win big!
          </p>
          
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
            Enter into the thrilling world of Fantasy sports, a strategy-based online sports game wherein you can create a virtual team of real players playing in real life matches. Create your team to win points based on all the players' performance in a live game.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            
            {/* Step 1 */}
            <div className="relative p-4 bg-white rounded-lg shadow-md">
              <div className="absolute -top-5 left-6">
                <div className="w-10 h-10 bg-purple-800 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg mb-2">Select A Match</h3>
                <p className="text-gray-600">Choose an upcoming match that you want to play</p> 
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative p-4 bg-white rounded-lg shadow-md">
              <div className="absolute -top-5 left-6">
                <div className="w-10 h-10 bg-purple-800 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg mb-2">Select the game</h3>
                <p className="text-gray-600">Pick the game you want to play</p>
                
              </div>
            </div>

            <div className="relative p-4 bg-white rounded-lg shadow-md">
              <div className="absolute -top-5 left-6">
                <div className="w-10 h-10 bg-purple-800 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg mb-2">Join Contest</h3>
                <p className="text-gray-600">Use your skills to pick the right players</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative p-4 bg-white rounded-lg shadow-md">
              <div className="absolute -top-5 left-6">
                <div className="w-10 h-10 bg-purple-800 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg mb-2">Apply sports knowledge and win big</h3>
                <p className="text-gray-600">Choose between different contests and compete</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className='md:flex bg-purple-200 gap-10 justify-center items-center'>
        <div className='relative'>
          <video src="/video1.mp4"
            autoPlay
            loop
            className="object-cover z-0 p-4 mx-auto"
            width={600}
            height={600}
            playsInline
            controls
          >
          </video>
        </div>
        
        <RegistrationForm />

      </div>


      {/* Get the App Section */}
      <motion.section className="py-16 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12">
            Dont just watch sports,<span className="text-purple-700"> compete along</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            {/* App Screenshots */}
            <div className="flex-1 relative">
              <Image 
                src="/getApp4.png"
                alt="Fannverse App Screenshots"
                width={600}
                height={600}
                className="w-full max-w-lg mx-auto rounded-lg hover:scale-110 transition-all duration-300"
              />
            </div>

            {/* Features and Download Links */}
            <div className="flex-1 space-y-8">
              {/* Features List */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-gray-600">
                      <path fill="currentColor" d="M21,6H3A2,2 0 0,0 1,8V16A2,2 0 0,0 3,18H21A2,2 0 0,0 23,16V8A2,2 0 0,0 21,6M21,16H3V8H21Z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">
                    New interactive games that allows u to engage in every second of the match {' '}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-gray-600">
                      <path fill="currentColor" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">Play with family , playwith friends , or compete over sports </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-gray-600">
                      <path fill="currentColor" d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">Refer and get fannvers NFT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto py-12 bg-purple-100">
        <h1 className="text-3xl font-bold text-center mb-8">
          Popular <span className="text-purple-700">Fantasy Sports</span> in India
        </h1>
        <SportsCarousel />
      </div>

      <FAQ />

      <Footer />
    </main>
  )
} 


{/*       
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-2xl font-bold mb-12">
      Reviews & <span className="text-red-600">Rating</span>
    </h2>

    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4 mb-4">
            <Image 
              src="/manas-malhotra.png" 
              alt="Manas Malhotra" 
              width={60} 
              height={60}
              className="rounded-full"
            />
            <h3 className="font-bold">Manas Malhotra</h3>
          </div>
          
          <div className="bg-black text-white p-3 rounded mb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm">Mega Contest Winner</div>
                <div className="text-xs text-gray-400">MI vs RR</div>
              </div>
              <div>
                <div className="text-yellow-500">₹1 Crore</div>
                <div className="text-xs text-gray-400">WINNINGS</div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600">
            I've been playing on Fannverse for many years and I have won earlier too. This time I won a Mega Contest! I'm an avid cricket follower. The best part was I got my winnings instantly into my bank account after the withdrawal.
          </p>
        </div>

        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4 mb-4">
            <Image 
              src="/sagar-bhagat.png" 
              alt="Sagar Bhagat" 
              width={60} 
              height={60}
              className="rounded-full"
            />
            <h3 className="font-bold">Sagar Bhagat</h3>
          </div>
          
          <div className="bg-black text-white p-3 rounded mb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm">Mega Contest Winner</div>
                <div className="text-xs text-gray-400">PBKS VS DC</div>
              </div>
              <div>
                <div className="text-yellow-500">₹1 Crore</div>
                <div className="text-xs text-gray-400">WINNINGS</div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600">
            One of the many reasons why I trust Fannverse is because I get my winnings safely and instantly after the contest gets over. I also used my own cricket knowledge to enhance my fantasy cricket skills.
          </p>
        </div>

        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4 mb-4">
            <Image 
              src="/anuj-yadav.png" 
              alt="Anuj Yadav" 
              width={60} 
              height={60}
              className="rounded-full"
            />
            <h3 className="font-bold">Anuj Yadav</h3>
          </div>
          
          <div className="bg-black text-white p-3 rounded mb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm">Mega Contest Winner</div>
                <div className="text-xs text-gray-400">GT vs MI</div>
              </div>
              <div>
                <div className="text-yellow-500">₹1 Crore</div>
                <div className="text-xs text-gray-400">WINNINGS</div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600">
            I used to always watch cricket and analyse the game. It was all about doing some good research and putting skills to work. I'm glad my knowledge and skills got rewarded and I won the Mega Contest.
          </p>
        </div>
      </div>

      
      <div className="mt-12 flex justify-center items-center gap-4 bg-white rounded-lg shadow-md py-4 px-8 max-w-fit mx-auto">
        <span className="font-medium">App Rating</span>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map((star) => (
            <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className="text-gray-300" />
          </svg>
        </div>
        <span className="font-bold text-lg">4.7</span>
        <span className="text-gray-500">2,750,143 ratings</span>
      </div>
    </div>
  </div>
</section> */}