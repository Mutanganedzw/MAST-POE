> Why do I have a folder named ".expo" in my project?

The ".expo" folder is created when an Expo project is started using "expo start" command.

> What do the files contain?

- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "packager-info.json": contains port numbers and process PIDs that are used to serve the application to the mobile device/simulator.
- "settings.json": contains the server configuration that is used to serve the application manifest.

> Should I commit the ".expo" folder?

No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.

Upon project creation, the ".expo" folder is already added to your ".gitignore" file.

Average Price Display on Home Screen:
   - The home screen now shows the average price of menu items, organized by course. This feature calculates the average for each course (e.g., Starters, Main Courses) based on the items added by the chef.

2. *Separate Menu Management Screen:
   - Moved the menu item management (adding and removing items) from the home screen to a dedicated screen for chefs. This helps separate functionality, making the home screen purely informational.
   - Chefs can now add and delete menu items on this new screen, with changes reflected on the main menu on the home page.

3. *Filter Menu by Course:
   - Added a new screen that allows users to filter menu items by course type (e.g., Starters, Main Courses, Desserts).
   - This feature provides a more user-friendly way to browse the menu based on customer preference.