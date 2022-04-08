import cricLive from "cric-live";

cricLive.getRecentMatches().then((currentMatches) => {
  console.log(currentMatches);
  /*
      [ 
          {
              "id": "20080",
              "type": "T20",
              "series": "Indian Premier League, 2018",
              "title": "SRH vs CSK",
              "state": "inprogress",
              "status": "SRH elect to field",
              "teams": [
                  {
                      "name": "Hyderabad",
                      "shortName": "SRH"
                  },
                  {
                      "name": "Chennai",
                      "shortName": "CSK"
                  }
              ],
              "date": "Apr 22 2018",
              "startTime": "10:30"
          },
          ...
      ] 
      */
});
