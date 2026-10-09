## Part G — Sprint Review and Stakeholder Feedback

### Sprint Review

On October 8, 2026, all team members attended a Sprint Review through Zoom. The team held one combined review of the final working Increment developed across three Sprints. Cuiyi Long simulated a customer stakeholder, and Xudong Zhang simulated a restaurant stakeholder.

The review demonstrated working software, including restaurant selection, cart management, pickup time selection, order submission, customer order progress, and the restaurant workflow of accepting, preparing, completing, and recording pickup of orders. The team also demonstrated restaurant controls for pausing incoming orders. 

### Sprint Goal Achievement and Unfinished Work 
The team reviewed the final working increment against the three Sprint Goals. 
Sprint 1 delivered the core ordering workflow, Sprint 2 delivered restaurant order management and input validation, and Sprint 3 achieved its goal by allowing restaurants to pause new orders independently while continuing to process existing orders. 

PBI#10 - Review Order remains incomplete because the application currently displays the order summary only after order submission. This PBI does not affect the Sprint 3 Goal and remains Open and Todo in the Product Backlog for future prioritization. 

### Stakeholder Feedback Decisions

| ID | Stakeholder Feedback | Decision | Rationale and Outcome |
|---|---|---|---|
| F1 | The customer requested the ability to select a pickup time when placing an order. | **Accept** | Customers need to arrange pickup around their schedules. Customers can select an available pickup time before submitting an order. |
| F2 | The customer requested that pickup choices exclude past times and times the restaurant cannot accommodate. | **Add/Modify Product Backlog Item** | Available pickup times start at least 15 minutes after submission to ensure sufficient preparation time, which is implemented. Following stakeholder clarification, workload-based capacity restrictions were replaced with manual restaurant pause controls (PBI#28), allowing restaurant employee to temporarily stop accepting new orders when necessary. The manual pause feature has also been implemented and tested. |
| F3 | The restaurant requested the ability to pause incoming orders and enter a custom pause duration. | **Clarify** | The team clarified the need to control incoming demand and simplified the implementation to preset durations. The implementation feature provides a 15-second option for demonstration. Repeated clicks add the selected duration to the remaining pause time. Customers and restaurant users can see the pause status or countdown. The feature has been implemented and tested as part of Sprint 3 (PBI#28). |
| F4 | The customer requested visibility into order progress after submission. | **Accept** | Customers need to know whether an order has been accepted, is being prepared, or is ready for pickup. Order progress visibility is implemented. |
| F5 | The restaurant requested a way to mark orders as picked up. | **Accept** | Staff need to distinguish orders awaiting pickup from orders already collected. Pickup completion tracking is implemented. |

No feedback item was rejected. The team accepted feasible needs, clarified the pause interaction, and retained the unresolved capacity requirement for future refinement.

### Increment → Feedback → Learning → Backlog Adaptation

| Increment | Feedback | Learning | Backlog Adaptation |
|---|---|---|---|
| **Ordering workflow** | **F1:** Customers wanted to select a pickup time. | Customers may order ahead and collect their meals later, so pickup time must be part of the ordering workflow. | Added pickup time selection to the Product Backlog and implemented it on the review day. |
| **Pickup time selection** | **F2:** Customers wanted valid and achievable pickup times. | Minimum preparation time and restaurant capacity are separate requirements. For example, an order placed at 4:00 p.m. for 7:00 p.m. pickup does not reveal how many additional orders will arrive in between. | The 15-minute minimum preparation time was implemented for pickup time selection. Workload-based pickup slot restrictions were removed from the planned scope and replaced by restaurant pause controls (PBI#28), following stakeholder agreement. The basic pickup time selection feature remains past of Sprint 1. |
| **Restaurant order management** | **F3:** Restaurants needed to pause orders and control pause duration. | Restaurants need a practical way to manage incoming demand. Preset durations provide a simpler implementation than arbitrary duration entry. | Implemented restaurant pause controls with selectable preset durations and cumulative extensions through repeated clicks. The feature allows each restaurant to pause new orders independently, displays the pause status or countdown, and automatically resumes ordering when the timer expires. The implementation and testing were completed in Spring 3. |
| **Customer order tracking** | **F4:** Customers wanted to see order progress. | Customers need information after checkout to understand when their meals will be ready. | Added or refined the order progress requirement. The final Increment displays customer order progress. |
| **Restaurant completion workflow** | **F5:** Restaurants wanted to record when customers collected orders. | “Ready for pickup” and “picked up” represent different stages and should be tracked separately. | Added or refined the pickup completion requirement. The final Increment allows restaurants to mark orders as picked up. |

The Product Backlog was updated to reflect the stakeholder feedback and agreed scope changes. The workload-based pickup slot restriction was replaced by restaurant pause control. The completed work and corresponding backlog status were recorded in the Github project.
