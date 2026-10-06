## Working Increment

The team produced an integrated QuickBite pilot using HTML, CSS, and JavaScript. The application combines customer ordering and restaurant order management in one interface, with order and pause data stored in browser local storage.

The Increment supports a complete demonstration from restaurant selection to order collection. Its scope includes two participating restaurants, two dishes per restaurant, pickup-window selection, order submission, customer tracking, restaurant status updates, and independent restaurant pause controls.

The implementation is available in the repository’s [`src`](../../../src) directory.

## Implemented Functionality

| Area | Implemented Behavior |
|---|---|
| **Restaurant selection** | Customers can choose Classic Burger Bar or Campus Pizza House. Each restaurant has its own menu and order queue. |
| **Menu and quantities** | Each restaurant offers two dishes with descriptions and prices. Customers can increase or decrease quantities, with quantities prevented from becoming negative. |
| **Order total** | The application calculates the total from selected quantities and item prices. |
| **Pickup selection** | Customers choose between two 30-minute pickup windows, starting 15 or 45 minutes after order submission. The selected window is stored with the order and displayed in both customer and restaurant views. |
| **Order submission** | An order records a generated identifier, customer identifier, restaurant, selected items, total, pickup window, creation time, and initial Received status. |
| **Customer tracking** | Customers can view their latest order and order history filtered by the entered demonstration customer identifier. |
| **Restaurant management** | Each kitchen displays its own orders and counts of active and completed orders. |
| **Status progression** | Restaurant staff move orders through Received → Preparing → Ready for Pickup → Completed. “Confirm Collected” records pickup completion. |
| **Restaurant pause** | Each restaurant can pause new submissions for 15 seconds. Repeated clicks add 15 seconds to the remaining pause. Customers can continue selecting items, while submission is blocked. |
| **Pause visibility and expiry** | Customer and restaurant views display pause information. Ordering resumes automatically when the pause expires. |
| **Validation** | Submission checks for a valid pickup-window option, at least one selected item, a non-empty customer identifier, and the restaurant’s current pause state. |
| **Persistence** | Orders and pause deadlines are retained in local storage across page refreshes. |

The current pause duration is fixed at 15 seconds for demonstration. A merchant control for selecting 15 minutes is not present in the current implementation.

## Integrated Application Structure

| File | Contribution to the Increment |
|---|---|
| [`index.html`](../../../src/index.html) | Provides the customer portal, restaurant selection, pickup selector, customer order displays, and two kitchen panels. |
| [`styles.css`](../../../src/styles.css) | Provides the layout and visual presentation of customer and restaurant interfaces. |
| [`menu.js`](../../../src/menu.js) | Defines the two restaurants, stable identifiers, menu items, descriptions, and prices. |
| [`app.js`](../../../src/app.js) | Connects selection, quantities, totals, validation, order storage, tracking, restaurant status updates, and pause timing. |

Stable restaurant identifiers connect menu selections to stored orders and kitchen queues. Both customer and restaurant views use the same stored order data, allowing status changes to appear in the integrated interface.

## Shared Repository, Branches, and Commits

