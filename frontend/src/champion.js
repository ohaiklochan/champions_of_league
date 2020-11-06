class Champion {
    constructor(name, role, win_ratio, pick_ratio) {
        this.name = name;
        this.role = role;
        this.win_ratio = win_ratio;
        this.pick_ratio = pick_ratio;
    }

    // instance method thats going to render the object to the DOM goes here

    showChampion() {
        let championDiv = document.getElementById("champions-grid")

        championDiv.innerHTML +=
        `
        <div class="row">
            <div class="column">
            <img src="AatroxSquare.png">
            <img src="AhriSquare.png">
            <img src="AkaliSquare.png">
            <img src="AlistarSquare.png">
            <img src="AmumuSquare.png">
            <img src="AniviaSquare.png">
            <img src="AnnieSquare.png">
            <img src="ApheliosSquare.png">
            <img src="AsheSquare.png">
            <img src="Aurelion_SolSquare.png">
            <img src="AzirSquare.png">
            <img src="BardSquare.png">
            <img src="BlitzcrankSquare.png">
            <img src="BrandSquare.png">
            <img src="BraumSquare.png">
            <img src="CaitlynSquare.png">
            <img src="CammilleSquare.png">
            <img src="CassiopeiaSquare.png">
            <img src="Cho%27GathSquare.png">
        </div>
        <div class="column">
            <img src="CorkiSquare.png">
            <img src="DariusSquare.png">
            <img src="DianaSquare.png">
            <img src="Dr._MundoSquare.png">
            <img src="EkkoSquare.png">
            <img src="EliseSquare.png">
            <img src="EzrealSquare.png">
            <img src="FiddlesticksSquare.png">
            <img src="FioraSquare.png">
            <img src="FizzSquare.png">
            <img src="GalioSquare.png">
            <img src="GangplankSquare.png">
            <img src="GarenSquare.png">
            <img src="GnarSquare.png">
            <img src="GargasSquare.png">
            <img src="GravesSquare.png">
            <img src="HecarimSquare.png">
            <img src="HeimerdingerSquare_Unreleased.png">
            <img src="IllaoiSquare.png">
        </div>
        <div class="column">
            <img src="IreliaSquare.png">
            <img src="IvernSquare.png">
            <img src="JannaSquare.png">
            <img src="Jarvan_IVSquare.png">
            <img src="JaxSquare.png">
            <img src="JayceSquare.png">
            <img src="JhinSquare.png">
            <img src="JinxSquare.png">
            <img src="Kai%27SaSquare.png">
            <img src="KalistaSquare.png">
            <img src="KarmaSquare.png">
            <img src="KarthusSquare.png">
            <img src="KassadinSquare.png">
            <img src="KatarinaSquare.png">
            <img src="KayleSquare.png">
            <img src="KaynSquare.png">
            <img src="KennenSquare.png">
            <img src="Kha%27ixSquare.png">
            <img src="KindredSquare.png">
        </div>
        <div class="column">
            <img src="wedding.png">
            <img src="rocks.png">
            <img src="falls2.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="rocks.png">
            <img src="falls2.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
        </div>
        <div class="column">
            <img src="wedding.png">
            <img src="rocks.png">
            <img src="falls2.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="rocks.png">
            <img src="falls2.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
        </div>
        <div class="column">
            <img src="wedding.png">
            <img src="rocks.png">
            <img src="falls2.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="rocks.png">
            <img src="falls2.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
        </div>
        <div class="column">
            <img src="wedding.png">
            <img src="rocks.png">
            <img src="falls2.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="rocks.png">
            <img src="falls2.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
        </div>
        <div class="column">
            <img src="wedding.png">
            <img src="rocks.png">
            <img src="falls2.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="rocks.png">
            <img src="falls2.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
            <img src="nature.png">
            <img src="mist.png">
            <img src="paris.png">
        </div>
    </div>
    `
    }
}