import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchBubbles as mockFetchBubbles } from '../utils/fetchBubbles'
jest.mock('../utils/fetchBubbles')

test("Fetches data and renders the bubbles", async () => {
  render(<BubblePage />)

  const colors = await screen.findByTestId(/bubble/i)
  console.log(colors)

  const colorsTitle = await screen.findByText(/colors/i)


});






















// const bubbles = [
//   {color: "aliceblue", code: {hex: "#f0f8ff"}, id: 1}
// ]

// test('', async () => {
//   mockFetchBubbles.mockResolvedValueOnce({
//     data:[
//       {color: "aliceblue", code: {hex: "#f0f8ff"}, id: 1}
//     ]
//   })
//   render(<BubblePage />)

//   const bubbles = queryByTestId(/bubble/i)
//   console.log(bubbles)
// })