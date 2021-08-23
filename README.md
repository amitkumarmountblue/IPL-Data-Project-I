# **IPL Data Project I**

This is IPL Data project, in which we had to fetch data from CSV files and calculate certain stats and then dump the data in json file.
   * The number of matches played per year for all the years in IPL.
   * The number of matches won per team per year in IPL.
   * Extra runs conceded per team in the year 2016
   * Top 10 economical bowlers in the year 2015

## Install all dependency

       npm init 
       npm i csv-parser

## Run this project

       cd src
       cd server
       node index.js

The data is dumped into the output folder as separate JSON files.

   * Number of matches player per year for all the team is in matchesPerYear.json file.
   * Number of matches won per team per year is in matchesWonPerTeamPerYear.json file.
   * Extra runs conceded per team in the year 2016 is in extraRunPerTeamIn2016.json file.
   * Top 10 economical bowlers in the year 2015 is in top10EconomicalBowlersIn2015.json file.
