
import useCharacterInfo from "./characterHook";

const CharInfoComponent = ({ region, realm, characterName }) => {
  const { loading, error, data: characterInfo } = useCharacterInfo(
    region,
    realm,
    characterName,
    "guild,mythic_plus_scores_by_season:current,mythic_plus_ranks,mythic_plus_recent_runs,mythic_plus_best_runs,raid_progression"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const backgroundImageUrl =
    characterInfo && characterInfo.faction === "horde"
      ? "https://mir-s3-cdn-cf.behance.net/projects/max_808/85534c107500125.Y3JvcCwxMDYzLDgzMSwwLDE2OA.jpg"
      : "https://i.pinimg.com/originals/61/65/1d/61651da24eaaf3d1a4736224a49dd652.jpg";

  const backgroundStyle = {
    width: "100%",
    height: "100vh",
    transparency:"",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${backgroundImageUrl})`, // Set background image dynamically
  };

  return (
    <div style={backgroundStyle}>
      <h2>Character Information</h2>
      <p>
        Class: {characterInfo.class}, Race:{characterInfo.race},
        Specialization: {characterInfo.active_spec_name}, Achievement Points:{" "}
        {characterInfo.achievement_points}, Faction:{characterInfo.faction},
        Guild:{characterInfo.guild.name}
      </p>
    </div>
  );
};

export default CharInfoComponent;