export type Alert = {
    id: number;
    camera: string;
    type: string;
    severity: "high" | "medium" | "low";
    timestamp: string;
    status: "resolved" | "unresolved";
    description: string;
  };