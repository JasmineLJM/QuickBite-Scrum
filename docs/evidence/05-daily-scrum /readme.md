## Part E — Daily Scrum and Adaptation
### Daily Scrum 1 — October 2, 2026

**Sprint:** Sprint 1 — Ordering & Core Selection Increment  
**Location:** Concordia University, Hall Building  
**Participants:** All four team members  
**Duration:** 20 minutes

**Sprint Goal:** Deliver a functional, end-to-end pickup ordering increment with a fixed catalogue of two participating restaurants and two dishes per restaurant, allowing customers to browse restaurants, select items into a cart, schedule a valid pickup time, and submit orders successfully.

**Important progress:**  
The team completed the allocation of Sprint 1 tasks and was preparing to begin implementation. No completed functionality was reported at this meeting.

**Identified impediments:**  
All four members had limited familiarity with GitHub, creating uncertainty about how to upload, share, and integrate code while working toward the Sprint Goal.

**Decisions made:**  
The Developers agreed to learn the basic GitHub workflow and each try uploading code. They would compare their experiences, identify difficulties, and then select a suitable collaboration and code integration workflow. The final workflow had not yet been determined.

**Changes to the team’s plan:**  
The team added GitHub familiarization and initial practice as the next steps before collaborative implementation. Task allocation and the Sprint Goal remained unchanged.

**Time-box observation:**  
The meeting lasted 20 minutes, exceeding the 15-minute Daily Scrum time-box.


### Daily Scrum 2 — October 5, 2026

**Sprint:** Sprint 1 — Ordering & Core Selection Increment  
**Location:** Zoom  
**Participants:** All four team members  
**Duration:** 12 minutes

**Sprint Goal:** Deliver a functional, end-to-end pickup ordering increment with a fixed catalogue of two participating restaurants and two dishes per restaurant, allowing customers to browse restaurants, select items into a cart, schedule a valid pickup time, and submit orders successfully.

**Important progress:**  
All four team members wrote code and sent their contributions to Jie Min Liang, who uploaded the four implementation files to separate GitHub branches. The files cover the page structure, styling, restaurant menu data, and order logic. All four pull requests were merged into `main`, as confirmed by their purple Merged status. Ziqing Song pulled the integrated code and performed testing. The specific test cases and results have not yet been documented, and completion of pickup-time scheduling remains unverified.

**Identified impediments:**  
Code uploads were centralized through one member rather than performed independently by each contributor. Testing was reported, but detailed test evidence and independent code-review records still need to be confirmed.

**Decisions made:**  
The team used four separate branches and pull requests to integrate the implementation. Ziqing Song pulled and tested the integrated version. The team identified Part F — requirement change and adaptation — as the next step.

**Changes to the team’s plan:**  
No major changes were made to the Sprint Goal. The team continued integrating the submitted code and focused on verifying the remaining functionality.


### Daily Scrum 3 — October 6, 2026

**Sprint:** Sprint 1 pickup-time follow-up and Sprint 3 restaurant pause controls  
**Location:** Zoom  
**Participants:** All four team members  
**Duration:** 12 minutes

**Sprint Goal:** Complete valid pickup-time selection for the ordering pilot and enable each restaurant to temporarily pause new orders while continuing to process existing orders.

**Important progress:**  
The team added pickup-time selection and restaurant pause controls to the pilot. Available pickup times begin at least 15 minutes after order submission. Restaurant users can select a preset pause duration, with 15 seconds used for demonstration and 15 minutes available for normal use. Repeated clicks add the selected duration to the remaining pause time. Customers and restaurant users can see the pause status or countdown. Jie Min Liang handled upload and integration, and Ziqing Song performed testing. Detailed test cases and results have not yet been documented.

**Identified impediments:**  
The pilot lacks sufficient operational information to determine reliable order limits for each pickup period. An order placed several hours before pickup does not reveal the additional demand that may arrive in between. Custom pause-duration entry was also considered too complex for the current implementation.

**Decisions made:**  
The team retained a minimum preparation time of 15 minutes for pickup choices and did not implement capacity limits for individual pickup periods. For restaurant pausing, the team adopted preset durations and cumulative extensions through repeated clicks. Jie Min Liang coordinated integration, and Ziqing Song tested the combined changes.

**Changes to the team’s plan:**  
Pickup-time selection progressed from previously unverified functionality to an implemented feature. Restaurant pause controls addressed the need to manage incoming orders without forecasting future demand. The team manually updated the Product Backlog to reflect the stakeholder feedback and resulting scope decisions. Detailed testing evidence and synchronization of older project-board records remain pending.

**Time-box observation:**  
The meeting lasted 12 minutes, within the 15-minute Daily Scrum time-box.
The team progressed from GitHub familiarization to code submission and integration. The next planned activity is Part F. The Sprint Goal remains unchanged; integration alone does not confirm that every element of the goal has been completed.
