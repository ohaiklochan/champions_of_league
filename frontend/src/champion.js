class Champion {
    constructor(name, role, win_ratio, pick_ratio) {
        this.name = name;
        this.role = role;
        this.win_ratio = win_ratio;
        this.pick_ratio = pick_ratio;
    }

    // instance method thats going to render the object to the DOM goes here

    static showChampion() {
        let championDiv = document.getElementById("champions-grid")

        championDiv.innerHTML +=
    //     `
    //     <center>
    //     <div class="row">
    //         <div class="column">
    //         <img src="img/champions/AatroxSquare.png">
    //         <img src="img/champions/AhriSquare.png">
    //         <img src="img/champions/AkaliSquare.png">
    //         <img src="img/champions/AlistarSquare.png">
    //         <img src="img/champions/AmumuSquare.png">
    //         <img src="img/champions/AniviaSquare.png">
    //         <img src="img/champions/AnnieSquare.png">
    //         <img src="img/champions/ApheliosSquare.png">
    //         <img src="img/champions/AsheSquare.png">
    //         <img src="img/champions/Aurelion_SolSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/AzirSquare.png">
    //         <img src="img/champions/BardSquare.png">
    //         <img src="img/champions/BlitzcrankSquare.png">
    //         <img src="img/champions/BrandSquare.png">
    //         <img src="img/champions/BraumSquare.png">
    //         <img src="img/champions/CaitlynSquare.png">
    //         <img src="img/champions/CamilleSquare.png">
    //         <img src="img/champions/CassiopeiaSquare.png">
    //         <img src="img/champions/ChoGathSquare.png">
    //         <img src="img/champions/CorkiSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/DariusSquare.png">
    //         <img src="img/champions/DianaSquare.png">
    //         <img src="img/champions/Dr._MundoSquare.png">
    //         <img src="img/champions/DravenSquare.png">
    //         <img src="img/champions/EkkoSquare.png">
    //         <img src="img/champions/EliseSquare.png">
    //         <img src="img/champions/EvelynnSquare.png">
    //         <img src="img/champions/EzrealSquare.png">
    //         <img src="img/champions/FiddlesticksSquare.png">
    //         <img src="img/champions/FioraSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/FizzSquare.png">
    //         <img src="img/champions/GalioSquare.png">
    //         <img src="img/champions/GangplankSquare.png">
    //         <img src="img/champions/GarenSquare.png">
    //         <img src="img/champions/GnarSquare.png">
    //         <img src="img/champions/GragasSquare.png">
    //         <img src="img/champions/GravesSquare.png">
    //         <img src="img/champions/HecarimSquare.png">
    //         <img src="img/champions/HeimerdingerSquare_Unreleased.png">
    //         <img src="img/champions/IllaoiSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/IreliaSquare.png">
    //         <img src="img/champions/IvernSquare.png">
    //         <img src="img/champions/JannaSquare.png">
    //         <img src="img/champions/Jarvan_IVSquare.png">
    //         <img src="img/champions/JaxSquare.png">
    //         <img src="img/champions/JayceSquare.png">
    //         <img src="img/champions/JhinSquare.png">
    //         <img src="img/champions/JinxSquare.png">
    //         <img src="img/champions/KaiSaSquare.png">
    //         <img src="img/champions/KalistaSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/KarmaSquare.png">
    //         <img src="img/champions/KarthusSquare.png">
    //         <img src="img/champions/KassadinSquare.png">
    //         <img src="img/champions/KatarinaSquare.png">
    //         <img src="img/champions/KayleSquare.png">
    //         <img src="img/champions/KaynSquare.png">
    //         <img src="img/champions/KennenSquare.png">
    //         <img src="img/champions/KhaZixSquare.png">
    //         <img src="img/champions/KindredSquare.png">
    //         <img src="img/champions/KledSquare.png">
    //     </div>
    //     <div class="column">    
    //         <img src="img/champions/KogMawSquare.png">
    //         <img src="img/champions/LeBlancSquare.png">
    //         <img src="img/champions/Lee_SinSquare.png">
    //         <img src="img/champions/LeonaSquare.png">
    //         <img src="img/champions/LilliaSquare.png">
    //         <img src="img/champions/LissandraSquare.png">
    //         <img src="img/champions/LucianSquare.png">
    //         <img src="img/champions/LuluSquare.png">
    //         <img src="img/champions/LuxSquare.png">
    //         <img src="img/champions/MalphiteSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/MalzaharSquare.png">
    //         <img src="img/champions/MaokaiSquare.png">
    //         <img src="img/champions/Master_YiSquare.png">
    //         <img src="img/champions/MissFortuneSquare.png">
    //         <img src="img/champions/MordekaiserSquare.png">
    //         <img src="img/champions/MorganaSquare.png">
    //         <img src="img/champions/NamiSquare.png">
    //         <img src="img/champions/NasusSquare.png">
    //         <img src="img/champions/NautilusSquare.png">
    //         <img src="img/champions/NeekoSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/NidaleeSquare.png">
    //         <img src="img/champions/NocturneSquare.png">
    //         <img src="img/champions/NunuWillumpSquare.png">
    //         <img src="img/champions/OlafSquare.png">
    //         <img src="img/champions/OriannaSquare.png">
    //         <img src="img/champions/OrnnSquare.png">
    //         <img src="img/champions/PantheonSquare.png">
    //         <img src="img/champions/PoppySquare.png">
    //         <img src="img/champions/PykeSquare.png">
    //         <img src="img/champions/QiyanaSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/QuinnSquare.png">
    //         <img src="img/champions/RakanSquare.png">
    //         <img src="img/champions/RammusSquare.png">
    //         <img src="img/champions/RekSaiSquare.png">
    //         <img src="img/champions/RenektonSquare.png">
    //         <img src="img/champions/RengarSquare.png">
    //         <img src="img/champions/RhaastSquare.png">
    //         <img src="img/champions/RivenSquare.png">
    //         <img src="img/champions/RumbleSquare.png">
    //         <img src="img/champions/RyzeSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/SejuaniSquare.png">
    //         <img src="img/champions/SennaSquare.png">
    //         <img src="img/champions/SeraphineSquare.png">
    //         <img src="img/champions/SettSquare.png">
    //         <img src="img/champions/ShacoSquare.png">
    //         <img src="img/champions/ShenSquare.png">
    //         <img src="img/champions/ShyvanaSquare.png">
    //         <img src="img/champions/SingedSquare.png">
    //         <img src="img/champions/SionSquare.png">
    //         <img src="img/champions/SivirSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/SkaarlSquare.png">
    //         <img src="img/champions/SkarnerSquare.png">
    //         <img src="img/champions/SonaSquare.png">
    //         <img src="img/champions/SorakaSquare.png">
    //         <img src="img/champions/SwainSquare.png">
    //         <img src="img/champions/SylasSquare.png">
    //         <img src="img/champions/SyndraSquare.png">
    //         <img src="img/champions/TaliyahSquare.png">
    //         <img src="img/champions/TalonSquare.png">
    //         <img src="img/champions/TaricSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/TeemoSquare.png">
    //         <img src="img/champions/ThreshSquare.png">
    //         <img src="img/champions/TristanaSquare.png">
    //         <img src="img/champions/TrundleSquare.png">
    //         <img src="img/champions/TryndamereSquare.png">
    //         <img src="img/champions/Twisted_FateSquare.png">
    //         <img src="img/champions/TwitchSquare.png">
    //         <img src="img/champions/UdyrSquare.png">
    //         <img src="img/champions/UrgotSquare.png">
    //         <img src="img/champions/VarusSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/VayneSquare.png">
    //         <img src="img/champions/VeigarSquare.png">
    //         <img src="img/champions/VelKozSquare.png">
    //         <img src="img/champions/ViktorSquare.png">
    //         <img src="img/champions/ViSquare.png">
    //         <img src="img/champions/VladimirSquare.png">
    //         <img src="img/champions/VolibearSquare.png">
    //         <img src="img/champions/WarwickSquare.png">
    //         <img src="img/champions/WukongSquare.png">
    //         <img src="img/champions/XayahSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/XerathSquare.png">
    //         <img src="img/champions/Xin_ZhaoSquare.png">
    //         <img src="img/champions/YasuoSquare.png">
    //         <img src="img/champions/YoneSquare.png">
    //         <img src="img/champions/YorickSquare.png">
    //         <img src="img/champions/YuumiSquare.png">
    //         <img src="img/champions/ZacSquare.png">
    //         <img src="img/champions/ZedSquare.png">
    //         <img src="img/champions/ZiggsSquare.png">
    //         <img src="img/champions/ZileanSquare.png">
    //     </div>
    //     <div class="column">
    //         <img src="img/champions/ZoeSquare.png">
    //         <img src="img/champions/ZyraSquare.png">
    //     </div>
    // </div>
    // </center>
    // `
    }
}