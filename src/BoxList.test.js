import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addTestBox(boxList, height = "2", width = "2", color = "peachpuff") {
    const heightInput = boxList.getByLabelText("Height:");
    const widthInput = boxList.getByLabelText("Width:");
    const backgroundInput = boxList.getByLabelText("Color:");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("New Box");
    fireEvent.click(button);
  }

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
    const boxList = render(<BoxList />);
  
    // no boxes yet
    expect(boxList.queryByText("X")).not.toBeInTheDocument();

    addTestBox(boxList);
  
    // expect to see a box
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
        height: 2em;
        width: 2em;
        background-color: peachpuff;
    `);
    // expect form to be empty
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);

  });

  it("can remove a box", function() {
    const boxList = render(<BoxList />);
    addTestBox(boxList);
  
    const removeButton = boxList.getByText("X");
  
    // click the remove button and the box should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
  });
  