The team used the shared [QuickBite-Scrum repository](https://github.com/JasmineLJM/QuickBite-Scrum). Contributions were uploaded through feature branches and integrated into `main` through pull requests.

| Feature Branch | Pull Request | Integrated Contribution |
|---|---|---|
| `feature/page-layout` | [PR #24](https://github.com/JasmineLJM/QuickBite-Scrum/pull/24) | Customer and kitchen page layout. |
| `feature/page-styles` | [PR #25](https://github.com/JasmineLJM/QuickBite-Scrum/pull/25) | Customer and kitchen styling. |
| `feature/restaurant-menu` | [PR #26](https://github.com/JasmineLJM/QuickBite-Scrum/pull/26) | Two restaurants with two dishes each. |
| `feature/order-logic` | [PR #27](https://github.com/JasmineLJM/QuickBite-Scrum/pull/27) | Customer orders and independent restaurant queues. |
| `feature/pickup-time-pause` | [PR #32](https://github.com/JasmineLJM/QuickBite-Scrum/pull/32) | Pickup-window selection and cumulative restaurant pause controls. |

All five pull requests were merged into `main`. Commit messages describe the changes, including “Add customer orders and independent restaurant queues” and “Add pickup time selection and restaurant pause.”

## Team Technical Contributions

All four members contributed code. The team’s recorded technical responsibilities were:

| Member | Technical Responsibility |
|---|---|
| **Cuiyi Long** | Customer restaurant selection, menus, item selection, pickup selection, and order tracking. |
| **Xudong Zhang** | Order submission, incoming restaurant orders, and order status management. |
| **Ziqing Song** | Order data management and testing of the integrated application. |
| **Jie Min Liang** | Input validation, uploading contributions, and integrating changes through branches and pull requests. |

Contributions were sent to Jie Min Liang for upload. Consequently, GitHub authorship is concentrated under one account and does not independently establish each member’s contribution. The task assignments and Daily Scrum records provide supporting attribution.

## Code Review and Testing

The team used pull requests to organize integration. However, PRs #24–#27 and #32 currently contain no submitted GitHub reviews. Their merged status confirms integration, but does not establish that independent code review was completed.

Ziqing Song tested the integrated pilot, as recorded in the Daily Scrum discussions. Detailed manual test cases and results have not yet been documented.

PR #32 reports that automated logic checks passed for pickup-window calculation, saved pickup information, cumulative pauses, restaurant independence, submission blocking, and automatic expiry. The same PR states that browser interaction testing was pending. These reported checks should therefore be distinguished from a documented browser test report.

### Demonstration and Manual Verification Procedure

The following sequence can be used to demonstrate and verify the Increment:

1. Enter a demonstration customer identifier and select a restaurant.
2. Add dishes and change quantities; check the displayed total.
3. Select a pickup window and submit the order.
4. Confirm that the order appears in the customer view and the correct kitchen queue.
5. Progress the order through Preparing, Ready for Pickup, and Completed.
6. Confirm that the customer view reflects the changes.
7. Pause one restaurant and verify that its submissions are blocked while item selection remains available.
8. Click Pause again and verify that the countdown increases.
9. Verify that the other restaurant remains available.
10. Wait for expiry and confirm that ordering resumes.
11. Refresh the page and verify that stored orders remain available.

This procedure describes verification steps; it is not a substitute for recording actual test outcomes.

## Sprint Backlog and Definition of Done

The [GitHub Project](https://github.com/users/JasmineLJM/projects/1) records Sprint assignments, estimates, assignees, linked technical plans, and statuses. Some implemented PBIs still display Todo and require synchronization with the delivered work.

The team’s [Definition of Done](../../scrum/definition-of-done.md) requires satisfied acceptance criteria, completed implementation, committed code, review by another member, passing tests, integration, no known critical defects, and an updated Done status.

| Definition of Done Requirement | Current Evidence |
|---|---|
| Code committed to the shared repository | Implementation files and meaningful commits are available. |
| Work integrated into the application | The five implementation PRs are merged into `main`. |
| Acceptance criteria satisfied | Implemented behavior is inspectable, but complete PBI-by-PBI sign-off is not documented. |
| Code reviewed by another member | Formal review evidence is not recorded in the implementation PRs. |
| Required testing completed and passed | Integrated testing was reported; PR #32 reports automated checks. Detailed manual results remain undocumented. |
| No known critical defects | A complete defect verification record is not available. |
| Project item updated to Done | Some implemented items remain Todo. |

The team has produced an integrated, demonstrable pilot. Full Definition of Done compliance still requires review evidence, documented testing outcomes, and consistent project-board updates.

## Pilot Boundaries

The application uses browser local storage rather than a deployed backend or database. Data is local to the browser and origin; it is not synchronized across separate devices. The customer identifier is a demonstration filter rather than an authenticated account.

The pilot does not implement workload-based capacity limits for pickup periods. These boundaries keep the Increment small enough to demonstrate the core ordering and restaurant workflow.
