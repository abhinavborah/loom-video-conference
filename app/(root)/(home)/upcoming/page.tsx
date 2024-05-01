import CallList from "@/components/ui/CallList";

const UpcomingPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-gruvbox-fg">
      <h1 className="text-3xl font-bold">Upcoming Meetings</h1>

      <CallList type="upcoming" />
    </section>
  );
};

export default UpcomingPage;
