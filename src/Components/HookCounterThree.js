import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => {
          setName({ ...name, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => {
          setName({ ...name, lastName: e.target.value });
        }}
      />
      <h3>Your firstname:{name.firstName}</h3>
      <h3>Your lastName:{name.lastName}</h3>
      {JSON.stringify(name)}
    </form>
  );
}
export default HookCounterThree;
