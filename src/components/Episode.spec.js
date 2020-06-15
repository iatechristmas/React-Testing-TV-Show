import React from "react";
import { render } from "@testing-library/react";

import Episodes from "./Episodes";

const episodes = {
  data: [
    {
      airdate: "2016-07-15",
      airstamp: "2016-07-15T12:00:00+00:00",
      airtime: "",
      id: 553946,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
      },
      name: "Chapter One: The Vanishing of Will Byers",
      number: 1,
      runtime: 60,
      season: 1,
      summary:
        "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
      url:
        "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    },
    {
      airdate: "2016-07-15",
      airstamp: "2016-07-15T12:00:00+00:00",
      airtime: "",
      id: 578663,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
      },
      name: "Chapter Two: The Weirdo on Maple Street",
      number: 2,
      runtime: 60,
      season: 1,
      summary:
        "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
      url:
        "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
    },
    {
      airdate: "2016-07-15",
      airstamp: "2016-07-15T12:00:00+00:00",
      airtime: "",
      id: 578664,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
      },
      name: "Chapter Three: Holly, Jolly",
      number: 3,
      runtime: 60,
      season: 1,
      summary:
        "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
      url:
        "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
    },
  ],
};

test("episodes are rendered", async () => {
  const { findByText, findByAltText } = render(
    <Episodes episodes={episodes.data} />
  );

  const episodeName = await findByText(
    /Chapter One: The Vanishing of Will Byers/i
  );

  const episodeImage = await findByAltText(
    /Chapter One: The Vanishing of Will Byers/i
  );
  console.log("episodeName", episodeName);

  expect(episodeName).toBeInTheDocument();
  expect(episodeImage).toBeInTheDocument();
});
