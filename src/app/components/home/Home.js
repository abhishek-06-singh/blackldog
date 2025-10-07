'use client';
import { useEffect, useState } from 'react';
import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from './homepageHero/Hero';
import PlatformBenefits from './PlatformBenefits';
import KeyFeatures from './KeyFeatures';
import AudienceSection from './AudienceSection';
import SeeItInAction from './SeeItInAction';
import PriceModalWrapper from '../Modal/PriceModalWrapper';
import WhoChoose from './WhoChoose';
import TrustedBy from './TrustedBy';
import Security from './Security';
import Footer from '../common/Footer';
import { useAuth } from '../../../../context/AuthContext';
import { useRouter } from 'next/navigation';
import {TrialAssign} from '../../../services/api'

const Homemain = () => {
  const { user } = useAuth();
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

useEffect(() => {
    setIsMounted(true);

    const checkTrial = async () => {
      try {
        const res = await TrialAssign(); // your async API call

        // Show modal if user exists AND either subscription or trial is active
        if (user && (user.isSubscribed || user.isTrialActive)) {
          setIsModalOpen(true);
        } else {
          router.push('/'); // redirect if neither is active
        }
      } catch (error) {
        console.error('Error checking trial:', error);
        router.push('/'); // redirect on error
      }
    };

    checkTrial();
  }, [user, router]);

  if (!isMounted) return null;

  return (
    <div>
      {user && (
        <PriceModalWrapper
          isModalOpen={isModalOpen}
          showModal={() => setIsModalOpen(true)}
        />
      )}

      <Navbar />
      <Hero />
      <PlatformBenefits />
      <KeyFeatures />
      <AudienceSection />
      <SeeItInAction />
      <TrustedBy />
      <Security />
      <WhoChoose />
      <Footer />
    </div>
  );
};

export default Homemain;
