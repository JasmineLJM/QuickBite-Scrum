
## Part G — Sprint Review and Stakeholder Feedback

### Sprint Review

On October 6, 2026, all team members attended a Sprint Review through Zoom. The team conducted one combined review of the final working Increment developed across the three Sprints. Cuiyi Long simulated a customer stakeholder, and Xudong Zhang simulated a restaurant stakeholder.

The review focused on demonstrating working software. The team demonstrated selecting a restaurant, adding items to the cart, selecting a pickup time, and submitting an order. The restaurant workflow included accepting an order, preparing it, marking it as ready, and recording pickup. The demonstration also included customer order progress and restaurant controls for pausing new orders.

### Stakeholder Feedback, Learning, and Backlog Adaptation

| Increment / Feedback | Decision | Learning | Product Backlog Adaptation and Outcome |
|---|---|---|---|
| **Pickup time selection:** The customer requested the ability to choose a pickup time when placing an order. | **Accept** | Customers need to coordinate pickup with their own schedules, including ordering ahead for a later pickup. | Added a pickup time selection item. The feature was implemented on the review day. |
| **Valid pickup times and restaurant capacity:** The customer requested that pickup choices exclude past times and times the restaurant cannot accommodate. | **Add/Modify Product Backlog Item** | Time validation and restaurant capacity are separate concerns. For example, an order placed at 4:00 p.m. for pickup at 7:00 p.m. does not reveal how many additional orders will arrive between those times. The current prototype lacks sufficient operational information to determine reliable capacity limits for each pickup period. | Updated the requirement to distinguish the minimum preparation time from capacity restrictions. Available pickup times start at least 15 minutes after order submission, which is implemented. Capacity limits for individual pickup periods remain unimplemented and require further clarification. |
| **Pausing new orders:** The restaurant requested a way to pause incoming orders when it could not keep up, preferably by entering a custom pause duration. | **Clarify → Add/Modify Product Backlog Item** | Restaurants need control over incoming demand. The team identified arbitrary duration entry as too complex for the current implementation and adopted a simpler duration selection approach. | Added pause controls with preset durations. The demonstration used 15 seconds, and the merchant can select 15 minutes. Each repeated click adds another selected duration to the remaining pause time. Both customers and restaurant users can see the pause status or countdown. The feature was implemented on the review day. |
| **Customer order progress:** The customer requested visibility into the order’s progress after submission. | **Accept** | Customers need to know whether their order has been accepted, is being prepared, or is ready for pickup. | Added or refined the customer order status requirement. Order progress visibility is implemented in the final Increment. |
| **Pickup completion:** The restaurant requested a way to mark an order as picked up. | **Accept** | An order being ready and an order being collected are different stages. Restaurant staff need to distinguish orders awaiting pickup from completed pickups. | Added or refined the requirement for recording pickup completion. The “picked up” status is implemented in the final Increment. |

### Review Outcome

The review connected the demonstrated Increment to stakeholder needs and resulting Product Backlog changes. Pickup time selection and restaurant pause controls were implemented on October 6 following feedback. Customer order progress and pickup completion were also implemented in the final Increment.

The Product Backlog was manually updated to reflect the feedback, implementation outcomes, and remaining capacity restriction requirement. The team learned that allowing customers to select a pickup time does not, by itself, establish whether a restaurant can fulfill every order scheduled for that period. This limitation remains visible in the backlog for future refinement.
