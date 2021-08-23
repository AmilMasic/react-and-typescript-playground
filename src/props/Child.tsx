interface ChildProps {
  color: string;
  onClick: () => void;
};

// first way to declare components
// you cannot directly add children
// export const Child = ({ color, onClick }: ChildProps) => {
//   return <div>
//     {color}
//     <button onClick={onClick}>Click me</button>
//   </div>;
// };

// second way to declare components
// this is better since it autoincludes features under the hood
// like passing children components
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return <div>
    {color}
    <button onClick={onClick}>Click me</button>
  </div>
};
