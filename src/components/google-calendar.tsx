'use client';

const GoogleCalendar = () => {
  // IMPORTANT: Replace this src with your public Google Calendar embed URL.
  // Follow these steps to get your embed URL:
  // 1. Open Google Calendar on a computer.
  // 2. In the "Settings and sharing" for the calendar you want to embed, go to "Access permissions" and check "Make available to public".
  // 3. Go to the "Integrate calendar" section and click "Customize".
  // 4. In the customization options:
  //    - UNCHECK "Show title". This removes the calendar name.
  //    - UNCHECK "Show timezone".
  //    - Configure other options as you like.
  // 5. Copy the ENTIRE <iframe ...> code from the top of the customization page.
  // 6. Find the `src="..."` attribute in that code and copy ONLY the URL inside the quotes.
  // 7. Paste that URL into the `calendarEmbedSrc` variable below.
  const calendarEmbedSrc = ""; // <-- PASTE YOUR CALENDAR EMBED URL HERE

  if (!calendarEmbedSrc) {
    return (
      <div className="flex flex-col items-center justify-center h-[600px] bg-muted/50 rounded-lg border border-dashed text-center p-8">
        <h3 className="text-xl font-semibold text-foreground/80">Your Calendar Will Appear Here</h3>
        <p className="mt-2 text-foreground/60">
          Please follow the instructions in the `src/components/google-calendar.tsx` file to embed your Google Calendar.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <iframe
        src={calendarEmbedSrc}
        style={{ border: 0 }}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default GoogleCalendar;
