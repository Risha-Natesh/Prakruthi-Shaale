'use client';

const GoogleCalendar = () => {
  // This component displays the calendar in "Month" view on desktop and "Agenda" view on mobile.
  const calendarEmbedUrl = "https://calendar.google.com/calendar/embed?src=a6ec66b5efad03cdb300d5d33ce7cd99985176e2fd6a3f2cab9e0b62138afbcd%40group.calendar.google.com&ctz=Asia%2FKolkata&bgcolor=%23121c14";

  if (!calendarEmbedUrl) {
    return (
      <div className="flex flex-col items-center justify-center h-[600px] bg-muted/50 rounded-lg border border-dashed text-center p-8">
        <h3 className="text-xl font-semibold text-foreground/80">Your Calendar Will Appear Here</h3>
        <p className="mt-2 text-foreground/60">
          A calendar embed URL is missing in `src/components/google-calendar.tsx`.
        </p>
      </div>
    )
  }

  const desktopSrc = `${calendarEmbedUrl}&mode=MONTH`;
  const mobileSrc = `${calendarEmbedUrl}&mode=AGENDA`;

  return (
    <div className="w-full h-[600px]">
      {/* Desktop Calendar (Month View) */}
      <iframe
        src={desktopSrc}
        className="hidden md:block w-full h-full"
        style={{ border: 0 }}
        frameBorder="0"
        scrolling="no"
        title="Google Calendar - Desktop"
      ></iframe>
      {/* Mobile Calendar (Agenda View) */}
      <iframe
        src={mobileSrc}
        className="block md:hidden w-full h-full"
        style={{ border: 0 }}
        frameBorder="0"
        scrolling="no"
        title="Google Calendar - Mobile"
      ></iframe>
    </div>
  );
};

export default GoogleCalendar;
