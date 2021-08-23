function numberOfMatchesPerYear(matches) {
    let result={};
    for(let match of matches){
        const season=match.season;

        if(season in result){
            result[season]+=1;
        }else{
            result[season]=1;
        }  
    }

    return result;
}

function numberOfMatchesWonPerTeamPerYear(matches) {
    let result = {};
    for(let match of matches){
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

function extraRunConcededPerTeamIn2016(matches, deliveries){
    let result = {};
    let id = 0;
    for(let match of matches){
        const season=match.season;
        if(season==2016){  
            id=match.id;
            
        }
        for(let delivery of deliveries){
            const match_id=delivery.match_id;
            const bowling_team=delivery.bowling_team;
            const extra_runs=delivery.extra_runs;
            if(match_id==id){
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

function top10EconomicalBowlersIn2015(matches, deliveries){
    let result = [];
    let bowlersRun = {};
    let bowlerDeliveries={};
    let economicalBowlers=[];
    let id = 0;
    let count = 0;

    for(let match of matches){
        const season=match.season;
        if(season==2015){
          id=match.id;
        }
        for(let delivery of deliveries){
            if(delivery.match_id==id){
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

module.exports.numberOfMatchesPerYear = numberOfMatchesPerYear;
module.exports.numberOfMatchesWonPerTeamPerYear = numberOfMatchesWonPerTeamPerYear;
module.exports.extraRunConcededPerTeamIn2016 = extraRunConcededPerTeamIn2016;
module.exports.top10EconomicalBowlersIn2015 = top10EconomicalBowlersIn2015;