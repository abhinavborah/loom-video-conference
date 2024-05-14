import MeetingTypeList from "@/components/ui/MeetingTypeList";
import React from "react";
import { DateTime } from "luxon"; // Import DateTime from Luxon

const Home = () => {
  const now = DateTime.local(); // Use Luxon's local method

  // Format the time and date with options
  const time = now.toLocaleString({
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleString({
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="flex size-full flex-col gap-10 text-gruvbox-fg">
      <div className="h-[300px] w-full rounded-3xl bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-gruvbox-fg text-center text-base font-normal">
            Upcoming Meeting at: 12:30pm
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-gruvbox-blue2 lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
