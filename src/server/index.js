const { matchesPerYearForAllTheYear,matchesWonPerTeamPerYear,extraRunPerTeamIn2016,top10EconomicalBowlersIn2015 } = require('./ipl');
const csv = require('csv-parser');
const fs = require('fs');
const matchData = [];
const deliveriesData = [];

fs.createReadStream('../data/matches.csv')
    .pipe(csv({}))  
    .on('data', (data) => matchData.push(data))   
    .on('end', () => {
        fs.createReadStream('../data/deliveries.csv') 
            .pipe(csv({}))
            .on('data', (data) => deliveriesData.push(data))
            .on('end', () => {
                const result1 = matchesPerYearForAllTheYear(matchData);
                const result2 = matchesWonPerTeamPerYear(matchData);
                const result3 = extraRunPerTeamIn2016(matchData, deliveriesData);
                const result4 = top10EconomicalBowlersIn2015(matchData, deliveriesData);

                function dumpResult(data, file){
                    fs.writeFile(file, JSON.stringify(data,null,2), function (err) {
                        if (err) {
                            return console.log(err);
                        }
                    });
                }
                dumpResult(result1, '../../src/public/output/matchesPerYearForAllTheYear.json');
                dumpResult(result2,'../../src/public/output/matchesWonPerTeamPerYear.json');
                dumpResult(result3, '../../src/public/output/extraRunPerTeamIn2016.json');
                dumpResult(result4, '../../src/public/output/top10EconomicalBowlersIn2015.json');
            });
        });