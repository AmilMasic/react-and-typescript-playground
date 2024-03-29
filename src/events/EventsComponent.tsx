const EventsComponent: React.FC = () => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  }
return <div>
  <input onChange={(e) => console.log(e)}/>
  <div draggable onDragStart={onDragStart}>
    Drag Me!
  </div>
</div>
};

export default EventsComponent
