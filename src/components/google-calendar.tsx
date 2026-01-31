'use client';

const GoogleCalendar = () => {
  // Replace this src with your Google Calendar embed code.
  // You can get this from your Google Calendar settings:
  // 1. Go to "Settings and sharing" for your calendar.
  // 2. Make sure "Make available to public" is checked.
  // 3. Under "Integrate calendar", copy the code from the "Embed code" section.
  // 4. Paste the 'src' attribute content from that iframe here.
  const calendarEmbedSrc = "https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles";

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
