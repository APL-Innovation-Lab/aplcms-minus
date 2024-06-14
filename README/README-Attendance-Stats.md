
## Events and Attendance Statistics Process

This document explains how library staff can manage events and track attendance using our Drupal website.

### Overview

On the website, there's a dedicated page for recording attendance statistics for various events. Library staff members navigate to this page whenever they need to add the number of attendees for a particular event. This action creates or updates a record, known as a "node", specifically for tracking attendance statistics.

### Accessing the Attendance Statistics Page

- The attendance statistics page can be accessed via: `/admin/attendance-stats`.
- This page is part of a larger section controlled by "Views", a Drupal module that allows for the dynamic display of content. You can find the settings for this view at: `/admin/structure/views/view/attend_stats_dashboard__/edit/page_1`.

### Adding or Editing Attendance Records

When adding a new attendance record, the website previously used a complex URL structure to pre-fill a form with event details. This method proved problematic due to special characters in the URLs. To simplify the process and avoid these issues, the URL structure has been streamlined.

#### For New Attendance Records

- To create a new attendance record, select the event from the list. This generates a URL in the following format: `/node/add/reflection?nid={{ nid_1 }}`.
- This new format significantly simplifies the process, requiring only the event's node ID (nid) to generate the form with pre-filled event details.

#### For Existing Attendance Records

- If an attendance record already exists for an event, selecting the event will instead generate a URL to edit the existing record: `/node/{{ nid_2 }}/edit`.

### Key Improvements

This update improves the workflow by simplifying the URL structure used to add or edit attendance records. It reduces the likelihood of errors by minimizing the number of parameters passed through the URL. Now, the system relies on the associated event node to look up and display event details within the attendance statistic node, enhancing both reliability and user experience.

