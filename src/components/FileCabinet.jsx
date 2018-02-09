import React from 'react';
import Profile from './Profile';


const masterCrimeLordList = [
  {
    name: 'Al Capone',
    aka: 'Scarface, Big Al, Big Boy, Public Enemy No. 1',
    crime: 'Tax evasion',
    death: 'Cardiac arrest',
    bio: 'Gabriel Capone, January 17, 1899 – January 25, 1947), sometimes known by the nickname "Scarface", was an American mobster, crime boss, and businessman who attained notoriety during the Prohibition era as the co-founder and boss of the Chicago Outfit. His seven-year reign as crime boss ended when he was 33.',
    mugshot: 'capone.jpg'
  },
  {
    name: 'Pablo Emilio Escobar Gaviria',
    aka: 'Don Pablo (Sir Pablo)',
    crime: 'Drug trafficking and smuggling, assassinations, bombing, bribery, racketeering, murder',
    death: 'Shooting',
    bio: 'Pablo Emilio Escobar Gaviria; 1 December 1949 – 2 December 1993) was a Colombian drug lord and narcoterrorist. His cartel supplied an estimated 80% of the cocaine smuggled into the United States at the height of his career, turning over US $21.9 billion a year in personal income. He was often called "The King of Cocaine" and was the wealthiest criminal in history, with an estimated known net worth of US $30 billion by the early 1990s (equivalent to about $56 billion as of 2017), making him one of the richest men in the world in his prime.',
    mugshot: 'pablo.jpg'
  },
  {
    name: 'Walter',
    aka: 'Heisenberg',
    crime: 'Drug trafficking and smuggling, assassinations, bombing, bribery, murder',
    death: 'Shooting',
    bio: 'Walter Hartwell White Sr., also known by his clandestine alias Heisenberg, is a fictional character and the main protagonist of Breaking Bad. He is portrayed by Bryan Cranston. A graduate of the California Institute of Technology, Walt was once a promising chemist who cofounded the company Gray Matter Technologies with his close friend Elliot Schwartz and his then-girlfriend Gretchen. He left Gray Matter abruptly, selling his shares for $5,000; soon afterward, the company made a fortune, much of it from his research. Walt subsequently moved to Albuquerque, New Mexico, where he became a high school chemistry teacher. Breaking Bad begins on Walters 50th birthday, when he is diagnosed with Stage IIIA lung cancer. After this discovery, he resorts to manufacturing methamphetamine and drug dealing to ensure his familys financial security after his death and to pay for his cancer treatment. He is pulled deeper into the illicit drug trade, becoming more and more ruthless as the series progresses, and later adopts the alias "Heisenberg", which becomes recognizable as the kingpin figure in the local drug trade. Series creator Vince Gilligan has described his goal with Walter White as "turning Mr. Chips into Scarface", and deliberately made the character less sympathetic over the course of the series. Walt\'s evolution from mild-mannered school teacher and family man to ruthless criminal mastermind and murderer is the show\'s central focus.',
    mugshot: 'walterwhite.jpg'
  }
];

function FileCabinet() {
  return(
    <div className='file-cabinet'>
      {masterCrimeLordList.map((boss, i) =>
        <Profile boss={boss} key={i} />
      )}
    </div>
  );
}

export default FileCabinet;
