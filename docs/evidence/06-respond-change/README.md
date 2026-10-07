
# Part F — Respond to a Realistic Change

Decision date: October 5, 2026. Status: scope decision recorded; implementation not started. The team representative confirmed that the restaurant stakeholders agreed to the replacement described below. Implementation and testing remain pending.

## What exactly has changed?

Restaurant owners requested pickup choices that reflect their current workload. The restaurant stakeholders agreed to replace workload-based pickup-slot restrictions with a manual pause control in each restaurant's kitchen panel. During a pause, customers cannot submit new orders to that restaurant. Customers can continue browsing and adjusting their cart during a pause, but cannot submit it. The accepted solution controls incoming orders manually rather than calculating workload or restricting pickup slots. For late arrivals, restaurant staff will set the prepared meal aside and hand it to the customer on arrival; no new software feature for late-arrival handling is requested.

## What new or modified PBIs are needed?

Add PBI-F01: Restaurant staff can temporarily pause new orders for their own restaurant. The duration is configurable, with 30 seconds as the test default. Each click restarts the full duration from the latest click. Existing orders remain processable and the other restaurant remains available. See [the backlog update](../scrum/Part-F-Backlog-Update.md) for acceptance criteria and the planned task breakdown.

Record the original workload-based pickup-slot change request as superseded by PBI-F01 with stakeholder agreement. It is not retained as a planned future feature. This replaces the new workload-based restriction request, not the basic pickup-time selection already included in the original Sprint Goal.

## What questions would we ask the stakeholder?

The following questions were used to refine the change. The answers below reflect the stakeholder agreement reported by the team representative:

| Question | Agreed answer |
| --- | --- |
| Can manual pausing replace workload-based pickup-slot restrictions? | Yes. Use manual pause controls instead of implementing the requested workload-based restrictions. |
| What pause duration is needed in normal operation? | Each restaurant will communicate its required duration, which will then be configured. Thirty seconds is for testing only. |
| Is an early Resume button required? | No. Ordering resumes automatically when the timer expires. |
| Can customers select food while the restaurant is paused? | Yes. Browsing and cart changes remain available; submission is blocked. |
| What happens when Pause is clicked again? | Restart the full configured duration from the latest click. |
| How should late arrivals be handled? | Staff set the meal aside and hand it to the customer when they arrive. No additional software handling is included. |

The actual operating duration remains to be supplied by each restaurant. Staff access and the supported demonstration environment should be specified during Sprint 3 planning; they are not assumed to be agreed technical details.

## How important is this change compared with existing backlog items?

The team considers manual pausing equally important to existing backlog items. Equal importance does not automatically justify interrupting the current Sprint. Existing commitments retain precedence for the current Sprint, and manual pausing is targeted for Sprint 3. The exact Product Backlog position must be recorded with the existing items when the original backlog is available.

## Should any part affect the current Sprint?

No implementation work is added to the current Sprint. Its Sprint Backlog and existing commitments remain unchanged. Only backlog refinement and the change decision are recorded now. No existing item is removed to make room for manual pausing.

## What should be considered for a future Sprint?

Add Sprint 3 as a planned future Sprint targeting PBI-F01 (Github issue#28) only: independent restaurant pause controls, configurable duration, a customer-facing countdown, submission-time validation, automatic resumption, and integration testing. Dates, aggregate team capacity, estimates and assignees have not been provided and remain to be determined during Sprint Planning. The superseded workload-based pickup-slot restrictions are no longer planned. Late-arrival meal handling remains a restaurant operating procedure rather than a new software task. There is no Resume button.

## Does the Sprint Goal remain valid?

Yes. The original Sprint Goal remains valid and unchanged: deliver an end-to-end ordering increment for two restaurants with two dishes each, including valid pickup-time selection and successful submission. Manual pausing is deferred. Keeping the goal valid does not establish that pickup-time selection has already been implemented or verified.

## Backlog update and evidence

The companion backlog update records the new PBI, acceptance criteria, current-Sprint scope decision and planned Sprint 3 tasks. These files are local evidence of the decision. The original Product Backlog, Sprint Backlog and GitHub project board were not available locally, so no claim is made that those records have been synchronized. Upload both records and add/link PBI-F01 on the actual board; keep it out of the current Sprint. Preserve PR or commit links and a screenshot showing the future-Sprint assignment as evidence. Do not mark implementation or testing as complete until performed.
