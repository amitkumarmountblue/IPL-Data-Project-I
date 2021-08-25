function matchesPerYearForAllTheYear(matchData) {
    let result={};
    for(let match of matchData){
        const season=match.season;
        if(season in result){
            result[season]+=1;
        }else{
            result[season]=1;
        }  
    }

    return result;
}

function matchesWonPerTeamPerYear(matchData) {
    let result = {};
    for(let match of matchData){
        const season=match.season;
        const winner=match.winner;
        if(season in result){
            if(winner in result[season]){
                result[season][winner]+=1;
            }else{
                result[season][winner]=1;
            }
        }else{
            result[season]={};
            result[season][winner]=1;
        }
    }

    return result;
}

function extraRunPerTeamIn2016(matchData, deliveriesData){
    let result = {};
    let index = 0;
    for(let match of matchData){
        const season=match.season;
        if(season==2016){  
            index=match.id;  
        }
        for(let delivery of deliveriesData){
            const match_id=delivery.match_id;
            const bowling_team=delivery.bowling_team;
            const extra_runs=delivery.extra_runs;
            if(match_id==index){
                if(bowling_team in  result){
                    result[bowling_team]+=Number(extra_runs);
                }else{
                    result[bowling_team]=Number(extra_runs);
                }
            }
        }
    }

    return result;
    }

function top10EconomicalBowlersIn2015(matchData, deliveriesData){
    let result = [];
    let bowlersRun = {};
    let bowlerDeliveries={};
    let index = 0;

    for(let match of matchData){
        const season=match.season;
        if(season==2015){
          index=match.id;
        }
        for(let delivery of deliveriesData){
            if(delivery.match_id==index){
                if(delivery.bowler in bowlersRun){
                    bowlersRun[delivery.bowler]+= Number(delivery.total_runs);
                }else{
                    bowlersRun[delivery.bowler]= Number(delivery.total_runs);
                }
                if(delivery.bowler in bowlerDeliveries){
                    bowlerDeliveries[delivery.bowler]+=1;
                }else{
                    bowlerDeliveries[delivery.bowler]=1;
                }
            }
        }
    }
    for(key in bowlersRun){
        bowlersRun[key]=((bowlersRun[key]*6)/bowlerDeliveries[key]).toFixed(2);
    }

    result = Object.entries(bowlersRun).sort((a,b) => a[1]-b[1]).slice(0,10);

    return result;
}

module.exports.matchesPerYearForAllTheYear = matchesPerYearForAllTheYear;
module.exports.matchesWonPerTeamPerYear = matchesWonPerTeamPerYear;
module.exports.extraRunPerTeamIn2016 = extraRunPerTeamIn2016;
module.exports.top10EconomicalBowlersIn2015 = top10EconomicalBowlersIn2015;