/**
 * proj_path: ch05/ex/proj/famous-location-02
 * ./src/components/Famous.js
 */

import Place from "./Place"

const Famous = props => (
  <div>
    <header>
      <h1>{props.title}</h1>
    </header>
    <article className="places">
      {
        props.famous.map((item, i) => (
          <Place
            key={i}
            name={item.name}
            locations={item.locations}
            majors={item.majors}
          />
        ))
      }
    </article>
  </div>
);

export default Famous;