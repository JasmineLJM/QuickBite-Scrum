## Planning Approach

The four team members jointly established the goals, selected Product Backlog Items (PBIs), estimates, and work assignments for Sprint 1 and Sprint 2 early in the project. 

The team used [GitHub Projects](https://github.com/users/JasmineLJM/projects/1) to organize the Product Backlog and [Sprint Backlog](https://github.com/users/JasmineLJM/projects/1/views/2). Selected PBIs have Sprint assignments, story point estimates, assignees, and linked engineering plans.

The [Daily Scrum records](../05-daily-scrum%20/readme.md) provide supporting evidence of coordination. By October 2, Sprint 1 task allocation was complete. On October 5, the team discussed code integration and testing through Zoom.

## Sprint Goals

| Sprint | Sprint Goal |
|---|---|
| **Sprint 1 — Ordering and Core Selection** | Deliver a functional pickup ordering flow for two participating restaurants with two dishes each, allowing customers to browse restaurants, select items, choose a valid pickup time, and submit an order. |
| **Sprint 2 — Restaurant Management and Validation** | Enable restaurant staff to view incoming orders and update order statuses, while customers track progress and the application validates required order information. |
| **Sprint 3 — Restaurant Pause Controls** | Enable restaurants to temporarily pause new orders independently while continuing to process existing orders. |

## Selected PBIs and Estimates

The team discussed and agreed on the story point estimates shown in the project board. These are relative estimates of effort and complexity, rather than hours worked.

| Sprint | Selected PBI | Story Points | Responsible Member |
|---|---|---:|---|
| Sprint 1 | Browse Participating Restaurants | 3 | Cuiyi Long |
| Sprint 1 | View Restaurant Menus | 3 | Cuiyi Long |
| Sprint 1 | Add Items to an Order | 5 | Cuiyi Long |
| Sprint 1 | Select a Pickup Time | 3 | Cuiyi Long |
| Sprint 1 | Place an Order | 5 | Xudong Zhang |
| **Sprint 1 total** | | **19** | |
| Sprint 2 | View Incoming Orders | 5 | Xudong Zhang |
| Sprint 2 | Implement Order Data Management | 5 | Ziqing Song |
| Sprint 2 | View the Status of an Order | 3 | Cuiyi Long |
| Sprint 2 | Update Order Status | 5 | Xudong Zhang |
| Sprint 2 | Implement Input Validation | 2 | Jie Min Liang |
| **Sprint 2 total** | | **20** | |
| Sprint 3 | Restaurant Pause Controls | Not recorded on the board | Jie Min Liang: upload and integration; Ziqing Song: testing |

The **Review Order** PBI was excluded from this delivery because the team decided that a separate review feature was not essential to the pilot.

Sprint 3 focused only on restaurant pause controls. Workload-based capacity limits for pickup periods were outside its implementation scope.

## Available Capacity and Scope

The team consisted of four students working within limited availability alongside coursework and other commitments. Planning therefore focused on a small pilot with two restaurants, two dishes per restaurant, and a manageable ordering and fulfillment workflow.

Work was divided across customer interfaces, restaurant functionality, data management, validation, and integration. The team also needed time for requirements clarification, testing, documentation, and learning the GitHub collaboration workflow.

The Sprint 1 and Sprint 2 estimates provide a relative workload forecast. Precise available hours and a separate capacity total for each Sprint were not recorded. The team controlled scope by limiting the catalogue, excluding the optional Review Order feature, and using a simple restaurant pause mechanism instead of forecasting capacity for every pickup period.

## Engineering Task Breakdown

The selected PBIs were broken into engineering activities through linked **Developers’ Technical Plan** sub-issues. The plans cover requirements, design, implementation, UI work, data management, testing, and integration.

| PBI / Area | Engineering Tasks |
|---|---|
| **Restaurant browsing** | Design restaurant cards; define the restaurant dataset; implement restaurant selection and navigation; test the displayed list and selection behavior. |
| **Restaurant menus** | Define menu item fields; design dish cards with names and prices; connect each restaurant to its menu; test menu loading and correct item display. |
| **Shopping cart** | Design cart state and item data; implement quantity changes and subtotal calculations; build the cart summary; integrate menu selections; test calculations, item removal, and boundary cases. |
| **Pickup time selection** | Clarify valid pickup time rules; implement available time choices; connect the selected time to the order; test minimum preparation time and invalid selections. |
| **Order placement** | Define the order structure and submission information; implement order creation; connect checkout to storage and confirmation; test the integrated submission flow. |
| **Incoming orders** | Design the restaurant order display; retrieve orders for the selected restaurant; display items and pickup information; test order lists and empty states. |
| **Order data management** | Define order fields; implement storage and retrieval; test sample order data; integrate stored orders with customer and restaurant views. |
| **Customer order tracking** | Design the status display; retrieve and refresh order progress; test that restaurant updates appear in the customer view. |
| **Restaurant status updates** | Define the order lifecycle; implement staff controls; test valid transitions and completion behavior. |
| **Input validation** | Define required information; implement error messages and submission checks; test empty orders, missing selections, and invalid inputs. |
| **Restaurant pause controls** | Clarify pause behavior; implement independent restaurant timers and visible pause information; block new submissions during a pause; test repeated clicks, expiry, and restaurant independence; integrate the feature for demonstration. |
| **Integration and documentation** | Combine contributions through GitHub branches and pull requests; check the combined workflow; record planning decisions, changes, and review evidence. |

The initial technical plans included possible controllers, endpoints, and server-side validation. The delivered application is a browser-based pilot using HTML, CSS, JavaScript, and local browser storage for order data. Those initial architectural proposals should not be treated as evidence of an implemented backend or database.

The recorded estimates are at PBI level. Separate estimates for individual engineering tasks were not documented.

## Work Assignment and Coordination

| Member | GitHub Account | Coordinated Work |
|---|---|---|
| **Cuiyi Long** | Scarlett9061 | Restaurant browsing, menus, cart behavior, pickup time selection, and customer order tracking. |
| **Xudong Zhang** | xddd10 | Order placement, incoming orders, and restaurant order status updates. |
| **Ziqing Song** | ZiqingSong | Order data management and testing of the integrated pilot, including Sprint 3. |
| **Jie Min Liang** | JasmineLJM | Input validation, code upload, and integration, including Sprint 3. |

All four members contributed code. Contributions were sent to Jie Min Liang for upload to separate branches and integration through pull requests. Ziqing Song retrieved the integrated version and performed testing.

The team coordinated shared order fields, status values, and interfaces so that customer submission, stored order data, and restaurant processing could work together. Assigned ownership supported coordination, while the Developers shared responsibility for the overall Increment.

## Sprint Backlog and Evidence

The project-management records make the selected PBIs, Sprint assignments, PBI estimates, assignees, and linked technical plans visible. Sprint goals are documented in this repository, with the Sprint 3 goal also recorded in its planning issue.

Some online records still require synchronization: the Sprint 3 issue contains an earlier planning version, its estimate is missing, and several implemented PBIs remain marked Todo. These administrative gaps do not establish that the corresponding software is incomplete, but they should be updated to match the final delivery.

- [GitHub Project](https://github.com/users/JasmineLJM/projects/1)
- [Sprint Backlog](https://github.com/users/JasmineLJM/projects/1/views/2)
- [Sprint 3 Planning Issue](https://github.com/JasmineLJM/QuickBite-Scrum/issues/29)
- [Daily Scrum Records](../05-daily-scrum%20/readme.md)
- [Sprint Backlog Screenshot 1](./SprintBacklog_1.png)
- [Sprint Backlog Screenshot 2](./SprintBacklog_2.png)
