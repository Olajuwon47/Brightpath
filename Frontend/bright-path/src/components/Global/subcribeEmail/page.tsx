'use client';

import React, { useState } from 'react';
import { CustomToast } from '@/components'
import toast from 'react-hot-toast';

interface NewsletterSectionProps {
  title: string;
  description: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  successClassName?: string;
  errorClassName?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title,
  description,
  containerClassName,
  titleClassName,
  descriptionClassName,
  formClassName,
  inputClassName,
  buttonClassName,
}) => {
  if (!process.env.NEXT_PUBLIC_SUBSCRIBE_ENDPOINT) {
    throw new Error('Environment variable NEXT_PUBLIC_SUBSCRIBE_ENDPOINT is not defined');
  }

  const subscribeEndpoint = process.env.NEXT_PUBLIC_SUBSCRIBE_ENDPOINT;

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(subscribeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to subscribe');

      toast.custom(() => <CustomToast message = '🎉 Thank you for subscribing!' />, {
      duration:2000,
      });
      setEmail('');
    } catch (error) {
      toast.custom(() => ( 
        <CustomToast message= {`⚠️ Something went wrong: ${error instanceof Error ? error.message : 'Unknown error'} Please try again.`} /> ),{
          duration: 2000
        });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div
      className={
        containerClassName ??
        'mt-20 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700'
      }
    >
      <h3 className={titleClassName ?? 'text-2xl font-bold mb-2'}>{title}</h3>
      <p className={descriptionClassName ?? 'text-gray-500 mb-6'}>{description}</p>
      <form
        onSubmit={handleSubmit}
          className={formClassName ?? 'flex flex-col md:flex-row gap-4 justify-center items-center'}
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={
            inputClassName ??
            'bg-lime-100 border border-lime-200 rounded-lg px-9 py-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-lime-500 transition'
          }
        />
        <button
          type="submit"
          disabled={loading}
          className={
            buttonClassName ??
            'bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 text-white font-semibold px-6 py-2 rounded-lg hover:brightness-105 transition disabled:opacity-50'
          }
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

// Wrapper that passes props down
type ConfiguredNewsletterProps = NewsletterSectionProps

const ConfiguredNewsletter: React.FC<ConfiguredNewsletterProps> = (props) => {
  return <NewsletterSection {...props} />;
};

export default ConfiguredNewsletter;
