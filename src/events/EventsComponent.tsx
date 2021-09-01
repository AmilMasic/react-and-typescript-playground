const EventsComponent: React.FC = () => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

return <div>
  <input onChange={(e) => console.log(e)}/>
</div>
};

export default EventsComponent
