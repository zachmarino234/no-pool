import TeamBio from "@/components/team/TeamBio";
import Kobi from "../../../public/kobi.png";
import Alex from "../../../public/alex.png";
import Andrew from "../../../public/andrew.png";
import Lily from "../../../public/lily.png";
import Emily from "../../../public/emily.jpg";
import Zach from "../../../public/zach.png";

export default function Team() {
  return (
    <main className="mt-24 3xl:px-64 2xl:px-50">
      <TeamBio name="Kobi Kassal" title="Managing Partner" imageURL={Kobi} linkedinURL="https://www.linkedin.com/in/kobi-kassal-0b5815109/" email="mailto:kkassal@gmail.com">
        Kobi is a producer, marketer, and media entrepreneur.  He founded Theatrely, a digital media platform aimed at Gen Z during his time at Boston University, and over the past few years it quickly grew into one of the most prominent Broadway outlets in the industry. In 2023, the company was acquired by Hollywood.com and Nederlander Worldwide Entertainment.
        <br /><br />
        He recently made his Broadway debut lead producing Trisha Paytas’ Big Broadway Dream at the St. James and has produced various productions and events around the city.
        <br /><br />
        Bagel Order: Sesame Bagel with Scallion Cream Cheese
      </TeamBio>
      <TeamBio name="Alex Dash" title="Partner" imageURL={Alex} linkedinURL="https://www.linkedin.com/in/alex-dash-a40809157/" email="mailto:alexanderldash@gmail.com">
        Alex began his theatrical journey as a stage manager in New York City working on various projects including Emojiland (Off-Broadway and National Tour), Make Me Gorgeous, Stranger Sings! and more. In addition, he has spent several years in the corporate advertising space working with clients such as Pepsi and the US Army. He is interested in the cross section of marketing and bringing young audiences to the theatre.
        <br /><br />
        Bagel Order: Egg & Cheese on Plain, add Avocado
      </TeamBio>
      <TeamBio name="Andrew Martini" title="Director of Literary" imageURL={Andrew} linkedinURL="https://www.linkedin.com/in/martiniandrew" email="">
        Andrew is a New York-based writer and producer with nearly a decade of experience working in the theatre. He has served as a member of the producing team at Bucks County Playhouse, where he managed script readers and provided dramaturgical analysis for its South Asian Artistic Initiative while producing public cabarets for the apprentice program and a presentation of new works by artists from Roundabout’s Space Jam program. Additionally, he has helped produce new work at Nederlander Worldwide Entertainment and Prospect Musicals. As a playwright, he has produced his own work in tandem with Permafrost Theatre Collective and as a part of theatre festivals throughout the city. His writing has appeared in Theatrely.
        <br /><br />
        Bagel Order:
      </TeamBio>
      <TeamBio name="Lily Hontz" title="Director of Operations" imageURL={Lily} linkedinURL="https://www.linkedin.com/in/lily-a-hontz/" email="">
        Lily grew up in Connecticut going to see theatre with her family, and has loved it ever since. Since graduating Boston University, she has dedicated her time to the arts working in various non-profits around the country. Her current musical theatre obsession is Sunset Blvd. and can’t stop listening. She currently resides on the Upper East Side.
        <br /><br />
        Bagel Order: Everything Bagel (extra toasted) with Scallion Cream Cheese
      </TeamBio>
      <TeamBio name="Emily Wyrwa" title="Associate Producer" imageURL={Emily} linkedinURL="https://www.linkedin.com/in/emily-wyrwa" email="mailto:evwyrwa@yahoo.com">
        Emily Wyrwa is originally (and proudly) from New Jersey and studies at Boston University College of Communication. She previously worked for the Boston Globe where she interviewed Ethan Slater about miming rather than "Wicked." She's a pizza snob, loves classic rock, and spends most of her spare time with her camera in hand exploring new neighborhoods. She can be spotted via the "Shucked" keychain on her bag!
        <br /><br />
        Bagel Order:
      </TeamBio>
      <TeamBio name="Zach Marino" title="Design Consultant" imageURL={Zach} linkedinURL="https://www.linkedin.com/in/zach-marino/" email="mailto:hello@zmarino.com" portfolio="https://www.zmarino.com">
        Zach Marino is a multi-faceted experience designer and web developer focused on the media and entertainment space. He created the brand identity, logo, and website for No Pool Productions, and serves as the team’s design consultant. He has held roles in Product Design at Dow Jones and The Boston Globe. He recently got bit by the Broadway bug, and spends as many evenings seeing Operation Mincemeat as he can. In his spare time, he also enjoys discovering new music, watching baseball, and baking new cookie recipes. 
        <br /><br />
        Bagel Order: BLT on a toasted everything bagel
      </TeamBio>
    </main>
  );
}