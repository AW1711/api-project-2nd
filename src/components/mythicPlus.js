
import React from "react";
import useCharacterInfo from "./characterHook"


const MythicPlusComponent = ({ region, realm, characterName }) => {
  const { loading, error, data: mythicPlusInfo } = useCharacterInfo(
    region,
    realm,
    characterName,
    "mythic_plus_scores_by_season:current,mythic_plus_ranks,mythic_plus_recent_runs,mythic_plus_best_runs,raid_progression"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const bestRuns = mythicPlusInfo.mythic_plus_best_runs || [];
  const topScore = mythicPlusInfo.mythic_plus_scores_by_season || [];

  return (
    <div>
      <h2>M+ Information</h2>
  
      {bestRuns.length > 0 && (
        <div>
          <h3>Best Runs</h3>
          <ul>
            {bestRuns.map((run, index) => (
              <li key={index}>
                {run.dungeon} {run.mythic_level}
              </li>
            ))}
          </ul>
        </div>
      )}
  
      {topScore.length > 0 && (
        <div>
          <h3>Current Score</h3>
          {topScore.map((season, index) => (
            <div key={index}>
              <p>Season: {season.season}</p>
              <p> {season.scores.all}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );}

export default MythicPlusComponent;