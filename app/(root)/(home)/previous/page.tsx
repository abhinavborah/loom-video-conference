import CallList from "@/components/ui/CallList";
import React from "react";

const Previous = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-gruvbox-fg">
      <h1 className="text-3xl font-bold">Previous Meetings</h1>
      <CallList type="ended" />
    </section>
  );
};

export default Previous;
