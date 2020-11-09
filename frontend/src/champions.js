// class Champions {
//     constructor(id, name, description, image) {
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.image = image;
//     }

// static showChampion() {
//     let championDiv = document.getElementById("champions-grid")

//     championDiv.innerHTML +=
//     `
//     <ul class="image-list-small">
//     <li>
//       <a href="#" style="background-image: url('img/champions/AatroxSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Aatrox</a></h3>
//         <p class="tagline">The Darkin Blade</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/AhriSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Ahri</a></h3>
//         <p class="tagline">The Nine-Tailed Fox</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/AkaliSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Akali</a></h3>
//         <p class="tagline">The Rouge Assassin</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/AlistarSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Alistar</a></h3>
//         <p class="tagline">The Minotaur</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/AmumuSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Amumu</a></h3>
//         <p class="tagline">The Sad Mummy</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/AniviaSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Anivia</a></h3>
//         <p class="tagline">The Cryophoenix</p>
//       </div>
//     </li>
//     <li>
//         <a href="#" style="background-image: url('img/champions/AnnieSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Annie</a></h3>
//           <p class="tagline">The Dark Child</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ApheliosSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Aphelios</a></h3>
//           <p class="tagline">The Weapon of the Faithful</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/AsheSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Ashe</a></h3>
//           <p class="tagline">The Frost Archer</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/Aurelion_SolSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Aurelion Sol</a></h3>
//           <p class="tagline">The Star Forger</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/AzirSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Azir</a></h3>
//           <p class="tagline">The Emperor of the Sands</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/BardSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Bard</a></h3>
//           <p class="tagline">The Wandering Caretaker</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/BlitzcrankSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Blitzcrank</a></h3>
//           <p class="tagline">The Great Steam Golem</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/BrandSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Brand</a></h3>
//           <p class="tagline">The Burning Vengeance</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/BraumSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Braum</a></h3>
//           <p class="tagline">The Heart of the Freljord</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/CaitlynSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Caitlyn</a></h3>
//           <p class="tagline">The Sheriff of Piltover</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/CamilleSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Camille</a></h3>
//           <p class="tagline">The Steel Shadow</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/CassiopeiaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Cassiopeia</a></h3>
//           <p class="tagline">The Serpent's Embrace</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ChoGathSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Cho'Gath</a></h3>
//           <p class="tagline">The Terror of the Void</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/CorkiSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Corki</a></h3>
//           <p class="tagline">The Daring Bombardier</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/DariusSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Darius</a></h3>
//           <p class="tagline">The Hand of Noxas</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/DianaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Diana</a></h3>
//           <p class="tagline">The Scorn of the Moon</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/Dr._MundoSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Dr. Mundo</a></h3>
//           <p class="tagline">The Madman of Zaun</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/DravenSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Draven</a></h3>
//           <p class="tagline">The Glorious Executioner</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/EkkoSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Ekko</a></h3>
//           <p class="tagline">The Boy Who Shattered Time</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/EliseSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Elise</a></h3>
//           <p class="tagline">The Spider Queen</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/EvelynnSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Evelynn</a></h3>
//           <p class="tagline">Agony's Embrace</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/EzrealSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Ezreal</a></h3>
//           <p class="tagline">The Prodigal Explorer</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/FiddlesticksSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Fiddlesticks</a></h3>
//           <p class="tagline">The Ancient Fear</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/FioraSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Fiora</a></h3>
//           <p class="tagline">The Grand Duelist</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/FizzSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Fizz</a></h3>
//           <p class="tagline">The Tidal Trickster</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/GalioSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Galio</a></h3>
//           <p class="tagline">The Colossus</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/GangplankSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Gangplank</a></h3>
//           <p class="tagline">The Saltwater Scourge</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/GarenSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Garen</a></h3>
//           <p class="tagline">The Might of Demacia</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/GnarSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Gnar</a></h3>
//           <p class="tagline">The Missing Link</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/GragasSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Gragas</a></h3>
//           <p class="tagline">The Rabble Rouser</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/GravesSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Graves</a></h3>
//           <p class="tagline">The Outlaw</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/HecarimSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Hecarim</a></h3>
//           <p class="tagline">The Shadow of War</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/HeimerdingerSquare_Unreleased.png');"></a>
//         <div class="details">
//           <h3><a href="#">Heimerdinger</a></h3>
//           <p class="tagline">The Revered Inventor</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/IllaoiSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Illaoi</a></h3>
//           <p class="tagline">The Kraken Priestess</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/IreliaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Irelia</a></h3>
//           <p class="tagline">The Blade Dancer</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/IvernSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Ivern</a></h3>
//           <p class="tagline">The Green Father</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/JannaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Janna</a></h3>
//           <p class="tagline">The Storm's Fury</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/Jarvan_IVSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Jarvan IV</a></h3>
//           <p class="tagline">The Exemplar of Demacia</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/JaxSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Jax</a></h3>
//           <p class="tagline">The Grandmaster at Arms</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/JayceSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Jayce</a></h3>
//           <p class="tagline">The Defender of Tomorrow</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/JhinSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Jhin</a></h3>
//           <p class="tagline">The Virtuoso</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/JinxSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Jinx</a></h3>
//           <p class="tagline">The Loose Cannon</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/KaiSaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Kai'Sa</a></h3>
//           <p class="tagline">Daughter of the Void</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/KalistaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Kalista</a></h3>
//           <p class="tagline">The Spear of Vengeance</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/KarmaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Karma</a></h3>
//           <p class="tagline">The Enlightened One</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/KarthusSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Karthus</a></h3>
//           <p class="tagline">The Deathsinger</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/KassadinSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Kassadin</a></h3>
//           <p class="tagline">The Void Walker</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/KatarinaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Katarina</a></h3>
//           <p class="tagline">The Sinister Blade</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/KayleSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Kayle</a></h3>
//           <p class="tagline">The Righteous</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/KaynSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Kayn</a></h3>
//           <p class="tagline">The Shadow Reaper</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/KennenSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Kennen</a></h3>
//           <p class="tagline">The Heart of the Tempest</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/KhaZixSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Kha'Zix</a></h3>
//           <p class="tagline">The Voidreaver</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/KindredSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Kindred</a></h3>
//           <p class="tagline">The Eternal Hunters</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/KledSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Kled</a></h3>
//           <p class="tagline">The Cantankerous Cavalier</p>
//         </div>
//       </li>
//       <li>
//       <a href="#" style="background-image: url('img/champions/KogMawSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Kog'Maw</a></h3>
//         <p class="tagline">The Mouth of the Abyss</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/LeBlancSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">LeBlanc</a></h3>
//         <p class="tagline">The Deceiver</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/Lee_SinSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Lee Sin</a></h3>
//         <p class="tagline">The Blind Monk</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/LeonaSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Leona</a></h3>
//         <p class="tagline">The Radiant Dawn</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/LilliaSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Lillia</a></h3>
//         <p class="tagline">The Bashful Bloom</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/LissandraSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Lissandra</a></h3>
//         <p class="tagline">The Ice Witch</p>
//       </div>
//     </li>
//     <li>
//         <a href="#" style="background-image: url('img/champions/LucianSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Lucian</a></h3>
//           <p class="tagline">The Purifier</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/LuluSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Lulu</a></h3>
//           <p class="tagline">The Fae Sorceress</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/LuxSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Lux</a></h3>
//           <p class="tagline">The Lady of Luminosity</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/MalphiteSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Malphite</a></h3>
//           <p class="tagline">Shard of the Monolith</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/MalzaharSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Malzahar</a></h3>
//           <p class="tagline">The Prophet of the Void</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/MaokaiSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Maokai</a></h3>
//           <p class="tagline">The Twisted Treant</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/Master_YiSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Master Yi</a></h3>
//           <p class="tagline">The Wuju Bladesman</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/MissFortuneSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Miss Fortune</a></h3>
//           <p class="tagline">The Bounty Hunter</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/MordekaiserSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Mordekaiser</a></h3>
//           <p class="tagline">The Iron Revenant</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/MorganaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Morgana</a></h3>
//           <p class="tagline">The Fallen</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/NamiSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Nami</a></h3>
//           <p class="tagline">The Tidecaller</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/NasusSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Nasus</a></h3>
//           <p class="tagline">The Curator of the Sands</p>
//         </div>
//       </li>
//       <li>
//       <a href="#" style="background-image: url('img/champions/NautilusSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Nautilus</a></h3>
//         <p class="tagline">The Titan of the Depths</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/NeekoSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Neeko</a></h3>
//         <p class="tagline">The Curious Chameleon</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/NidaleeSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Nidalee</a></h3>
//         <p class="tagline">The Bestial Huntress</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/NocturneSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Nocturne</a></h3>
//         <p class="tagline">The Eternal Nightmare</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/NunuWillumpSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Nunu & Willump</a></h3>
//         <p class="tagline">The Boy and His Yeti</p>
//       </div>
//     </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/OlafSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Olaf</a></h3>
//           <p class="tagline">The Berserker</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/OriannaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Orianna</a></h3>
//           <p class="tagline">The Lady of Clockwork</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/OrnnSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Ornn</a></h3>
//           <p class="tagline">The Fire Below the Mountain</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/PantheonSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Pantheon</a></h3>
//           <p class="tagline">The Unbreakable Spear</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/PoppySquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Poppy</a></h3>
//           <p class="tagline">Keeper of the Hammer</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/PykeSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Pyke</a></h3>
//           <p class="tagline">The Bloodharbor Ripper</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/QiyanaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Qiyana</a></h3>
//           <p class="tagline">Empress of the Elements</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/QuinnSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Quinn</a></h3>
//           <p class="tagline">Demacia's Wings</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/RakanSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Rakan</a></h3>
//           <p class="tagline">The Charmer</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/RammusSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Rammus</a></h3>
//           <p class="tagline">The Armordillo</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/RekSaiSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Rek'Sai</a></h3>
//           <p class="tagline">The Void Burrower</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/RenektonSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Renekton</a></h3>
//           <p class="tagline">The Butcher of the Sands</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/RengarSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Rengar</a></h3>
//           <p class="tagline">The Pridestalker</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/RivenSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Riven</a></h3>
//           <p class="tagline">The Exile</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/RumbleSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Rumble</a></h3>
//           <p class="tagline">The Mechanized Menace</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/RyzeSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Ryze</a></h3>
//           <p class="tagline">The Rune Mage</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SamiraSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Samira</a></h3>
//           <p class="tagline">The Desert Rose</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SejuaniSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Sejuani</a></h3>
//           <p class="tagline">Fury of the North</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SennaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Senna</a></h3>
//           <p class="tagline">The Redeemer</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SeraphineSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Seraphine</a></h3>
//           <p class="tagline">The Starry-Eyed Songstress</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SettSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Sett</a></h3>
//           <p class="tagline">The Boss</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ShacoSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Shaco</a></h3>
//           <p class="tagline">The Demon Jester</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ShenSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Shen</a></h3>
//           <p class="tagline">The Eye of Twilight</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ShyvanaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Shyvana</a></h3>
//           <p class="tagline">The Half-Dragon</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SingedSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Singed</a></h3>
//           <p class="tagline">The Mad Chemist</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SionSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Sion</a></h3>
//           <p class="tagline">The Undead Juggernaut</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SivirSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Sivir</a></h3>
//           <p class="tagline">The Battle Mistress</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SkarnerSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Skarner</a></h3>
//           <p class="tagline">The Crystal Vanguard</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SonaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Sona</a></h3>
//           <p class="tagline">Maven of Strings</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SorakaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Soraka</a></h3>
//           <p class="tagline">The Starchild</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SwainSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Swain</a></h3>
//           <p class="tagline">The Noxian Grand General</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SylasSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Sylas</a></h3>
//           <p class="tagline">The Unshackled</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/SyndraSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Syndra</a></h3>
//           <p class="tagline">The Dark Sovereign</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/Tahm_KenchSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Tahm Kench</a></h3>
//           <p class="tagline">The River King</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/TaliyahSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Taliyah</a></h3>
//           <p class="tagline">The Stoneweaver</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/TalonSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Talon</a></h3>
//           <p class="tagline">The Blade's Shadow</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/TaricSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Taric</a></h3>
//           <p class="tagline">The Sheild of Valoran</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/TeemoSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Teemo</a></h3>
//           <p class="tagline">The Swift Scout</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ThreshSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Thresh</a></h3>
//           <p class="tagline">The Chain Warden</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/TristanaSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Tristana</a></h3>
//           <p class="tagline">The Yordle Gunner</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/TrundleSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Trundle</a></h3>
//           <p class="tagline">The Troll King</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/TryndamereSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Tryndamere</a></h3>
//           <p class="tagline">The Barbarian King</p>
//         </div>
//       </li>
//       <li><a href="#" style="background-image: url('img/champions/Twisted_FateSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Twisted Fate</a></h3>
//         <p class="tagline">The Card Master</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/TwitchSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Twitch</a></h3>
//         <p class="tagline">The Plague Rat</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/UdyrSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Udyr</a></h3>
//         <p class="tagline">The Spirit Walker</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/UrgotSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Urgot</a></h3>
//         <p class="tagline">The Dreadnought</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/VarusSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Varus</a></h3>
//         <p class="tagline">The Arrow of Retribution</p>
//       </div>
//     </li>
//     <li>
//       <a href="#" style="background-image: url('img/champions/VayneSquare.png');"></a>
//       <div class="details">
//         <h3><a href="#">Vayne</a></h3>
//         <p class="tagline">The Night Hunterx</p>
//       </div>
//     </li>
//     <li>
//         <a href="#" style="background-image: url('img/champions/VeigarSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Veigar</a></h3>
//           <p class="tagline">The Tiny Master of Evil</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/VelKozSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Vel'Koz</a></h3>
//           <p class="tagline">The Eye of the Void</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ViSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Vi</a></h3>
//           <p class="tagline">The Piltover Enforcer</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ViktorSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Viktor</a></h3>
//           <p class="tagline">The Machine Herald</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/VladimirSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Vladimir</a></h3>
//           <p class="tagline">The Crimson Reaper</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/VolibearSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Volibear</a></h3>
//           <p class="tagline">The Relentless Storm</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/WarwickSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Warwick</a></h3>
//           <p class="tagline">The Uncaged Wrath of Zaun</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/WukongSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Wukong</a></h3>
//           <p class="tagline">The Monkey King</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/XayahSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Xayah</a></h3>
//           <p class="tagline">The Rebel</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/XerathSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Xerath</a></h3>
//           <p class="tagline">The Magus Ascendant</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/Xin_ZhaoSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Xin Zhao</a></h3>
//           <p class="tagline">The Seneschal of Demacia</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/YasuoSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Yasuo</a></h3>
//           <p class="tagline">The Unforgiven</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/YoneSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Yone</a></h3>
//           <p class="tagline">The Unforgotten</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/YorickSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Yorick</a></h3>
//           <p class="tagline">Shepherd of Souls</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/YuumiSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Yuumi</a></h3>
//           <p class="tagline">The Magical Cat</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ZacSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Zac</a></h3>
//           <p class="tagline">The Secret Weapon</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ZedSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Zed</a></h3>
//           <p class="tagline">The Master of Shadows</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ZiggsSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Ziggs</a></h3>
//           <p class="tagline">The Hexplosives Expert</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ZileanSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Zilean</a></h3>
//           <p class="tagline">The Chronokeeper</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ZoeSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Zoe</a></h3>
//           <p class="tagline">The Aspect of Twilight</p>
//         </div>
//       </li>
//       <li>
//         <a href="#" style="background-image: url('img/champions/ZyraSquare.png');"></a>
//         <div class="details">
//           <h3><a href="#">Zyra</a></h3>
//           <p class="tagline">Rise of the Thorns</p>
//         </div>
//       </li>
//   </ul>
//   `
//     }
// }