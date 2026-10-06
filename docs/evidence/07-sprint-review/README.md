## Part G — Sprint Review and Stakeholder Feedback

### Sprint Review

On October 6, 2026, all team members attended a Sprint Review through Zoom. The team held one combined review of the final working Increment developed across three Sprints. Cuiyi Long simulated a customer stakeholder, and Xudong Zhang simulated a restaurant stakeholder.

The review demonstrated working software, including restaurant selection, cart management, pickup time selection, order submission, customer order progress, and the restaurant workflow of accepting, preparing, completing, and recording pickup of orders. The team also demonstrated restaurant controls for pausing incoming orders.

### Stakeholder Feedback Decisions

| ID | Stakeholder Feedback | Decision | Rationale and Outcome |
|---|---|---|---|
| F1 | The customer requested the ability to select a pickup time when placing an order. | **Accept** | Customers need to arrange pickup around their schedules. Pickup time selection was implemented on October 6. |
| F2 | The customer requested that pickup choices exclude past times and times the restaurant cannot accommodate. | **Add/Modify Product Backlog Item** | Available pickup times start at least 15 minutes after submission, which is implemented. Capacity restrictions remain unimplemented because the prototype cannot reliably determine future demand and restaurant capacity for each pickup period. |
| F3 | The restaurant requested the ability to pause incoming orders and enter a custom pause duration. | **Clarify** | The team clarified the need to control incoming demand and simplified the implementation to preset durations. The demonstration used 15 seconds; merchants can select 15 minutes. Repeated clicks add the selected duration to the remaining pause time. Customers and restaurant users can see the pause status or countdown. |
| F4 | The customer requested visibility into order progress after submission. | **Accept** | Customers need to know whether an order has been accepted, is being prepared, or is ready for pickup. Order progress visibility is implemented. |
| F5 | The restaurant requested a way to mark orders as picked up. | **Accept** | Staff need to distinguish orders awaiting pickup from orders already collected. Pickup completion tracking is implemented. |

No feedback item was rejected. The team accepted feasible needs, clarified the pause interaction, and retained the unresolved capacity requirement for future refinement.

### Increment → Feedback → Learning → Backlog Adaptation

| Increment | Feedback | Learning | Backlog Adaptation |
|---|---|---|---|
| **Ordering workflow** | **F1:** Customers wanted to select a pickup time. | Customers may order ahead and collect their meals later, so pickup time must be part of the ordering workflow. | Added pickup time selection to the Product Backlog and implemented it on the review day. |
| **Pickup time selection** | **F2:** Customers wanted valid and achievable pickup times. | Minimum preparation time and restaurant capacity are separate requirements. For example, an order placed at 4:00 p.m. for 7:00 p.m. pickup does not reveal how many additional orders will arrive in between. | Separated minimum preparation time validation from capacity restrictions. The 15-minute minimum is implemented; pickup-period capacity limits remain pending further clarification. |
| **Restaurant order management** | **F3:** Restaurants needed to pause orders and control pause duration. | Restaurants need a practical way to manage incoming demand. Preset durations provide a simpler implementation than arbitrary duration entry. | Modified the pause requirement to use selectable preset durations and cumulative extensions through repeated clicks, with visible pause status or countdown. Implemented on the review day. |
| **Customer order tracking** | **F4:** Customers wanted to see order progress. | Customers need information after checkout to understand when their meals will be ready. | Added or refined the order progress requirement. The final Increment displays customer order progress. |
| **Restaurant completion workflow** | **F5:** Restaurants wanted to record when customers collected orders. | “Ready for pickup” and “picked up” represent different stages and should be tracked separately. | Added or refined the pickup completion requirement. The final Increment allows restaurants to mark orders as picked up. |

The Product Backlog was manually updated to reflect these decisions, implemented features, and the unresolved capacity restriction requirement.
