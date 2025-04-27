export const initialIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in job recommendations, creating an unequal opportunity landscape for users. The bias was traced to training data which had overrepresentation of specific groups.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information during an emergency response simulation, which could have led to dangerous actions in a real-world scenario. The model needs additional safety guardrails for critical domains.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata during conversations. No personal information was compromised, but the incident highlights potential vulnerabilities in information filtering.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Vision Model Misclassification",
    description: "AI vision system misclassified safety equipment in industrial setting, potentially allowing dangerous operations to proceed without proper protections. Immediate retraining with diverse safety equipment images was initiated.",
    severity: "High",
    reported_at: "2025-04-10T11:45:00Z"
  },
  {
    id: 5,
    title: "Prompt Injection Vulnerability",
    description: "Users discovered a way to inject system-level commands through carefully crafted prompts, bypassing some safety filters. The vulnerability was patched within hours of discovery.",
    severity: "Medium",
    reported_at: "2025-03-28T16:20:00Z"
  }
];