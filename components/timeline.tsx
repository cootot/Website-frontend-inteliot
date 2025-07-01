// app/components/Timeline.tsx
'use client';

import api from "@/lib/api";
import { useEffect, useState } from 'react';
import TimelineCard from './TimeLineCard';

type TimelineEvent = {
  _id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  isFirst: boolean;
};

export default function Timeline() {
  const [timelineData, setTimelineData] = useState<TimelineEvent[]>([]);

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const res = await api.get("/timeline_events/get");
        setTimelineData(res.data);
        console.log("Timeline data:", res.data);
      } catch (error) {
        console.error("Failed to fetch timeline:", error);
      }
    };
    fetchTimeline();
  }, []);

  let batchCount = 0;

  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>

      <div className="relative flex flex-col items-center">
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 z-0" />

        <div className="space-y-40 w-full max-w-6xl">
          {timelineData.map((event, idx) => {
            let batchLabel = '';
            if (event.isFirst) {
              batchCount += 1;
              if (batchCount === 1) batchLabel = '1st Batch';
              else if (batchCount === 2) batchLabel = '2nd Batch';
              else if (batchCount === 3) batchLabel = '3rd Batch';
              else batchLabel = `${batchCount}th Batch`;
            }

            return (
              <TimelineCard key={event._id} event={event} idx={idx} batchLabel={batchLabel} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
