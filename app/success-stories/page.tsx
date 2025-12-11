import { Metadata } from 'next';
import SuccessStories from '@/components/sections/success-stories';

export const metadata: Metadata = {
  title: 'Success Stories - RWUA Nepal',
  description: 'Read inspiring success stories from our water and sanitation projects across rural Nepal.',
};

export default function SuccessStoriesPage() {
  return (
    <div className="pt-32">
      <SuccessStories />
    </div>
  );
}