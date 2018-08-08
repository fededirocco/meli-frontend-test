import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
Enzyme.configure({ adapter: new Adapter() });

import Item from './item.jsx';

it("Renders item correctly", () => {

  let itemJson = {
    id: "10",
    title: "Zapatillas",
    picture: "Pic",
    condition: "Nuevo",
    free_shipping: true,
    location: "Capital Federal"
  }

  const wrapper = shallow (
    <Item key={"10"} item={JSON.stringify(itemJson)} price={2000} />
  );

  expect(wrapper).toMatchSnapshot();
});
