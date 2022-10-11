# RunRunRun (race startlist)

This is a basic admin page for a running events organiser I built using TypeScript, React and Bootstrap CSS. The data is fetched within the app's Context and passed around the app using React's useContext hook.

## Features

The home page is a list of all bookings made which can be filtered in the following ways:

* By search term (using the search bar in the header)

* By booking status (showing only confirmed or pending bookings)

* By ticket price (from cheapest to most expensive or vice versa)

Each booking displayed contains a link to more information about the booking and a link to the relevant race startlist.

Below the filters there's a button for customers that links them to a page where they can buy tickets for upcoming races (past races have their 'add to cart' button disabled). This probably wouldn't appear in an admin panel in any real-life scenario, it was just a handy place to include that particular feature in this case!

In the top right of the screen there's an Organiser Portal button, which clicks through to a dropdown selector featuring all of the events organisers. After selecting their own company, each organiser can see their overall takings and a list of all their events, each of which contains a link to each race startlist. Total takings are also broken down and displayed by each individual event and race.

[Jonny Abrams](https://github.com/jonnyabrams)