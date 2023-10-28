const Training = (props) => {
  return (
    <section id="education">
      <h1>Presentations</h1>
      <ul data-content="certifications">
        {props.trainings.map(function (item) {
          return (
            <li>
              <section>
                <ul>
                  <li>
                    <div className="label">Title:</div>
                    <div className="content">{item.name}</div>
                  </li>
                  <li>
                    <div className="label">Description:</div>
                    <div className="content">{item.description}</div>
                  </li>
                </ul>
              </section>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Training;
