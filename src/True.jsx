


const truthy = (props) => {
    return (
        <div className="slot-inner">
          <h1>
            {props.x} {props.y} {props.z}{" "}
          </h1>
          <h1>This is Matching.</h1>
          <hr />
        </div>
      );
};

export default truthy;
