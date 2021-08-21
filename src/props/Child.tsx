interface ChildProps {
  color: string;
};

// first way to declare components
export const Child = ({ color }: ChildProps) => {
  return <div>Hi there!</div>
};

// second way to declare components
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>
};
