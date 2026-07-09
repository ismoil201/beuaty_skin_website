import { escapeHtml } from "../../utils/html.js";
import { formatDateTime } from "../../utils/format.js";

export function OrderTimeline({ history = [], statusLabelFor }) {
  return history.map((item) => `
    <div class="timeline-item">
      <span></span>
      <div>
        <strong>${escapeHtml(statusLabelFor(item.status))}</strong>
        <p class="hint">${formatDateTime(item.createdAt)}</p>
        ${item.note ? `<p class="hint">${escapeHtml(item.note)}</p>` : ""}
      </div>
    </div>
  `).join("");
}

const ORDER_PROGRESS_STEPS = [
  { key: "NEW", icon: "clock" },
  { key: "CONFIRMED", icon: "check" },
  { key: "PACKED", icon: "box" },
  { key: "SHIPPED", icon: "truck" },
  { key: "DELIVERED", icon: "car" },
];

function orderStepIcon(icon) {
  const icons = {
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4 10-10"/></svg>',
    box: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="M4 7l8 4 8-4M12 11v10"/></svg>',
    truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="17.5" cy="17.5" r="1.5"/></svg>',
    car: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14l-1-4H6z"/><path d="M4 16h16v3H4z"/><circle cx="7.5" cy="16.5" r="1.5"/><circle cx="16.5" cy="16.5" r="1.5"/></svg>',
  };
  return icons[icon] || icons.clock;
}

export function getOrderProgressIndex(status = "") {
  const key = String(status || "").toUpperCase();
  if (key === "PENDING") return 0;
  const index = ORDER_PROGRESS_STEPS.findIndex((step) => step.key === key);
  return index >= 0 ? index : 0;
}

export function OrderProgressStepper({ status = "", statusLabelFor }) {
  const currentIndex = getOrderProgressIndex(status);
  const canceled = ["CANCELED", "CANCELLED"].includes(String(status || "").toUpperCase());

  return `
    <div class="app-orders-stepper ${canceled ? "is-canceled" : ""}">
      ${ORDER_PROGRESS_STEPS.map((step, index) => {
    const lastIndex = ORDER_PROGRESS_STEPS.length - 1;
    const allComplete = !canceled && currentIndex === lastIndex;
    const isDone = !canceled && (index < currentIndex || (allComplete && index <= currentIndex));
    const isActive = !canceled && index === currentIndex && !allComplete;
    const stateClass = isDone ? "is-done" : isActive ? "is-active" : "";
    return `
          <div class="app-orders-step ${stateClass}">
            <span class="app-orders-step-icon">${orderStepIcon(step.icon)}</span>
            <span class="app-orders-step-label">${escapeHtml(statusLabelFor(step.key))}</span>
          </div>
        `;
  }).join("")}
    </div>
  `;
}
