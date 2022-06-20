import React from "react";

function NavItems(props) {
  const { fname, lname } = props;

  var add = 0;

  const asd = () => {
    add = add + 1;
  };

  var usersData = [
    {
      fullName: "MAAZ ANIS",
      qualification: "BCS",
      speciality: "MERN",
    },
    {
      fullName: "MUHAMMAD HASHIR",
      qualification: "BS",
      speciality: "WORDPRESS",
    },
    { fullName: "AREESHA ANWAR", qualification: "BSCS", speciality: "JAVA" },
  ];

  return (
    <>
      {usersData.map((value, index) => {
        return (
          <div key={index}>
            <div>{value.fullName}</div>
            <div>{value.qualification}</div>
            <div>{value.speciality}</div>
          </div>
        );
      })}
      {add}
      <button onClick={asd}>add</button>
    </>
  );
}

export default NavItems;
