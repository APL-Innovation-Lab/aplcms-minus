## Austin Public Library Website Architecture Summary

### Contributors
These architecture recommendations were initially provided by GitHub user [markmals](https://github.com/markmals) in collaboration with **Open Austin**. The collaborative efforts have been instrumental in shaping the strategic direction for the website’s development.

### Repository Information
The detailed documentation and ongoing updates for this project are available in the GitHub repository: [APL-Innovation-Lab/apl-architecture](https://github.com/APL-Innovation-Lab/apl-architecture).

### Holotypes and Ideal Implementations
The architecture of the Austin Public Library website is influenced by two main holotypes:

1. **Content Websites (e.g., CNN, The Onion):**
   - **Characteristics:** Discoverability, rich media, and embedded content.
   - **Constraints:** Shallow session depth, resource contention from ads and SEO challenges.
   - **Ideal Implementation:** Server-rendered sites with SPA routing and delivery as Progressive Web Apps (PWA) in default display mode.

2. **PIM Applications (e.g., Gmail, Outlook.com):**
   - **Characteristics:** Thick-client applications with requirements like infinite lists, rich text editing, offline capabilities, and notifications.
   - **Constraints:** Extended session lengths, sensitivity and security of data.
   - **Ideal Implementation:** Single Page Apps with app shell caching and delivery as PWAs in standalone display mode.

The APL website combines elements of both types, with main content functions and specific applications like room reservation systems.

### Optimization Goals
The main optimization goals include:
- **Simplicity**
- **SEO (Discoverability)**
- **Initial Page Load Speed**

### Key Strategies for Optimization
To achieve these goals, the following strategies are recommended:

1. **Server-Side Work:** Maximizing server-side operations to minimize client-side load times and dependencies.
2. **Minimal Data Transmission:** Using techniques like nested routing and partial hydration to reduce data sent over the network.
3. **HTML First:** Ensuring that the site is usable as soon as HTML is loaded, prior to JavaScript, which supports progressive enhancement.
4. **Standards and Defaults:** Utilizing web standards like `<form>` and `<link rel="prefetch">` to optimize asset handling and data flow.

### Recommended Architectures
Depending on the ability to server render:

- **Astro with Preact Islands** for flexibility without React.
- **Remix** if using React, to leverage advanced performance techniques.
- For client rendering, either **Remix** for a greenfield approach or **Preact/Lit web components** for an incremental rewrite within Drupal.

### Incremental Implementation Choices
- **Route Replacement:** Gradually replace routes with new technologies.
- **Component Replacement:** Integrate modern declarative frameworks within existing Drupal pages.

This approach allows for phased adoption of new technologies, improving performance and user experience without complete overhaul.