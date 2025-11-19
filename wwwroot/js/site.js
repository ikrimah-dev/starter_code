document.addEventListener('DOMContentLoaded', function () {

    console.log('DOM fully loaded and parsed');

    // ======================================================
    //  EVENTS LIST PAGE (events.html)
    // ======================================================

    // 1. Check if this is the events page by detecting elements
    // Example: look for #events-container
    // if found, run event-list loading logic

    // 2. TODO: Fetch events from API (GET /events)
    // fetch('API_URL_HERE')
    //   .then(res => res.json())
    //   .then(data => { /* store and loop through events */ })

    // 3. TODO: Loop through event list and dynamically create HTML elements
    // Use document.createElement()
    // Add title, date, location, and image

    // 4. TODO: Append each created event into #events-container

    // 5. TODO: Add search/filter functionality
    // Listen to #search input and filter events based on text

    // ======================================================
    //  EVENT DETAIL PAGE (event-detail.html)
    // ======================================================

    // 6. TODO: Read event ID from URL query string
    // Example: const eventId = new URLSearchParams(window.location.search).get('id');

    // 7. TODO: Fetch event details from API using the eventId
    // Example GET /events/{id}

    // 8. TODO: Populate HTML elements:
    // document.getElementById('event-title').textContent = data.title;
    // document.getElementById('event-date').textContent = data.date;
    // document.getElementById('event-location').textContent = data.location;

    // 9. TODO: Load event images and gallery into #event-gallery

    // 10. TODO: Load organiser information
    // organiser name, email, phone, description

    // 11. TODO: Load comments/reviews into #reviews div

    // 12. OPTIONAL: Gallery animation (automatic slideshow)

    // ======================================================
    //  CONTACT PAGE (contact.html)
    // ======================================================

    // 13. TODO: Validate full name (letters + spaces only)
    // Use regex: /^[A-Za-z ]+$/

    // 14. TODO: Validate email format
    // Use HTML5

    // 15. TODO: Validate phone number (numeric or pattern of your choice)

    // 16. TODO: Prevent form submission if invalid

    // ======================================================
    //  ADMIN PAGE (admin.html)
    // ======================================================

    // 17. TODO: Create organiser POST request
    // fetch('API_URL/organisers', { method: 'POST', body: JSON.stringify({...}) })

    // 18. TODO: Create event POST request

    // 19. TODO: Add comment POST request

    // 20. TODO: Show success or error message on response

});

