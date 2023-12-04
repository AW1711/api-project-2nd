

import useCharacterInfo from "./characterHook"


const RaidComponent = ({ region, realm, characterName }) => {
  const { loading, error, data: RaidInfo } = useCharacterInfo(
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
  const raidProgression = RaidInfo.raid_progression || []

  return (
    <div>
      <h2>Current Raid Progress</h2>
      <h5>
      Mythic Bosses Killed:{raidProgression['amirdrassil-the-dreams-hope'].mythic_bosses_killed} 

      Heroic Bosses Killed:{raidProgression['amirdrassil-the-dreams-hope'].heroic_bosses_killed} 
      Normal Bosses Killed:{raidProgression['amirdrassil-the-dreams-hope'].normal_bosses_killed}</h5>
    </div>
  );








}

export default RaidComponent