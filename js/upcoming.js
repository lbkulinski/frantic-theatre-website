// Frantic Theatre Co. — upcoming events list
//
// Edit EVENTS below whenever a show is booked. Each event needs a date so
// this script can tell whether it's still current. Once every event's date
// has passed, the ticket cards are hidden automatically and the
// "nothing scheduled" message is shown instead — no need to manually
// toggle anything on the page.
//
// FUTURE: this list is maintained by hand for now. A later version could
// pull events from a real Google Calendar (via the Calendar API or a
// published calendar feed) instead of editing this array directly.

const EVENTS = [
  // {
  //   title: "[Show Title]",
  //   date: "2026-11-14",        // performance date (or opening date for a run), YYYY-MM-DD
  //   displayDate: "Nov 14",     // how the date should read on the ticket
  //   venue: "[Venue Name]",
  //   description: "[One line description of the show or event.]",
  //   link: "https://example.com/tickets", // ticket link or info page
  //   linkLabel: "Get tickets",
  // },
];

function renderUpcoming() {
  const list = document.getElementById("ticket-row");
  const empty = document.getElementById("empty-state");
  if (!list || !empty) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = EVENTS
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (upcoming.length === 0) {
    list.hidden = true;
    empty.hidden = false;
    return;
  }

  list.hidden = false;
  empty.hidden = true;
  list.innerHTML = upcoming
    .map(
      (e) => `
        <a class="ticket" href="${e.link}">
          <p class="date">${e.displayDate}</p>
          <p class="show-title">${e.title}</p>
          <p class="venue">${e.venue}</p>
          <p class="desc">${e.description}</p>
          <p class="cta">${e.linkLabel || "More info"} &rarr;</p>
        </a>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderUpcoming);
