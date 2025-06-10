// src/components/ui/Card.tsx
export const Card = ({ children, className }: any) => (
  <div className={`bg-white rounded-lg ${className}`}>{children}</div>
);

export const CardContent = ({ children, className }: any) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
